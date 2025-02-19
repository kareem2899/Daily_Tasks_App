import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    // for handling change function
    const[value,setValue]=useState(task.task);
    // to prevent page from reloading after submiting
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        editTodo(value, task.id);
        setValue("");
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='Update Task' value={value}
        onChange={(e)=> setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update</button>
    </form>
  )
}
