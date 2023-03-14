import styled from "styled-components";
import { useState } from "react";
import { TaskListItem, TaskListHeader, TaskListAdderItem } from "./TaskItems";
import { tasksArray, Task } from "./Task-static";
import { TaskSearchBar } from "./TaskSearchBar";

const TaskListWrapper = styled.div`
  grid-column: 2/-2;
`;

const generateTaskList = (tasksArray: Task[], searchValue: string) => {
  let filteredTaskArray = tasksArray.filter((task) => {
    return task.description
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase());
  });
  return filteredTaskArray.map((task) => {
    return <TaskListItem task={task} key={task.index}></TaskListItem>;
  });
};
export const TaskList = () => {
  let [taskListArray, setTaskListArray] = useState(tasksArray);
  let [searchValue, setSearchValue] = useState("");
  console.log(taskListArray);
  const addTask = (taskDescription: string) => {
    taskListArray.unshift({
      index: taskListArray.length,
      description: taskDescription,
      state: "inactive",
      priority: "inactive",
    });
    setTaskListArray([...taskListArray]);
  };

  return (
    <TaskListWrapper>
      <TaskSearchBar setSearchValue={setSearchValue} />
      <TaskListHeader counter={taskListArray.length} />
      <TaskListAdderItem addTask={addTask} />
      {generateTaskList(taskListArray, searchValue)}
    </TaskListWrapper>
  );
};
