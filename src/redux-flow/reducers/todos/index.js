import { ADD_TODO, TOGGLE_TODO } from './actions'

export const initialState = []

const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        resumo: action.payload.resumo,
        completed: false
      })
    case TOGGLE_TODO:
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
  return state
}

export default todo
