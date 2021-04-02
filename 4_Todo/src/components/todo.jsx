import React, { useState, useRef } from 'react' //{} 가져올떄 비구조화 아니면 React.어쩌구로 불러와야 됨
import TodoBox from './TodoBox'

const Todo = () => {

    

    const [input, setInput] = useState({ 
        id: '',
        title: '',
        content: '',
    });

    const [list, setList] = useState([  //list배열의 newArray를 map으로 생성, 새로 생성된 newArray는 TodoBox 어러개를 담게 됨, 그거를 컴포넌트 프롭스로 보내서 styled 컴포넌트로 렌더링 이라고 이해함
        //array's elements(객채들) here
    ]);

    const onWatch = (e) => {
        setInput({
            ...input,

            [e.target.name]: e.target.value
        })
    }

    const nextId = useRef(1); //useRef사용 - 타이머 만들때도 사용

    const onClick = () => { //배열 안에 객체가 들어있으므로
        setList([ //배열 안에 객체 리ㅏ넘어ㅑㅣㅏㅇㄹㄴㅁ커;ㅣㅏㅁㄹㄴ아ㅣ
            ...list,
        
            {
                id: nextId.current, //useRef는 객체인데, current를 사용해주서 그냥 변수 취급 :D

                title: input.title,       //input useState 객체의 title
                content: input.content,    //input useState 객체의 content
                   
            },
        ]);

        console.log(nextId.current)
        nextId.current += 1; //useRef는 객체인데, current를 사용해주서 그냥 변수 취급 :D
         

        // const newArray = list.map()
    }

    const newArray = list.map(x => <TodoBox SETLIST={setList} LIST={list} ID={x.id} TITLE={x.title} CONTENT={x.content}/>) //x는 객체여서 위에 input 객체 에서 title과 content를 가져올 수 있음, TodoBox가 담긴 x를 복사해서 return       <div>{x.title}{x.content} </div>


    


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