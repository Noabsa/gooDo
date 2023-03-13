type State = "active" | "inactive";
export interface Task {
  index: number;
  description: string;
  state: State;
  priority: State;
}
export const tasksArray: Task[] = [];
