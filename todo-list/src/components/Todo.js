import React from 'react';
import './Todo.css';

const Todo = ({todo:{id,task,isCompleted},handleComplete,handleDelete}) => {
//    const{id,task,isCompleted}=todo;
   const handleCompleteCheck =()=>{
    handleComplete(id)
   }
  
    return (
        <div className='todo'>
            <input className='todo__checkbox' onClick={handleCompleteCheck} type="checkbox" />
            <h4 className= {isCompleted?'todo__text complete': "todo__text"}>{task}</h4> 
            <button className='todo__delete-icon' onClick={() => handleDelete(id)}>Delete</button>
        </div>
    );
};

export default Todo;