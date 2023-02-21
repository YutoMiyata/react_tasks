import React from 'react'
import { useEffect , useState } from 'react';
import axios from 'axios';
import "./Main.css";

const Main = () => {
   const [tasks , setTasks] = useState([])
   const [tasksDetail,setTasksDetail] = useState([])

   useEffect(() => {
    axios.get(`https://cafe-tasks-boards.com/api/tasks/`)
     .then((res) => setTasks(res.data))
   },[]);


  //  function
   const showDetail = (id) => {
    axios.get(`https://cafe-tasks-boards.com/api/tasks/${id}/`)
     .then ((res) => setTasksDetail(res.data))
   }

   const resetDetail = () => {
    setTasksDetail([])
   }

  return (
    <div className='tasks_home'>
      <div className='tasks_lists'>
        <h1>タスク一覧</h1>
        {tasks.map((task) => {
          return(
            <div key = {task.id} className='task_list'>
                <table class="table">
                    <tbody>
                        <tr>
                            <th>ID番号</th>
                            <td>{task.id}</td>
                        </tr>
                        <tr>
                            <th>タスク名</th>
                            <td>{task.task_name}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='task_list_button'>
                  <button onClick={() => showDetail(task.id)}>詳細</button>
                </div>
            </div>
          )
        })}
      </div>
      <div className='tasks_detail'>
        <h1>タスク詳細</h1>
        <table class="table tasksTableDetail">
                    <tbody>
                        <tr>
                            <th>ID番号</th>
                            <td>{tasksDetail.id}</td>
                        </tr>
                        <tr>
                            <th>タスク名</th>
                            <td>{tasksDetail.task_name}</td>
                        </tr>
                        <tr>
                            <th>タスク詳細</th>
                            <td>{tasksDetail.task_detail}</td>
                        </tr>
                        <tr>
                            <th>記入者</th>
                            <td>{tasksDetail.name}</td>
                        </tr> 
                        {/* <tr>
                            <th>作成日</th>
                            <td>{tasksDetail.name}</td>
                        </tr> 
                        <tr>
                            <th>更新日</th>
                            <td>{tasksDetail.name}</td>
                        </tr>                         */}
                    </tbody>
        </table>
        <div className='resetTasksButton'>
          <button onClick = {() => resetDetail()}>リセット</button>
        </div>
      </div>
    </div>

  )
}

export default Main
