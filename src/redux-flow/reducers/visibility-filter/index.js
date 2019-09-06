import { SHOW_ALL, SET_VISIBILITY_FILTER } from './actions'
import createReducer from '../create-reducer'

export const initialState = SHOW_ALL

//utulizando o reducer com o create-reducer
const visibilityFilter = createReducer(initialState, {
    [SET_VISIBILITY_FILTER]: (state,action) => action.payload.filter
})  

export default visibilityFilter