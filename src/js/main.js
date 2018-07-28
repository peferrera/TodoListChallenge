import '../css/main.css';

import todos from './store/index';
import {render} from './view';
import {registerEventHandlers} from './events';

todos.subscribe(() => render(document.body, todos.getState()));

render(document.body, todos.getState());

registerEventHandlers();