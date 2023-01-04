import React from "react";


const ToDo= ({todo , toggleTodo}) =>{
    function handleChange(){
        toggleTodo(todo.id)
    }
    return(
    <div className="todo">
        <input 
        type="checkbox" 
        
        checked={todo.complete}
        onChange={handleChange}
        />
        <label htmlFor="checkbox">{todo.name}</label>
    </div>
    )
}

export default ToDo;