import React, {useReducer, useRef} from 'react'

const Index = {
    inputs:{                //이거 살짝 우리 Todo할떄 input관리해주는 부분
        title: '',
        content: '',
    },
    Todos:[

    ]
    //END OF Todos array
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'CHANGE_INPUTS':
            return{
                ...state,
               inputs:{
                   ...state.inputs,
                   [action.name] : action.value
               }
                
            };
    
        case 'CREATE_GAPS':
            return{
                ...state,
                Todos:[
                    ...state.Todos,
                        action.add
                ]
            };

        case 'DELETE_GAPS':
            return{
                ...state, // 스프레드 문법을 쓰지 않았을 경우 Todos로 불러와야지 오류가 나지 않았다
                            // 스프레드 문법을 쓰지 않았을 경우 새롭게 만들어지는 객체는 하위 객체인 inputs를 빼고 다시 생성된다
                Todos: state.Todos.filter(x => x.id !== action.id)
            }

        default:
            return state;
}

}

const RevoRedu = () =>{
    
    const [state, dispatch] = useReducer(reducer, Index);


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
                title: state.inputs.title,
                content: state.inputs.content
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
        <input name="title" value={state.inputs.title} onChange={whileChange} type="text"/> 
        <br/>
        <input name="content" value={state.inputs.content} onChange={whileChange} type="text"/>
        <button onClick={Clicked}>추가</button>

        {state.Todos.map(copied => <div> {copied.title} <br/> {copied.content} <button onClick={()=> Delete(copied.id)}>X</button></div>)}
    </div>)
}

export default RevoRedu