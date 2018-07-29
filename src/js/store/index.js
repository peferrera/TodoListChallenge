import { createStore, combineReducers } from 'redux';
import todos from '../reducers/todoChangeReducer';
import visibility from '../reducers/visibilityReducer';

const Store = createStore(combineReducers({
    todos,
    visibility
})
);
console.log(Store.getState());
export default Store;
