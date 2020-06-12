
export const notificationChange = notification => {
    return {
        type:'SET_NOTIFICATION',
        notification: notification,
    }
}

const notificationReducer = (state='A Message Has Been Set', action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.notification 
        default:
            return state
    }
}

export default notificationReducer