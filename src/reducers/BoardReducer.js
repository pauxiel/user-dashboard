import {
    FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL, SET_GENDER
} from './types';



function BoardReducer(state, action) {
    switch(action.type) {
        case FETCH_DATA: 
        return {
            ...state,
            loading: true,
        };

        case FETCH_DATA_SUCCESS: 
        return {
            ...state,
            users: action.users,
            loading: false,
        };
          
        case FETCH_DATA_FAIL:
            return {
                ...state,
                iserror: true
            };

        case SET_GENDER: 
             return {
                 ...state,
                 gender: action.gender
             }
        

        default:
            return state;
    }
}

export default BoardReducer;