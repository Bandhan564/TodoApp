import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";


 export const AddTask = ({setTodos,addTodo}) => {
  // NOTE: do not delete `data-testid` key value pair
  const [newTask,setNewTask] = useState("")
  const handleChange = (e)=>{
    setNewTask(e.target.value)
  }
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" placeholder="Enter Todo"  onChange={handleChange}/>
      <button data-testid="add-task-button" onClick={()=>{addTodo(newTask)}} style={{marginLeft:"10px"}}>+</button>
    </div>
  );
};


