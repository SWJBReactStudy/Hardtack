import {useState} from 'react';


function useInputs(initialForm){ //initalForm은 todo.jsx에서 보낸 객체를 넣어준것
    const [form, setForm] = useState(initialForm);

    const onChange = (event) =>{
       
        const {name, value} = event.target; //event 비구조화

        setForm(form => ({ ...form, [name]: value }));
    };

    const reset = () => { setForm(initialForm, [initialForm])}
    return [form, onChange, reset]; //todo.jsx로 onChnage함수와 reset, form(안에 들은 [name]:value 같은거)
}

export default useInputs