import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = ({todos,setTodos}) => {
    
    
    
    const addTodo = (todo)=>{
        const newTodos = [todo,...todos]
        setTodos(newTodos)
    }
    console.log('list',todos)
    const handleComplete=(id)=>{
        const updatedStatus = todos?.map(todo=>{
            if (todo.id === id) {
                return {
                  ...todo,
                  isCompleted: !todo.isCompleted,
                };
              }
              return todo;
              });
              setTodos(updatedStatus)
    }
    const handleDelete = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
      };
    
    return (
        <div className='todo__container'>
            <h1>What's your plan today?</h1>
            <TodoForm addTodo={addTodo}/>
            { todos?.map(todo=>
            <Todo 
            key={todo?.id} 
            todo={todo} 
            handleComplete={handleComplete} 
            handleDelete={handleDelete}/>
            )}
            
        </div>
    );
};

export default TodoList;