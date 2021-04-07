import React, {useReducer, useRef} from 'react'

const initialState = {
    inputs:{                //이거 살짝 우리 Todo할떄 input관리해주는 부분
        title: '',
        content: '',
    },
    Todos:[
        {
            id: 1,
            title: '투두 제목 1',
            content: '투두 내용물1',
            isDone: true,
        },
        {
            id: 2,
            title: '투두 제목 2 ㅎ',
            content: '투두 내용물2 ㅎ',
            isDone: false,
        },
        {
            id: 3,
            title: '투두 제목 3 오옹',
            content: '투두 내용물3이다',
            isDone: true,
        },
    ]
    //END OF Todos array
}
// END OF initialState


const reducer = (state, action) =>{
    switch(action.type){
        case 'CHANGE_INPUT':
            return{
                ...state, //state spread 문법
                inputs:{ //inintalState의 가장 상위 객체
                    ...state.inputs,
                    [action.name]: action.value
                }
            };
            // END OF return 1 (Input 값 바꾸기, setState같은 느낌..?)

            case 'CREATE_GAP':
            return{
               inputs: initialState.inputs,
               Todos:  [...state.Todos, action.inputs]
            };
            // END OF return 2 (값, Todo 생성하기)
            
            case 'REMOVE_GAP':
            return{
               ...state,
               Todos: state.Todos.filter(X => X.id !== action.id)
            };
            //END OF return 3 (값, Todo 삭제하기)

            default: //기본 일 경우,
                return state;
    }
    // END OF switch
}
//END OF Reducer function


// 메인 시작
const ReducerView = () =>{

    const [state, dispatch] = useReducer(reducer, initialState); //state는 변수같은 느낌(객체 가능) dispatch는 함수임! 여기서 state에는 initalizeState객체가 들어갔음!
    const NEXTID = useRef(4); //NEXTID의 값을 4번부터 시작
    
    const { Todos } = state;
    const { title, content } = state.inputs;

    const whileChange = (event) =>{
        const {name, value} = event.target; //키값 비구조화

        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value
        });
    }
    //END OF whileChange( onChange임 xD )

    const AddClicked = () =>{
        dispatch({
            type: 'CREATE_GAP',
            Todos:{
                id: NEXTID.current,
                title,
                content,
            }
        })
        // END OF dispatch

        NEXTID.current = NEXTID.current + 1;
    }

    const RemoveClicked = (id) =>{

        dispatch({
            type: 'REMOVE_GAP',
            id,
        });
    }
    //END OF RemovedClicked function

    

    return(
        <div>
            <label>제목</label>
            <input name="title" value={Todos.title} onChange={whileChange} onClick={AddClicked} type="text"/>
            <br/>

            <label>내용</label>
            <input name="title" value={Todos.content} onChange={whileChange} onClick={AddClicked} type="text"/>
            <br/>
            <br/>

            <button>추가</button>

            {initialState.Todos.arrayWTF}
        </div>
    );
}

export default ReducerView;