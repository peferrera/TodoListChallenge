export function toggleTodoState(id) {
    return {
        type: 'TODO_TOGGLE_DONE',
        id: id
    };
}

export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text: text
    }
}