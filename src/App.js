import logo from './logo.svg';
import React,{useEffect, useReducer } from 'react';
import {FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL} from './reducers/types';
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

  const [state, dispatch] = useReducer(BoardReducer, initialState);

    useEffect(() => {
      const fetchData = async () => {
        dispatch({type: FETCH_DATA})
        try {
          const response = await axios('https://randomuser.me/api/?page=6&results=60&seed=123');
          dispatch({
            type: FETCH_DATA_SUCCESS, 
            users: response.data.results,
          })

          // const leus = response.data.results;
          // let leugender = leus.map(leu => leu.gender);
          
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
