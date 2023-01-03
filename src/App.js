import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import addButton from './images/addButton.svg';
import removeButton from'./images/removeButton.svg';
import ToDo from './ToDo.jsx';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo,setTodo] = useState('');
  function addToDo(){
    const newToDoList=[...todoList,todo];
    setTodoList(newToDoList);
    setTodo('');
    console.log(todo);
    console.log(todoList);
  }
  useEffect(()=>{
    setTodo();
   
  },[])

function removeToDo(){
  // ideally add ticks next to all todos and then you select the ones you want to delete by ticking them
}

return(
  <div className='App'>
    <div className='title'>
      <h1>TodoApp</h1>
    </div>
    <div className='bar'>
      <input
      placeholder='Add a Todo'
      value={todo}
      onChange={(e)=>{
        setTodo(e.target.value)
      }} 
      />

      <img
      className='add'
      src={addButton}
      alt='add'
      onClick={()=>{
        addToDo();
      }}
      />
        <img
      className='remove'
      src={removeButton}
      alt='remove'
      onClick={()=>{
        removeToDo()
      }}
      />
    </div>
    <div className='list'>
      {todoList.map((todo)=>(
        <ToDo todo={todo} />
      ))}
    </div>
  </div>
)

}

export default App;
