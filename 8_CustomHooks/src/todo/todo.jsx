import React, {useState, useRef} from 'react';
import useInputs from '../hooks/useInputs.js'

const Todo = ()=>{
    // const [input, setInput] = useState({
    //     title:'',
    //     content: '',
    // });

    const [list, setList] = useState([
        //this  state will include lists
    ]);

    // const whileChange = (event) =>{
    //     setInput({
    //         ...input,
    //         [event.target.name] : event.target.value
    //     });
    // }

    const indexID = useRef(1);

    const Click = () =>{
        setList([
            ...list,

            {
                id: indexID.current,

                title: title,
                content: content,
            },

        ]);
        indexID.current = indexID.current + 1;
        reset();
    }

    const [{title, content}, whileChange, reset] = useInputs({
        title: '',
        content: ''
    }
    
    
    )

    const Array = list.map(copied => <div> {copied.title} <br/> {copied.content} </div>)

    return(
    <div>
        <label>TODO 이다</label>
        <br/>

        <input name="title" value={title} onChange={whileChange} type="text"/>
        <br/>
        <input name="content" value={content} onChange={whileChange} type="text"/>
        <br/>

        <button onClick={Click}>추가</button>

        <hr/>
        {Array}
    </div>)
}

export default Todo