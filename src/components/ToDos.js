import React from 'react'
import ToDoItems from './ToDoItems'
export default function ToDos({tasks}) {
  return (
    <div className='container border'>
      <h3>List of Tasks:</h3>
      {tasks.map(task => <ToDoItems task={task} />)}
    </div>
  )
}
