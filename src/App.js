import './App.css';
import { useEffect, useState} from 'react';
import addButton from './images/addButton.svg';
import removeButton from'./images/removeButton.svg';
import ToDoList from './ToDoList';

const LOCAL_STORAGE_KEY= 'savedList';
var tempFiltering =[];// Temp value to store todoList in while filtering to avoid messing up the order

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo,setTodo] = useState('');
  useEffect(()=>{
    const savedTodoList= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(savedTodoList){
      setTodoList(savedTodoList);
    }
  },[])

  useEffect(()=>{
    if (todoList.length!==0){
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todoList));
    }

   
  },[todoList])
    
  
  function addToDo(){
    if(todo==='') return
    else{
    setTodoList(prevtodo =>[...prevtodo,
      {
      id: Math.random(),
      name : todo,
      complete:false
    }
  ])  
    setTodo('');
}
  }


function removeToDo(){
  // ideally add ticks next to all todos and then you select the ones you want to delete by ticking them
  const newTodos= todoList.filter(todo => !todo.complete) // returns array that only has the uncompleted ones
  setTodoList(newTodos)
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(newTodos))
}
function toggleTodo(id) {
  const newTodos = [...todoList]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.complete
  setTodoList(newTodos)
}
function filterToDos(){
  console.log('OG')
  console.log(todoList)
 tempFiltering= [...todoList];
  const filtered = todoList.filter(todo => todo.complete)
  console.log('Before')
  console.log(tempFiltering)
  setTodoList(filtered)
  console.log('After')
  console.log(tempFiltering)
}
function unfilter(){  
  console.log('In unfiltered')
  console.log(tempFiltering)
  setTodoList(tempFiltering);
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
      <button className='completed' 
      onClick={filterToDos}>
        Show Completed</button>
        <button className='all' 
      onClick={unfilter}>
        Show All</button>
    </div>
    <div className='list'>
    <ToDoList todos={todoList} toggleTodo={toggleTodo} />
    </div>
  </div>
)

    }

export default App;
