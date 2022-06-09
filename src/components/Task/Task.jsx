import React, { useEffect } from "react";
import styles from "./task.module.css";
import { useState } from "react";

import Counter from "../Counter/Counter";
 export const Task = ({tasks,toggleTask,deleteTask}) => {
  // NOTE: do not delete `data-testid` key value pair
  const [tasksList,setTasksList] = useState([])

  useEffect(()=>{
    setTasksList(tasks)
  },[tasks])
  
  return (
    <>
    {tasksList.map((e,id)=>(
      <li data-testid="task" className={styles.task} key={id}>
      <input type="checkbox" data-testid="task-checkbox" checked={e.done}
      onClick={()=>{toggleTask(id)}} />
      <div data-testid="task-text" style={e.done ? {textDecoration:"line-through"}:{textDecoration:"none"}}>{e.text}</div>
      {/* Counter here */}
      <Counter counter={e.count}/>
      <button data-testid="task-remove-button" onClick={()=>{deleteTask(id)}}>X</button>
    </li>
    ))}
    </>
  );
};


