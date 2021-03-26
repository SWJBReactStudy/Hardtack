import React, {useState} from 'react'
import Render from './Render.jsx'
import Counter from './functions/count.jsx'

const App = () =>{
  const [value, setValue] = useState(0);
  return(
    <div>
      <Counter value={value} setValue={setValue}/>
      <Render/>
    </div>
  )
}
export default App;