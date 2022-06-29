import logo from './logo.svg';
import React,{useEffect, useReducer } from 'react';
import {FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL, SET_GENDER} from './reducers/types';
import axios from 'axios';
import  BoardReducer from './reducers/BoardReducer';

import './App.css';


function App() {
  const initialState = {
    users: [],
    search: '',
    gender: [],
    activeGender: [],
    sortButton: [],
    loading: false,
    iserror: false  
  }
  
  //The useReducer hook takes a reducer and an intial state as arguments to return an array with two constant elemnt 
  // a state and something you call it to update that state called dispatch 
  const [state, dispatch] = useReducer(BoardReducer, initialState);
  const {users, search, gender, activeGender, sortButton, loading, iserror} = state;

    useEffect(() => {
      const fetchData = async () => {
        dispatch({type: FETCH_DATA})
        try {
          const response = await axios('https://randomuser.me/api/?page=6&results=60&seed=123');
          dispatch({
            type: FETCH_DATA_SUCCESS, 
            users: response.data.results,
          })

          const userlist = response.data.results;
          let userGender = userlist.map(user => user.gender);
          userGender = ['all', ...new Set(userGender)]

          console.log(userGender);

          dispatch({
            type: SET_GENDER,
            gender: userGender,
          })
          
          // leugender = ['all', ...new Set(leugender)];
          // console.log(leugender);



        } catch (error) {
          dispatch ({type: FETCH_DATA_FAIL});
        }
      };
      fetchData();
    }, [])

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 className="text-4xl font-bold underline">
       Hello world!
    </h1>

      </header>
    </div>
  );
}

export default App;
