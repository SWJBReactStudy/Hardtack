import React, {useState, useRef} from 'react'

const EvoTodoBox = (props) =>{

    const Delete = (ID) =>{
        props.setList(props.List.filter(x => x.ID !== ID))
    }
    
    

    return(
        <div>
            {props.ID} <br/>
            {props.TITLE}<br/>
            {props.CONTENT}<br/>

            <button onClick={() => Delete(props.ID)}>X</button>
            <button>수정</button>
        </div>
    );
}

export default EvoTodoBox