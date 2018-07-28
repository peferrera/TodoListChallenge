const initialState = {
    todos: [
        {
            id: 0,
            text: 'Take a look at the application',
            done: true
        },
        {
            id: 1,
            text: 'Add ability to filter todos',
            done: false
        },
        {
            id: 2,
            text: 'Filter todos by status',
            done: false
        },
        {
            id: 3,
            text: 'Filter todos by text',
            done: false
        }
    ]
}

const todoChangeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, 
                    {
                        id: state.todos.length,
                        text: action.text,
                        done: false
                    }
                ]
            };
        case 'TODO_TOGGLE_DONE':
            const newState = {
                    ...state, 
                    todos: [...state.todos]
                };

            for (let todo of newState.todos) {
                if (todo.id === action.id) {
                    todo.done = !todo.done;
                    return newState;
                }
            };

            return newState;
        default: 
            return state;
    }

}
export default todoChangeReducer;
