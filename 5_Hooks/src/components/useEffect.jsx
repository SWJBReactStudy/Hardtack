import React, {useState ,useEffect} from 'react'

const Effect = () =>{

    const [Input, setInput] = useState("");
    const [array, setArray] = useState([
        {
            ID: 1,
            Active: true,
        },
        {
            ID: 2,
            Active: true,
        },
        {
            ID: 3,
            Active: false,
        }
    ]);

    useEffect(()=> { //callback
        console.log("나는 건우다!") //컴포넌트가 mount 되면 conslog 출력

        console.log(array.length)

        return //컴포넌트가 제거되거나 사라질때 return 안에 있는 함수가 실행됨
    }, [Input, array]); //대괄호를 이용하여  특정 항목을 제어 가능 지금은 Input (useState)만 업데이트 하고 있음, 만약에 []만 써주면 컴포넌트가 처음 렌더링  될때 한번만 업데이트 되고 더이상 안됨 

    //filter 와 map을 기억하기
    useEffect(()=>{
        let value = array.filter(copied => copied.Active == true)
            console.log("페이지 업데이트 됨, 값: "+ value.length)
    },[]);

    //객체 배열이 true인 개수 세기 
    useEffect(()=>{
        console.log("Active가 True인 ID값과 개수: "+ array.length)
    },[]);


    return(
        <div>
            <input type="text" value={Input} onChange={(event) => setInput(event.target.value)}/> 
        </div>
    )
}

export default Effect;

//useEffect는 컴포넌트가 마운트 됬을때, 업데이트 될때, 삭제될때 모두 관리 가능! 