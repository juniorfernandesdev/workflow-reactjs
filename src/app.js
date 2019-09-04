'use strict'

import React from 'react'
import Form from './componets/form'
import TodosList from './componets/todos-list';
import Filter from './componets/filter';

const App = () => (
  <div>
    <Form />
    <TodosList />
    <Filter />
  </div>
  
)
export default App