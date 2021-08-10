import './TodoList.css';
import React,{useState,useEffect} from 'react';
import Listitems from './Listitems';
import list_bg from '../img/paper.jpg'
function TodoList({addTodo,todos,remvoeTask,toggleComplete}) {
  const [todo, setTodo] = useState({
    id:"",
    task:"",
    completed:false
  })
  const [height, setHeight] = useState(0)

  const handleChange =(e)=>{
    setTodo({...todo,task:e.target.value})
  }

  const handleSubmit=(e) =>{
    e.preventDefault()
    if(todo.task.trim()){
    
      addTodo({...todo,id:Date.now()})
      setTodo({...todo,task:""})
    }
  }
  useEffect(() => {
    addTodo({...todo,task:"this is a task!",id:Date.now(),completed:false})
    
  },[]);
 useEffect(()=>{
  const checkHeight =() =>{
    const list = document.querySelector(".items-wrapper")
    setHeight(list.clientHeight)
    // console.log(list.clientHeight)
  }
    
    checkHeight()
 },[todos.length])
 
   
  
  
  return (
    <div  className= {height >465 ?"list-wrapper flow" :"list-wrapper"} style={{ backgroundImage: `url(${list_bg})` }} >
        <div className="title"><h1>Todo List</h1></div>
        <form className="add-wrapper" onSubmit={handleSubmit}>
            <input  value={todo.task} className="input" onChange={(e)=> handleChange(e)} placeholder=" Enter a task"></input>
            <i className="fas fa-plus" onClick={(e)=>handleSubmit(e)}></i>   {/* <= this is submit button */}
        </form>
        <div className="items-wrapper">
          <Listitems todos={todos} remvoeTask={remvoeTask} toggleComplete={toggleComplete} />
        </div>

   </div>  
  );
}

export default TodoList;
