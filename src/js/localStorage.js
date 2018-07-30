export const loadTodos = () => {
    try {
        const serializedTodos = localStorage.getItem('state');
        if ( serializedTodos === null) {
            return undefined;
        }
        return JSON.parse(serializedTodos);
    } catch(error) {
        return undefined;
    }
};

export const saveTodos = (state) => {
    try {
        const serializedTodos = JSON.stringify(state);
        localStorage.setItem('state', serializedTodos);
    } catch (error) {

    }
};