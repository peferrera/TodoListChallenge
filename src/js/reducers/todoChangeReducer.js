const initialState = [
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
    ];

const todoChangeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return  [...state, 
                    {
                        id: state.length,
                        text: action.text,
                        done: false
                    }
                ];
        case 'TODO_TOGGLE_DONE':
            const newState =[...state];

            for (let todo of newState) {
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
