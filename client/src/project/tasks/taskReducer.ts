import { TaskListConstants } from "./taskAccions";
import { Task } from "./taskUtils";

export type TaskListState = Task[];

//const initialState: TaskListState = tasksArray;
let initialState = JSON.parse(localStorage.getItem("taskList") || "[]");
export const taskListReducer = (
  state = initialState,
  action
): TaskListState => {
  switch (action.type) {
    case TaskListConstants.ADD_TASK:
      return [action.newTask, ...state];
    case TaskListConstants.MARK_TASK:
      return state.map((task) => {
        if (task.id === action.taskIndex) {
          return {
            ...task,
            [action.property]:
              task[action.property] === "active" ? "" : "active",
          };
        }
        return task;
      });
    case TaskListConstants.DELETE_TASK:
      let newArray = state.filter((task: Task) => {
        return task.id !== action.taskIndex;
      });
      return newArray;
    case TaskListConstants.EDIT_TASK:
      return state.map((task: Task) => {
        if (task.id === action.taskIndex) {
          return {
            ...task,
            description: action.newDescription,
          };
        }
        return task;
      });
    default:
      return state;
  }
};
