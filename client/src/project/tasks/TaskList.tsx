import styled from "styled-components";
import { useState } from "react";
import { TaskListItem, TaskListHeader, TaskListAdderItem } from "./TaskItems";
import { TaskSearchBar } from "./TaskSearchBar";
import { useAppDispatch, useAppSelector } from "../common/state/store";
import { taskListActions } from "./taskAccions";
import { Task } from "./taskUtils";

const TaskListWrapper = styled.div`
  grid-column: 2/-2;
`;

const generateTaskList = (tasksArray: Task[], searchValue: string) => {
  let filteredTaskArray = tasksArray.filter((task: Task) => {
    return task.description
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase());
  });
  return filteredTaskArray.map((task: Task) => {
    return <TaskListItem task={task} key={task.index}></TaskListItem>;
  });
};
export const TaskList = () => {
  const dispatch = useAppDispatch();
  const taskListArray = useAppSelector((state) => state.taskList);
  let [searchValue, setSearchValue] = useState("");

  const addTask = (taskDescription: string) => {
    dispatch(taskListActions.addTask(taskDescription));
  };

  return (
    <TaskListWrapper>
      <TaskSearchBar setSearchValue={setSearchValue} />
      <TaskListHeader />
      <TaskListAdderItem addTask={addTask} />
      {generateTaskList(taskListArray, searchValue)}
    </TaskListWrapper>
  );
};
