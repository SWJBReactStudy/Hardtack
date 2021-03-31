import React, {useState} from 'react'

const Todo = () =>{

    const [input, setInput] = useState({
        title: '',
        content: '',
    });

    const [list, setList] = useState([
        //array's elements(객채들) here
    ]);

    const onWatch = (e) =>{
        setInput({
            ...input,

            [e.target.name] : e.target.value
        })
    }

    const onClick = () =>{ //배열 안에 객체가 들어있으므로
        setList([ //배열 안에 객체 리ㅏ넘어ㅑㅣㅏㅇㄹㄴㅁ커;ㅣㅏㅁㄹㄴ아ㅣ
            ...list,
        {
            //fak you klsdjf;kaljdlffja;lkdsdjdfj            
        }
        ])
    }

    
    //const nextId = useRef(0);

    
    return(
         <div>
            <label>제목</label>
            <input name="title" onChange={onWatch} type="text" value={input.title}/> 
            <br/> 
            

            <label>내용</label>  
            <input name="content" onChange={onWatch} type="text" value={input.content}/>
            <br/>
            <button onClick={onClick}>추가!</button>
        </div>
    );
}

export default Todo