import React from 'react';
import styled from 'styled-components';


const BOX = styled.div`
    border: 1px solid grey;

    margin: 5px;

    

    /* & button{
        width: 80px;
    }  */
`




const TodoBox = (props) => { //넘어오는 props 파라미터 이름은 맘대로 정할 수 있지만 보기 쉬운 이름으로 설정, {} 써서 받는 거면 비구조화를 해서 받는거여서 그냥 객체를 넘겨와도 됨
                            //넘어오는 순서는 상관없음
const Remove = (x) =>{ //매걔변수 아무거나 상관없어ㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓ
    props.SETLIST(props.LIST.filter(n => n.id !== x )) //n.id는 LIST객체의 id를 말하는거임
    console.log(props.LIST);
}

    return (                    
        <div>
            <BOX>
                <h3>{props.TITLE}</h3>
                <p>{props.CONTENT}</p>

                <button onClick={() => Remove(props.ID)} >X</button>
            </BOX>

            
        </div>
    )
}

export default TodoBox;