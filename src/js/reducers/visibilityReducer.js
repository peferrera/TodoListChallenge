const visibilityFilterReducer = (
    state = 'all',
    action
) => {
    switch (action.type) {
        case 'CHANGE_VISIBILITY':
            return action.visibility;
        default:
            return state;
    }
}

export default visibilityFilterReducer;