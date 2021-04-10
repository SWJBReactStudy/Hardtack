import React, {useReducer, useRef} from 'react';

const initializeValue = {
    //input 들어오는 거 관리
    inputs:{
        title:'',
        content:'',
    },
    // 투두 내용이 담기는 객체
    Todos:[ //Todos 배열로는 객체들이 들어올것이다!!!

    ]

}

//reducer는 값을 받고 지정해주는 살짝 역(station) 같은 것이 아닐까..? 라는 생각
//때에 따라서 다른 state와 action이 들어오니까 ㅎ

const reducer = (state, action) =>{ //state와 action는 밑에 useReducer에서 온 state와 action들임
    switch(action.type){ //action으로 들어온 type
        case 'MANAGE_INPUTS': //만약 들어온 값이 MANAGE_INPUTS 이면, 
            return{
                ...state,  //아까 파라미터로 들어왔던 state값 객체가 복사되서 원래거랑 같이 객체가 다시 새로 만들어진 상황
                inputs:{    //state에 inputs 객체안에
                    ...state.inputs, //아까 state.inputs안에 있었던 (혹은 이미 추가된) 텍스트 + 새로 추가된 텍스트 (키보드 칠때마다 한 글자씩 들어오니까) 
                    
                    [action.name] : action.value //[]을 이용하여 name을 키 삼아서 (action.name에는 HTML input에 name에 있던 title, content인데 이 각각을 key 로 삼음)
                                                //action.value는 HTML input의 value
                }
            };

        case 'CHANGE_GAPS': //만약 CHANGE_GAPS가 들어왔다면,
        return{
            ...state,  //아까 파라미터로 들어왔던 state값 객체가 복사되서 원래거랑 같이 객체가 다시 새로 만들어진 상황
            Todos:[   //state 객체 안에 있는 Todos 배열에다가
                ...state.Todos,   //state 안에있는 Todos객체를 복사해서 (얘는 spread 문법으로 복사했기에 전에 들어왔던 내용들이 복사됨) 새로운 객체배열을 만들고,

                action.add //거기다가 플러스로 action으로 들어온 add (add에는 아까 밑에서 disptach로 올린 객체가 있음) 아래서 보셈!
            ]
            
        };

        case 'DELETE_GAPS':
            return{
                ...state,
                    //Todos 배열을 필터를 이용해서 없앤다음 그걸 다시 Todos로 넣는 느낌이다아...
                Todos: state.Todos.filter(x => x.id !== action.id) //action으로 넘어온 id는 whenClick으로 넘어온 id
            }

        default: //기본 일 경우,
                return state;
    }


}



const ReducerView2 = () =>{

    const [state, dispatch] = useReducer(reducer, initializeValue)

    const whileTyping = (event) =>{

        const {name, value} = event.target; //비구조화 안해주면 오류나더라
                                            //비구조화는 {}인것을 기억해!
        dispatch({
            type: 'MANAGE_INPUTS',
            name,
            value,
        });
    }
    // END OF whileTyping

    const IDindex = useRef(1);

    const whenClick = () =>{
        dispatch({
            type: 'CHANGE_GAPS',
            add:{ //객체를 보낸다
                id: IDindex.current,
                title: state.inputs.title,
                content: state.inputs.content,
            }
        });
        // END OF dispatch

        IDindex.current = IDindex.current + 1;
    }

    const Delete = (id) =>{
        dispatch({
            type: 'DELETE_GAPS',
            id
        })
    }

    return(
        <div>
            제목 <input onChange={whileTyping} name="title" value={state.inputs.title} type="text"/>
            <br/>
            내용 <input onChange={whileTyping} name="content" value={state.inputs.content} type="text"/>

            <br/>
             <button onClick={whenClick}>추가</button>
             <hr/>

            {state.Todos.map(copied => 
                <div>
                 {copied.title} <br/> {copied.content} 
                 <button onClick={()=>Delete(copied.id)}>X</button>
                </div>)}

        </div>
    );
}

export default ReducerView2;