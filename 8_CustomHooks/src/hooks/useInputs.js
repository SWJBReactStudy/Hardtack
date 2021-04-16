import {useState} from 'react';


function useInputs(initialForm){ //initalForm은 todo.jsx에서 보낸 객체를 넣어준것
    const [form, setForm] = useState(initialForm);

    const onChange = (event) =>{
        //event 비구조화
        const {name, value} = event.target;

        setForm(form => ({ ...form, [name]: value }));
    };

    const reset = () => { setForm(initialForm, [initialForm])}
    return [form, onChange, reset];
}

export default useInputs