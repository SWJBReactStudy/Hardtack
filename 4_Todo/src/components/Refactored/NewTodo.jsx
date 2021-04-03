import React, {useState, useRef} from 'react'

const NewTodo = () =>{

    // HTML input으로 들어오는 정보들을 저장할 useState 공간
    const [Input, SaveInput] = useState({
        ID: '',
        TITLE: '',
        CONTENT: ''
    });

    // 위에서 받은 Todo정보들을 저장할  useState 공간
    const [List, setList] = useState([{
    //대괄호[] 주의, 대괄호를 쓰는 이유는 List는 객체로써 ID, TITLE, CONTENT를 담은 객체를 저장하기에, 배열같은 느낌인가? FUCK
    }]);

    // HTML input이 들어오는 것을 감지하여, 바뀔 때 마다 함수 실행
    const whileChange = (event) =>{
        SaveInput({
            ...Input, //spread 문법으로  Input 객체의 ID, TITLE, CONTENT 복사

            [event.target.name] : event.target.value
        });
    }

    const NEXTID = useRef(1) //NEXTID는 const로 선언되서 변경 불가하다고 생각할 수 있지만 useRef를 사용했기 때문에 변경가능하다. (1부터 시작해서 바뀜)

    // "추가" 버튼이 눌렸을 때
    const addTodo = () =>{
        setList([ //객체를 다루기에 [대괄호] 사용
            ...List, //spread 문법으로 List 객체의 ID, TITLE, CONTENT 복사

            {
                ID: NEXTID.current,     // current는 현재 인자로 넘어온 초기값을 current속성에 할당하는 역할, 즉 현재 useRef숫자 값으로 ID를 저장 (숫자)

                TITLE: Input.TITLE,     //TITLE 값은 Input 객체에 TITLE값
                CONTENT: Input.CONTENT, //CONTENT 값은 Input 객체에 CONTENT값
            }
        ]);
        
        NEXTID.current = NEXTID.current + 1 //NEXTID에 current 속성에 1을 더하여 다시 저장 (나중에 다시 addTodo가 눌렸을때 1이 늘어나서 ID에 저장됨)
        console.log(newArray)
    }

    
    //새로운 배열(newArray)에 map을 이용하여, List 배열을 복사
    const newArray = List.map(copied => <div>{copied.TITLE} {copied.CONTENT}</div>); //newArray에 map을 이용하여 새로운 배열을 생성 (새 배열은 div로 이루어져 있음)

    return(
        <div>
            <input name="TITLE" onChange={whileChange} value={Input.TITLE} type="text"/>  {/*name 속성을 대문자로 해줌 - 위에서 evnet.target으로 값을 변경시킬때, []를 이용하여  HTML Input의 name속성의과 똑같은 이름을 가진 Input useState의 ID로 값을 저장할 것이기에 */ }
            <br/>
            <input name="CONTENT" onChange={whileChange} value={Input.CONTENT} type="text"/>
            <button onClick={addTodo}>추가</button>

            {newArray}
        </div>
    );
}

export default NewTodo