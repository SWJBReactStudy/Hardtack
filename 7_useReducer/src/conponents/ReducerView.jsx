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


const reducer = (state, action) =>{ //state는 밑에 useReducer에(reducer) 로 부터 넘어온 state
    console.log(state)
    switch(action.type){
        case 'CHANGE_INPUT':
            return{
                ...state, //state spread 문법
                inputs:{ //inintalState의 가장 상위 객체중 하나
                    ...state.inputs, //그 안에서 state에 inputs객체를 다시 spread로 복사..? 한 느낌인듯
                    [action.name]: action.value //action 파라미터를 통해 들어온 이벤트 (아래서 비구조화 되서 들어옴) - event.target으로 들어왔음
                }
            };
            // END OF return 1 (Input 값 바꾸기, setState같은 느낌..?)

            case 'CREATE_GAP':
            return{
              inputs: initialState.inputs, //inputs는 initalState객체의 inputs

              ...state, //받아온 state를 spread로 복사해오기
              Todos:[ //spread로 복사된 state(파라미터로 받아온) 객체의 Todos 객체 배열은, 
                  ...state.Todos,
                  action.Todos //파라미터에서  action에 들어있던 Todos
              ]

            // Todos: state.Todos.map(copied => <div>{copied.title} {copied.content}</div>)

               
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
    const { title, content } = state.inputs; //title 과 content는 state(사실 initialState 객체의) inputs 부분을 비구조화 해놓음.

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
            type: 'CREATE_GAP', //애도 액션 (action.type)
            Todos:{             //이 친구도 액션 (action.todo)
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
            <input name="title" value={Todos.title} onChange={whileChange} type="text"/>
            <br/>

            <label>내용</label>
            <input name="content" value={Todos.content} onChange={whileChange} type="text"/>
            <br/>
            <br/>

            <button onClick={AddClicked} >추가</button>

            {Todos.map(copied => <div>{copied.title} {copied.content}</div>)}

            
        </div>
    );
}

export default ReducerView;