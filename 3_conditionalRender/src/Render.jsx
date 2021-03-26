import React, {useState} from 'react'

const Render = () =>{ //parameter로 넘어온 값은 {}로 감싸주기, parameter로 보내는 변수명과 넘어온 변수명은 달라도 되지만 비구조화(props 관리)를 위해 같은 이름으로 지정해줌 :D  

    const [isRender, setIsRender] = useState(true); //초기값은 true 첫번쨰 인자가 변수, 두번쨰 인자가 함수명
            //isRender 변수는 true로 설정되어 있음(기본을 true로 했기에)
    const text = () =>{
            <div>야야야야</div>
    }
    return(
        <div> {isRender ? <div>isREnder는 true이다 {text}</div> : null}</div> 
    )
        
    
}

export default Render;