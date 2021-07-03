import React,{useState} from 'react';
import './Todo.css'
export default function Todo({todo,remvoeTask,index,toggleComplete}) {


    const handleRemove =() => {
        remvoeTask(todo.id)
    }
    const handleToggle =()=>{
        toggleComplete(todo.id)
        console.log(todo.completed)
    }

    return (
        <div className="todo-bar" >
            <div  className="task-bar"  onClick={handleToggle} >
                <p>{`${index+1}  - `}</p>
            <p className="task-bar-text" style={{
          textDecoration: todo.completed ? 'line-through' : null
        }}>{todo.task}</p></div>
            <i className="fas fa-times" onClick={handleRemove}></i>
        </div> 
    )
}

