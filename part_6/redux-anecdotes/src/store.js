import { createStore, combineReducers } from 'redux'

import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer
})

const Store = createStore(reducer)

export default Store