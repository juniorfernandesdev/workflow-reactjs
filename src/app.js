'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo } from './redux-flow/reducers/todos/action-creators'
import todo from './redux-flow/reducers/todos';

const App = ({ todos, handleAddTodo, handleToggleTodo }) => (
  <div>
    <form onSubmit={handleAddTodo}>
      <input type='text' name='todo' placeholder='Digite seu nome'/><br />
      <input type='text' name='resumo' placeholder='Digite um resumo'/>
      <button type='submit'>Adicionar</button>
    </form>
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          onClick={handleToggleTodo(todo.id)}
        >
          { todo.text } -  
          { todo.resumo }
          
        </li>
        
      ))}
      { console.log(todos) }
    </ul>
    <h3>Mostrar</h3>
    <div><span>Todos</span>|<a href='#'>Finalizados</a>|<a href='#'>A fazer</a></div>
  </div>
  
)

const mapStateToProps = (state) => ({
  todos: state
})

const mapDispatchToProps = (dispatch) => ({
  handleAddTodo: (e) => {
    e.preventDefault()
    dispatch(addTodo(e.target.todo.value, e.target.resumo.value))
    e.target.todo.value = ''
    e.target.resumo.value = ''
  },
  handleToggleTodo: (id) => (e) => {
    dispatch(toggleTodo(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
