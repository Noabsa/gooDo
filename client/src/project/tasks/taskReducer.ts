import { TaskListConstants } from "./taskAccions";
import { Task, tasksArray } from "./taskUtils";

export type TaskListState = Task[];

const initialState: TaskListState = tasksArray;

export const taskListReducer = (
  state = initialState,
  action
): TaskListState => {
  switch (action.type) {
    case TaskListConstants.ADD_TASK:
      const newTask: Task = {
        index: state.length + 1,
        description: action.taskDescription,
        marked: "",
        priority: "",
      };
      return [newTask, ...state];

    case TaskListConstants.MARK_TASK:
      return state.map((task) => {
        if (task.index === action.taskIndex) {
          return {
            ...task,
            [action.property]:
              task[action.property] === "active" ? "" : "active",
          };
        }
        return task;
      });
    default:
      return state;
  }
};
