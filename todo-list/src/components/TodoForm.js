import { useState } from "react";
import './TodoForm.css';

const TodoForm =({addTodo})=>{

    const [input, setInput]=useState('')

    const handleInput=(e)=>{
        e.preventDefault()
        setInput(e.target.value)// get value from input field
      }
      const handleSubmit=(e)=>{
        e.preventDefault();//prevent browser refresh
        if(input?.trim()){ //trim() get rid of whitespace
            const newTodo = {
                  task:input,
                  id: new Date().getTime(),
                  isCompleted:false,
                } 
            addTodo(newTodo)
            //reset input field
            setInput('')
        }
    }
    return (
        <form className='todo__form' onSubmit={handleSubmit}>
            <input type="text" name="text" className='todo__form__input' id="" value={input} placeholder="Add Input" onChange={handleInput}/>
            <button className='todo__button' type='submit' >Add</button>
        </form>

    )
}
export default TodoForm;