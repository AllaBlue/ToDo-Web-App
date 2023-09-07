import { createContext } from "react";

export type TaskType = {
  title: string;
  id: number;
  deleteFlag: boolean;
};

export type TaskListContextType = {
  title: string;
  tasks: TaskType[];
  id: number;
  deleteFlag: boolean;
};

export const TaskListContext = createContext<TaskListContextType[] | null>(
  null
);