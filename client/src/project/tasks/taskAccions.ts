import { State, Task } from "./taskUtils";

export enum TaskListConstants {
  ADD_TASK = "ADD_TASK",
  MARK_TASK = "MARK_TASK",
  DELETE_TASK = "DELETE_TASK",
}

const addTask = (newTask: Task) => ({
  type: TaskListConstants.ADD_TASK,
  newTask,
});
const markTask = (taskIndex: number, property: keyof Task) => ({
  type: TaskListConstants.MARK_TASK,
  taskIndex,
  property,
});
const deleteTask = (taskIndex: number) => ({
  type: TaskListConstants.DELETE_TASK,
  taskIndex,
});

export const taskListActions = {
  TaskConstants: TaskListConstants,
  addTask,
  markTask,
  deleteTask,
};
