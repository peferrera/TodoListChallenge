import todos from '../reducers/todoChangeReducer';
import visibility from '../reducers/visibilityReducer';
import { combineReducers } from 'redux';

const appReducers = combineReducers({
    todos,
    visibility
});

export default appReducers;

