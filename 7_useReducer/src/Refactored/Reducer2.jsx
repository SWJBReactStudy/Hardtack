import React, {useReducer} from 'react';

const initializeValue = {
    //input 들어오는 거 관리
    inputs:{

    },
    // 투두 내용이 담기는 객체
    Todos:{

    }

}

const reducer = (state, action) =>{
    switch(action.type){
        case 'MANAGE_INPUTS':
            return{

            }

        case 'CHANGE_GAPS':
        return{

        }
    }
}



const ReducerView2 = () =>{

    const [state, dispatch] = useReducer(reducer, initializeValue)
    
    return(
        <div>
            제목 <input type="text"/>
            <br/>
            내용 <input type="text"/>

            <br/>
            <button>추가</button>
        </div>
    );
}

export default ReducerView2;