import React from 'react'
import Todo from './TodoReact/Todo'
import "../src/TodoReact/style.css"
import Finput from './components/Finput'
const App = () => {

  
  return (
    <div>
    <Finput/>
      <Todo/>
    </div>
  )
}

export default App
