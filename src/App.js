import React,{useState} from 'react';
import './App.css';
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([])
  
  const addTodo = (todo) =>{

    setTodos([...todos,todo])
  
  }
  const remvoeTask = (id)=>{
    setTodos(todos.filter(todo => todo.id !== id ))
  }
  const toggleComplete =(id)=>{
    setTodos(todos.map(
      (todo)=>{
        if(todo.id === id){
          return {
            ...todo,completed:!todo.completed
          }
        }
        return todo;
      }
    ))
  }

  console.log(todos)
  return (
    <div className="hero-container">
     <TodoList addTodo={addTodo} todos={todos} remvoeTask={remvoeTask} toggleComplete={toggleComplete}/>
     <div className="footer"><p>@Made by Analog-guy</p></div>
    </div>
  );
}

export default App;
