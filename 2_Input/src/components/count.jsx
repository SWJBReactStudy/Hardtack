import React from 'react'

const Counter = ({a, b}) =>{

  const plus = () =>{
    b(a+1)
  }

  const minus = () =>{
    b(a-1)
  }

  return(
    <div>
      <p>{a}</p> 
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

export default Counter;