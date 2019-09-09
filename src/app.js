'use strict'

import React from 'react'
import Form from './componets/form'
import TodosList from './componets/todos-list';
import Filter from './componets/filter';
import SeachCep from './componets/search-cep'
import 'milligram'

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around', padding: 30 }}>
    <div>
      <Form />
      <TodosList />
      <Filter />
    </div>

    <div>
      <SeachCep />
    </div>
    
  </div>
  
)
export default App