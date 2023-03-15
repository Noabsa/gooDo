import styled from "styled-components";
import { useEffect, useState } from "react";
import { TaskListItem, TaskListHeader, TaskListAdderItem } from "./TaskItems";
import { TaskSearchBar } from "./TaskSearchBar";
import { useAppDispatch, useAppSelector } from "../common/state/store";
import { taskListActions } from "./taskAccions";
import { Task } from "./taskUtils";
import { uniqueKey } from "../common/utils";

const TaskListWrapper = styled.div`
  grid-column: 2/-2;
`;

const generateTaskList = (tasksArray: Task[], searchValue: string) => {
  let filteredTaskArray = tasksArray.filter((task: Task) => {
    return task?.description
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase());
  });
  return filteredTaskArray.map((task: Task) => {
    return <TaskListItem task={task} key={uniqueKey()}></TaskListItem>;
  });
};
export const TaskList = () => {
  const dispatch = useAppDispatch();
  const taskListArray = useAppSelector((state) => state.taskList);
  let [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify([...taskListArray]));
  }, [taskListArray]);

  const addTask = (taskDescription: string) => {
    let newTask: Task = {
      id: new Date().getTime(),
      description: taskDescription,
      marked: "",
      priority: "",
    };
    dispatch(taskListActions.addTask(newTask));
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
