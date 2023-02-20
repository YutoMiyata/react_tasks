import React from 'react'
import "./Create.css";
import { useState } from 'react';
import axios from 'axios';

const Create = () => {
  const [taskName , setTaskName ] = useState('')
  const [taskContennt , setTaskConntent ] = useState('')
  const [name , setName] = useState('')

  const addTasks = () => {
    axios.post('https://cafe-tasks-boards.com/api/',{
      task_name:taskName,
      task_detail:taskContennt,
      name:name,
    },{headers: {
      'Content-Type': 'application/json',
    }})
     .then((res) => res.data);
  }

  return (
    <div>
      <h1>TASK 追加</h1>
      <div>
        <input 
        placeholder='タスク名'
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}/>
      </div>
      <div>
        <textarea
        placeholder='タスク内容'
        value={taskContennt}
        onChange={(e) => setTaskConntent(e.target.value)}
        />
      </div>
      <div>
        <input 
        placeholder='記入者'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <button onClick = {() => addTasks()}>追加</button>
      </div>
    </div>
    
  )
}

export default Create
