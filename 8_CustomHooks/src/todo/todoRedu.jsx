import React, { useRef } from 'react'
import useReduces from '../hooks/useReduces.js'

    
  


const TodoRedu = () =>{

    const [Todos, dispatch] = useReduces(); //함수를 뒤에 써주는 까먹지 말기
                                            // Todos 는 useReduces에서 return 해줘야지 활성화 될 것임!
    


    const whileChange = (event) =>{
        const {name, value} = event.target; 
        dispatch({
            type: 'CHANGE_INPUTS',
            name,
            value,
        })
    }

    const indexID = useRef(1);

    const Clicked = () =>{
        
        dispatch({
            type: 'CREATE_GAPS',
            add:{
                id: indexID.current,
                title: Todos.inputs.title, //useReduces에 Todos에는 initialValue로 들어가있는데 거기에는 title이 inputs 라는 객체안에 선언되어 있음
                content: Todos.inputs.content
            }
        });

        indexID.current = indexID.current + 1;
    }
    

    const Delete = (id) =>{
        console.log(id)
        dispatch({
            type: 'DELETE_GAPS',
            id
        });
        
    }
    
    return(<div>
        <input name="title" value={Todos.inputs.title} onChange={whileChange} type="text"/> 
        <br/>
        <input name="content" value={Todos.inputs.content} onChange={whileChange} type="text"/>
        <button onClick={Clicked}>추가</button>

        {Todos.Todos.map(copied => <div> {copied.title} <br/> {copied.content} <button onClick={()=> Delete(copied.id)}>X</button></div>)}
        {/* useReduces에서 들어온 Todos 객체(initalValue) 안에 Todos라는 객체가 또 있어서 이렇게 써주었다
        사실 값을 받아오면 보기 힘들긴 한데.. 이해 되라고 적어놓았다!  */}
    </div>)
}

export default TodoRedu