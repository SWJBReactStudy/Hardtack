import React, {} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #e4d9d9;
`;

const Input = styled.input`
    background-color: #3f3f3f;
    color: white;
`;

const Button = styled.button`
    background-color: #db9797;
    &:hover{
         
        background-color: ${(props) => props.hoverCol}
    }
`;

const Styled = () =>{
    return(
        <div>
            <Container>
                YESES
                <Input/>
                <Button hoverCol={"#ddd"}>이아러ㅣ넝</Button>
            </Container>
        </div>
    );
}

export default Styled