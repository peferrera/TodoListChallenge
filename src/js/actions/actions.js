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
    };
}

export function changeVisibility(visibility) {
    return {
        type: 'CHANGE_VISIBILITY',
        visibility: visibility
    };
}
