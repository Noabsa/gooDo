import styled from "styled-components";
import { useState } from "react";
import {
  TaskListItem,
  TaskListHeader,
  TaskListAdderItem,
} from "./Task-component";
import { tasksArray, Task } from "./Task-static";

const TaskListWrapper = styled.div`
  grid-column: 2/-2;
`;
const taskList = (tasksArray: Task[]) => {
  return tasksArray.map((task) => {
    return <TaskListItem task={task} key={task.index}></TaskListItem>;
  });
};

export const TaskList = () => {
  let [taskListArray, setTaskListArray] = useState(tasksArray);

  const addTask = (taskDescription) => {
    taskListArray.unshift({
      index: taskListArray.length,
      description: `${taskDescription}`,
      state: "inactive",
      priority: "inactive",
    });
    setTaskListArray([...taskListArray]);
  };
  return (
    <TaskListWrapper>
      <TaskListHeader counter={taskListArray.length} />
      <TaskListAdderItem addTask={addTask} />
      {taskList(taskListArray)}
    </TaskListWrapper>
  );
};
