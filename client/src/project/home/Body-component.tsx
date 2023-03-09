import styled from "styled-components";
import { useState } from "react";
import {
  TaskListItem,
  TaskListHeader,
  TaskListAdderItem,
} from "../tasks/Task-component";
import { tasksArray } from "../tasks/Task-static";

const taskList = (tasksArray) => {
  return tasksArray.map((task) => {
    return (
      task.index > 0 && (
        <TaskListItem task={task} key={task.index}></TaskListItem>
      )
    );
  });
};
const BodyStyles = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  min-height: 250px;
  & .body {
    &__list-container {
      grid-column: 2/-2;
    }
  }
`;
export const Body = () => {
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
    <BodyStyles className="body">
      <div className="body__list-container">
        <TaskListHeader counter={taskListArray.length - 1} />
        <TaskListAdderItem addTask={addTask} />
        {taskList(taskListArray)}
      </div>
    </BodyStyles>
  );
};
