import React, {useState} from 'react'
import Styled from './Styled.jsx'
import Counter from './functions/count.jsx'

const App = () =>{
  const [value, setValue] = useState(0);
  return(
    <div>
      <Styled/>
    </div>
  )
}
export default App;