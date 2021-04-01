import React from 'react'
import styled from 'styled-components';

const BOX = styled.div`
    border: 1px solid grey;

    margin: 5px;
`


const TodoBox = (props) => { //넘어오는 props 파라미터 이름은 맘대로 정할 수 있지만 보기 쉬운 이름으로 설정, {} 써서 받는 거면 비구조화를 해서 받는거여서 그냥 객체를 넘겨와도 됨
    return (
        <div>
            <BOX>
                <h3>{props.TITLE}</h3>
                <p>{props.CONTENT}</p>
            </BOX>
        </div>
    )
}

export default TodoBox;