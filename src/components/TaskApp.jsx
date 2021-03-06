import React, { useEffect, useState } from "react";


import styles from "./taskApp.module.css";
import {AddTask} from "./AddTask/AddTask"
import { TaskHeader } from "./TaskHeader";
import Tasks from "./Tasks/Tasks";


const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
   const [todos,setTodos] = useState([])
   const gettodos = async()=>{
    let tododata = await fetch("http://localhost:8080/todos").then((d)=>d.json())

    setTodos(tododata)
  }

  useEffect(()=>{
      gettodos()
    },[])
    const deleteTask = (index)=>{
      // console.log(text)
      const newTodos = todos.filter((e,id)=>{ return id !== index})
      setTodos(newTodos)
    }
  
    const toggleTask = (index)=>{
      const todo = todos.map((e,id)=>{
        if(id === index)
        {
          e.done = !e.done
        }
  
        return e;
      })
      
      setTodos([...todo])
    }
  
    const addTodo = (newTodo)=>{
      let count = 0;
      
      for(let i=0; i<todos.length; i++)
      {
        if(todos[i].text === newTodo)
        {
          count++;
          break;
        }
      }
      // console.log(count)
      if(count === 0)
      {
        let newTask = {
          text:newTodo,
          done:false,
          count:1
          }
      
          setTodos([...todos,newTask])
      }
    }
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      
      {/* Add Task */}
      {/* Tasks */}


      <TaskHeader todos={todos}/>
      <AddTask setTodos={setTodos} addTodo={addTodo}/>
      <Tasks todos={todos} deleteTask={deleteTask} toggleTask={toggleTask}/>
    </div>
  );
};

export default TaskApp;
