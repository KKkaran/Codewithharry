import React, { useState } from 'react'

export default function ToDoItems({ task }) {
  const [isShown, setIsShown] = useState(true)
  const [isComplete,setIsComplete] = useState(false)
  
  const onDelete = (e) => {
    setIsShown(false)
  }
  const onComplete = (e) => {
    setIsComplete(true)
  }

  return (
    <div className='border m-3 p-2' style={{display: isShown ? 'block' : 'none'}}>
      <div className='d-flex'>
        <h4>{task.title}</h4>
        <button style={{ display: isComplete ? 'block' : 'none' }} className='btn btn-sm btn-success m-1'>Completed</button>
        <div style={{ display: isComplete ? 'none' : 'block' }}>
          <button className='btn btn-sm btn-primary m-1' onClick={onComplete}>Complete</button>
          <button className='btn btn-sm btn-danger m-1' onClick={onDelete}>Delete</button>
        </div>
      </div>
      <h6>{task.text}</h6>
    </div>
  )
}
