import React, { useState } from 'react'
import TodoBox from './TodoBox'

const Todo = () => {

    const [input, setInput] = useState({
        title: '',
        content: '',
    });

    const [list, setList] = useState([
        //array's elements(객채들) here
    ]);

    const onWatch = (e) => {
        setInput({
            ...input,

            [e.target.name]: e.target.value
        })
    }

    const onClick = () => { //배열 안에 객체가 들어있으므로
        setList([ //배열 안에 객체 리ㅏ넘어ㅑㅣㅏㅇㄹㄴㅁ커;ㅣㅏㅁㄹㄴ아ㅣ
            ...list,
            {
                title: input.title,
                content: input.content,
                   
            },
        ]);

        // const newArray = list.map()
    }

    const newArray = list.map(x => <TodoBox TITLE={x.title} CONTENT={x.content}/>) //x는 객체여서 위에 input 객체 에서 title과 content를 가져올 수 있음       <div>{x.title}{x.content} </div>

    //const nextId = useRef(0);

    // const array = [<div>a</div>, <div>b</div>];
    return (
        <div>
            
            <label>제목</label>
            <input name="title" onChange={onWatch} type="text" value={input.title} />
            <br />


            <label>내용</label>
            <input name="content" onChange={onWatch} type="text" value={input.content} />
            <br />
            <button onClick={onClick}>추가!</button>

            {newArray}
        </div>
    );
}

export default Todo