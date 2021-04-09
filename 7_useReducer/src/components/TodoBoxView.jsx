import React from 'react';
import styled from 'styled-components'


const ShowID = styled.p`
    background-color: #bbbbbb;
`

const DIV = styled.div`
    background-color: #fff;
    border: 1px solid grey;

    width: 340px;
    text-align: center;
`;

const Btn = styled.button`
    width: 80px;
`

const TodoBoxView = (props) =>{
    console.log(props.title)
    return(
        <DIV>
            <ShowID>Todo 아이디: {props.id}</ShowID>
            <p>{props.title} <br/> {props.content} </p>
            <Btn>X</Btn>
        </DIV>
    );
}

export default TodoBoxView