import React, {useState, useRef} from 'react'
// import EvoTodoBox from './EvoTodoBox';

const EvoTodo = () =>{

    const [Input, setInput] = useState({
        ID:'',
        TITLE:'',
        CONTENT:'',
    });

    const [List, setList] = useState([
    ]);

    const whileChange = (event) =>{
        setInput({
            ...Input,

            [event.target.name]: event.target.value
        })
    }

    const NEXTID = useRef(1);

    const Clicked = () =>{
        setList([
            ...List, //이거이거이거이거 {} 밖에
            {
            

            ID: NEXTID.current,
            TITLE: Input.TITLE,
            CONTENT: Input.CONTENT,

            
        }]);

        NEXTID.current = NEXTID.current +1;
        
    };

    const Delete = (ID) =>{
        setList(List.filter(x => x.ID !== ID))
    }
    
    const Modify = (ID) =>{
        let Modi = prompt('수정할 내용 값은?:');

        setList(List.map(copModi =>  //이미 List를 map을 이용하여 조회하고 있음, 따라서 CONTENT를 바로 수정 가능
            copModi.ID === ID ? {...copModi,  CONTENT : Modi} : copModi))
    }

    const newArray = List.map(copied => /* map으로 List 배열을 new Array로 복사*/
        <div> 
            <hr/>
            {copied.ID} <br/>
            {copied.TITLE}<br/>
            {copied.CONTENT}<br/>

            <button onClick={() => Delete(copied.ID)}>X</button> {/*생성될때 만들어진 값이 전송됨*/}
            <button onClick={() => Modify(copied.ID)} >수정</button>
        </div> 
    );
    
    console.log(newArray)

    return(
        <div>
            <input name="TITLE" onChange={whileChange} type="text"/>
            <br/>
            <input name="CONTENT" onChange={whileChange} type="text"/>
            <br/>
            <button onClick={Clicked}>추가</button>

            {newArray}
        </div>
        
    );


}

export default EvoTodo