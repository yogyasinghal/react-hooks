// redux thunk is middleware
// is it easy then redux 
import {createStore,applyMiddleware} from 'redux';
import thunk from  'redux-thunk';
import userReducer from './reducers/userReducer';

let initialState={
    users:['initial from store'],
    loading:true
} 

const store = createStore(userReducer,initialState,applyMiddleware(thunk))
export default store;