import '../css/main.css';

import Store from './store/index';
import {render} from './view';
import {registerEventHandlers} from './events';
import  {saveTodos}  from './localStorage';

Store.subscribe(() => render(document.body, Store.getState()));
Store.subscribe(()=> {
    saveTodos(Store.getState());
})

render(document.body, Store.getState());

registerEventHandlers();