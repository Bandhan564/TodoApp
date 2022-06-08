import React from "react";
import Task from "./Task/Task";

import styles from "./taskApp.module.css";
import {AddTask} from "./AddTask/AddTask"
import { TaskHeader } from "./TaskHeader";

const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      
      {/* Add Task */}
      {/* Tasks */}
      <TaskHeader />
      <AddTask />
      <Task />
    </div>
  );
};

export default TaskApp;
