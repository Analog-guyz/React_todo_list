import Todo from './Todo';

function Listitems({todos,remvoeTask,toggleComplete}) {

  return (
    <>
    {todos.map((todo,index)=>{
       return <Todo 
       key={index} 
       todo={todo}
       remvoeTask={remvoeTask} 
       index={index}
       toggleComplete={toggleComplete}/>
    })}
    </>
  );
}

export default Listitems;
