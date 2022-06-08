import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";
import axios from "axios";
 export const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair
  //const [text,setText] = useState("")
  const [task,setTask] = useState({
    text:"",
    done:false,
    count:0
  })
  const handleChange =(e) =>{
    setTask({...task,text:e.target.value})
  }
  
  const handleAddTodo = () => {
       axios.post("http://localhost:8080/todos",task)
  }
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" placeholder="Enter Todo"  onInput={handleChange}/>
      <button data-testid="add-task-button" onClick={handleAddTodo}>+</button>
    </div>
  );
};


