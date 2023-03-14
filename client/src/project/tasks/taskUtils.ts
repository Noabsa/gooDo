export type State = "active" | "";

export interface Task {
  index: number;
  description: string;
  marked: State;
  priority: State;
}

export const tasksArray: Task[] = [];
