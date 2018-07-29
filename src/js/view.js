import {
    isEnabled
} from './lib/feature';

const getTodosFiltrando = (state) => {
    if (state.visibility == "done"){
        return state.todos.filter(todo => todo.done);
    } else if (state.visibility == "open") {
        return state.todos.filter(todo => !todo.done);
    }else {
        return state.todos;
    }

} 

export function render(el, state) {
    const todoItems = getTodosFiltrando(state).map(renderTodoItem).join('');
    el.innerHTML = renderApp(
        renderInput(),
        renderTodos(todoItems),
        renderFilters(state.visibility)
    );
}

function renderApp(input, todoList, filters) {
    var appReturn = "";

    if (isEnabled('renderBottom')) {
        appReturn = renderAddTodoAtBottom(input, todoList);
    } else {
        appReturn = renderAddTodoAtTop(input, todoList);
    }

    if (isEnabled('filter')) {
        appReturn += filters;
    }
    return appReturn;
}

function renderFilters(visibility) {
    const filterAll = `<input type="radio" id="show_all" name="filter" ${visibility == "all" ? "checked" : ""}> 
    <label for="show_all"> All </label>`;
    const filterOpen = `<input type="radio" id="show_open" name="filter" ${visibility == "open" ? "checked" : ""}> 
    <label for="show_open"> Open </label>`;
    const filterDone = `<input type="radio" id="show_done" name="filter" ${visibility == "done" ? "checked" : ""}>
    <label for="show_done"> Done </label>`;

    return `<div>
        ${filterAll}
        ${filterOpen}
        ${filterDone}
    </div>`;
}

function renderAddTodoAtTop(input, todoList) {
    return `<div id="app">
        ${input}
        ${todoList}
    </div>`;
}

function renderAddTodoAtBottom(input, todoList) {
    return `<div id="app">
        ${todoList}
        ${input}
    </div>`;
}

function renderInput() {
    return `<div class="todo__input"><input type="text" id="todoInput" required><button id="addTodo">Add</button></div>`;
}

function renderTodos(todoItems) {
    return `<ul class="todo">${todoItems}</ul>`;
}

function renderTodoItem(todo) {
    const todoClass = `todo__item todo__item--${todo.done ? 'done' : 'open'}`;
    return `<li class="${todoClass}">
        <input class="js_toggle_todo" type="checkbox" data-id="${todo.id}"${todo.done ? ' checked' : ''}>
        ${todo.text}
    </li>`;
}
