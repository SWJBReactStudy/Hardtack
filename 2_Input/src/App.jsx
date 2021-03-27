import React, {useState} from 'react'
import Render from './components/Render.jsx'
import Counter from './components/count.jsx'
import Form from './components/form.jsx'

const App = () =>{
  const [value, setValue] = useState(0);
  return(
    <div>
      <Counter a={value} b={setValue}/>
      <Render/>
      <Form/>
    </div>
  )
}
export default App;