import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

const L_S_KEY='react-todo-list'
function App() {
  
  const [todos, setTodos] = useState([])
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(L_S_KEY));
   if (storageTodos){
     setTodos(storageTodos)
   }
  }, [])
  useEffect(() => {
    localStorage.setItem(L_S_KEY, JSON.stringify(todos))
    
}, [todos])


  
  return (
    <div className="App">
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
