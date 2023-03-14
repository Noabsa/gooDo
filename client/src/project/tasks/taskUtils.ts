export type State = "active" | "";

export interface Task {
  id: number;
  description: string;
  marked: State;
  priority: State;
}

export const tasksArray: Task[] = [];
