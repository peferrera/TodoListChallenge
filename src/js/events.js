import  todos  from './store/index';
import { listen } from './lib/events';
import { addTodo, toggleTodoState, changeVisibility } from './actions/actions';

export function registerEventHandlers() {
    listen('click', '#addTodo', event => {
        const todoInput = document.getElementById('todoInput');
        todos.dispatch(addTodo(todoInput.value));
        event.stopPropagation();
        document.getElementById("todoInput").focus();

    });

    listen('keyup', '#todoInput', event => {
        if (event.key === 'Enter') {
            const todoInput = document.getElementById('todoInput');
            todos.dispatch(addTodo(todoInput.value));
            event.stopPropagation();
            document.getElementById("todoInput").focus();

        }
    });

    listen('click', '.js_toggle_todo', event => {
        const id = Number.parseInt(event.target.getAttribute('data-id'), 10);
        todos.dispatch(toggleTodoState(id));
    });

    listen('click', '#show_open', event => {
        todos.dispatch(changeVisibility('open'));
    });
    
    listen('click', '#show_all', event => {
        todos.dispatch(changeVisibility('all'));
    });

    listen('click', '#show_done', event => {
        todos.dispatch(changeVisibility('done'));
    });
}