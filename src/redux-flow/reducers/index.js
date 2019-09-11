import { combineReducers } from 'redux'
import address from './address'
import reducerTodos from './todos'
import reducerVisibilityFilter from './visibility-filter'

export default combineReducers({
    address: reducerAddress,
    todos: reducerTodos,
    visibilityFilter: reducerVisibilityFilter
})
