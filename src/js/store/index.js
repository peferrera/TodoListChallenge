import {
    createStore,
    combineReducers
} from 'redux';
import todos from '../reducers/todoChangeReducer';
import visibility from '../reducers/visibilityReducer';
import appReducers from '../reducers/index';
import {
    loadTodos
} from '../localStorage';

var Store = {};

var savedState = loadTodos();
if (savedState) {
    savedState.visibility = "all";

    Store = createStore(
        appReducers,
        savedState
    );
} else {
    Store = createStore(
        appReducers
    );
}
export default Store;