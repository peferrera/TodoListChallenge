import { createStore, combineReducers } from 'redux';
import todoChangeReducer from '../reducers/todoChangeReducer';

const Store = createStore(
    todoChangeReducer
);

export default Store;
