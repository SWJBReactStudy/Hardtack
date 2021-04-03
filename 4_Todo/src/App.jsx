import React from 'react'
//import Todo from './components/todo.jsx'
import NewTodo from './components/Refactored/NewTodo.jsx' //import 이름은 export 한 것으로 해줘야 됨!

const App = () =>{

  return(
    <div>
      <NewTodo/>
    </div>
  )
}
export default App;