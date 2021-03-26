import React, {useState} from 'react'
import Counter from './functions/count.jsx'

const App = () =>{
  const [value, setValue] = useState(0);
  return(
    <div>
      <Counter value={value} setValue={setValue}/>
    </div>
  )
}
export default App;