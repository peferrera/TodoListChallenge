import { createStore, combineReducers } from 'redux';
import todos from '../reducers/todoChangeReducer';
import visibility from '../reducers/visibilityReducer';
import appReducers from '../reducers/index';
import { loadTodos } from '../localStorage';

const savedState = loadTodos();
savedState.visibility = "all";
const Store = createStore(
    appReducers,
    savedState
);
// console.log(Store.getState());

export default Store;
