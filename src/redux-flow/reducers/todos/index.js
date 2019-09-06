import { ADD_TODO, TOGGLE_TODO } from './actions'
import createReducer from '../../reducers/create-reducer'

export const initialState = []

const todos = createReducer(initialState, {
  [ADD_TODO]: (state, action) => {
    return state.concat({
      id: action.payload.id,
      text: action.payload.text,
      resumo: action.payload.resumo,
      completed: false
    })
  },
  [TOGGLE_TODO]: (state, action) => {
    return state.map((todo) => {
      if (todo.id !== action.payload.id) {
        return todo
      }
      return {
        ...todo,
        completed: !todo.completed
      }
    })
  }
})
export default todos