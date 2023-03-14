import { State, Task } from "./taskUtils";

export enum TaskListConstants {
  ADD_TASK = "ADD_TASK",
  MARK_TASK = "MARK_TASK",
}

const addTask = (taskDescription: string) => ({
  type: TaskListConstants.ADD_TASK,
  taskDescription,
});
const markTask = (taskIndex: number, property: keyof Task) => ({
  type: TaskListConstants.MARK_TASK,
  taskIndex,
  property,
});

export const taskListActions = {
  TaskConstants: TaskListConstants,
  addTask,
  markTask,
};
