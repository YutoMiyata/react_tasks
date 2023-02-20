import React from 'react'
import { useEffect , useState } from 'react';
import axios from 'axios';
import "./Main.css";

const Main = () => {
   const [tasks , setTasks] = useState([])
   useEffect(() => {
    axios.get(`https://cafe-tasks-boards.com/`)
     .then((res) => setTasks(res.data))
   })
   console.log(tasks)
  return (
    <div>
      {tasks.map((task) => {
        return(
          <div>
            <h3>{task.task_name}</h3>
          </div>
          
        )
      })}
    </div>
  )
}

export default Main
