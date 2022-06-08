import React, { useEffect } from "react";
import styles from "./task.module.css";
import { useState } from "react";
import axios from "axios";
import Counter from "../Counter/Counter";
const Task = () => {
  // NOTE: do not delete `data-testid` key value pair
      const [allTask,setAllTask] = useState([]);

      useEffect(() => {
        getData()
      },[])
      const getData = () => {
        axios.get("http://localhost:8080/todos").then((res) => setAllTask(res.data))
      }
      //console.log(allTask);
const handleRemove = (id) => {
  console.log(id);
  axios.delete(`http://localhost:8080/todos/${id}`).then(() => getData())
}
const handleEdit = (id) => {
  
}

  return (
    
    <li data-testid="task" className={styles.task}>
        {allTask.map((el) =>
        <div key={el.id} className= "inputBox">
       <input type="checkbox" data-testid="task-checkbox"  onChange={() => handleEdit(el.id)}/>
   
      <div data-testid="task-text" id={`id${el.id}`}>{el.text}</div>
    <Counter count = {el.count} />
    <button data-testid="task-remove-button" onClick={() => handleRemove(el.id)}>Remove</button>
    </div>
      )}
  </li>
  
  );
};

export default Task;
