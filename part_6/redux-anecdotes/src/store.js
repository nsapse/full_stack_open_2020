import reducer from './reducers/anecdoteReducer'
import { createStore } from 'redux'

const Store = createStore(reducer)

export default Store