import React, {useState} from 'react'

const Form = () =>{

    const [Student, setValue] = useState({
        name: '',
        ID: ''
    }); //비구조화?!!!!

    //const [Name, setName] = useState(''); //''로 inintalize
   // const [ID, setID] = useState(0); // 0으로 initalize

    const onChangeInput = (e) =>{
        //console.log(e.target.value)       target은 onChange의 속성중에 e라는 매개변수를 이용해서 value로 값을 얻어옴 
        //setValue(e.target.value);          Name = 을 넣어줘도 되지만 setName 자체가 이미 Name을 설정해주기 때문에
     
       setValue({
           ...Student, //... (점3개) 문법은 위에 Stduent 객체로부터 name과 ID 값을 가져옴!!
           //[name]: e.target.value, //name state의 값은 input의 onChange로 name 매개변수를 통해 들어고고, []를 해줘야지 변수로 들어감 그냥 써주면 오류난다고 함..
            [e.target.name] : e.target.value 
           //[ID]: 
        })
    }

    const testObj1 = {
        a: 'AAAAA',
        b: 'BBBBB',
        c: 'CCCCC',
    };

    const testObj2 = {
        ...testObj1, // ...문법은 위에 testObj1에 있던 값들을 가져오면서 (a,b,c) testObj2의 값을 이어서 사용가능
        a: 'AAAAA',
        b: 'BBBBB',
        c: 'CCCCC',
    };
    
    console.log(testObj1.a)


    return(
        <div>
            <label>이름</label>
            <input onChange={onChangeInput} type="text" name="name" value={Student.name}/> 
            <br/>
            <label>학번</label>
            <input type="text" name="ID"/>

            <hr/>

            <p>이름: {Student.name}</p> { /*객체 이름을 앞에 써주지 않으면 오류*/}
            <p>학번: </p>
        </div>
    )
}

export default Form;