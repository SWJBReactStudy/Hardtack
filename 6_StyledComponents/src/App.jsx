import React, {useState} from 'react'
<<<<<<< Updated upstream
import Styled from './Styled.jsx'
import Counter from './functions/count.jsx'

const App = () =>{
  const [value, setValue] = useState(0);
  return(
    <div>
      <Styled/>
=======
import Todo from './components/todo.jsx'
import Effect from './components/useEffect.jsx'

const App = () =>{

  return(
    <div>
     <Effect/>
      <Todo/>
>>>>>>> Stashed changes
    </div>
  )
}
export default App;