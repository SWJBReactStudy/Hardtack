import React from 'react'


const todoList = ({title, content, onChange, onClick}) =>{

    return(
        <div>
            <label>제목</label>
            <input name="title" onChange={onChange} type="text" value={title}/> 
            <br/> 
            

            <label>내용</label>  
            <input name="content" onChange={onChange} type="text" value={content}/>
            <br/>
            <button onClick={onClick}>추가!</button>
        </div>
    );
}

export default todoList