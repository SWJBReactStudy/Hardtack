import React from 'react'

const Counter = ({value, setValue}) =>{

  const plus = () =>{
    setValue(value+1)
  }

  const minus = () =>{
    setValue(value-1)
  }

  return(
    <div>
      <p>{value}</p> 
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

export default Counter;