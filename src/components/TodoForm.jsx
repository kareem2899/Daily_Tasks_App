import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    // for handling change function
    const[value,setValue]=useState('');
    // to prevent page from reloading after submiting
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        addTodo(value);
        setValue("");
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='write your task' value={value}
        onChange={(e)=> setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add task</button>
    </form>
  )
}
