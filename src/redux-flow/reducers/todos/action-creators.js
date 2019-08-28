'use strict'

import { ADD_TODO, TOGGLE_TODO } from './actions'
import { v4 } from 'uuid'

export const addTodo = (text, resumo) => ({
  type: ADD_TODO,
  payload: { id: v4(), text, resumo }
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id }
})
