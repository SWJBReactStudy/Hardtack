import {useReducer} from 'react';

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

const initialValue ={
    inputs:{
        title: '',
        content: ''
    },
    Todos:[

    ]
}

const useReduces = () => {
    const [Todos, dispatch] = useReducer(reducer, initialValue); //Todos 스테이트는 initialValue


    
    return [Todos, dispatch]; //순서대로 리턴!
}
export default useReduces;
