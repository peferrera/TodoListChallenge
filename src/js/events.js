import {
    todos
} from './state';
import {
    listen
} from './lib/events';
import {
    addTodo,
    toggleTodoState
} from './actions';

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
}