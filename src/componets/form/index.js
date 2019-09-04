import React from 'react'
import { addTodo } from 'reducers/todos/action-creators'


import { connect } from 'react-redux'

const Form = ({ handleAddTodo }) => (
    <form onSubmit={handleAddTodo}>
      <input type='text' name='todo' placeholder='Digite seu nome'/><br />
      <input type='text' name='resumo' placeholder='Digite um resumo'/>
      <button type='submit'>Adicionar</button>
    </form>
)

const mapDispatchToProps = (dispatch) => ({
    handleAddTodo: (e) => {
        e.preventDefault()
        dispatch(addTodo(e.target.todo.value, e.target.resumo.value))
        e.target.todo.value = ''
        e.target.resumo.value = ''
      }
})

export default connect(null, mapDispatchToProps)(Form)
