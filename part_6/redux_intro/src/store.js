const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state -1 
        case 'ZERO'
            return 0
        default:
            return state;
    }
}