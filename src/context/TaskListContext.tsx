import { ReactNode, createContext, useState } from "react";
import initialLists from "../data";

export type TaskType = {
  title: string;
  id: number;
};

export type ListType = {
  title: string;
  tasks: TaskType[];
  id: number;
  visible: boolean;
};

export type TaskListContextType = {
  lists: ListType[];
  addTask: (listId: number, newTaskName: string) => void;
  removeTask: (listId: number, taskId: number) => void;
  addList: (newListName: string) => void;
  removeList: (listId: number) => void;
  filterByName: (searchText: string) => void;
};

export const TaskListContext = createContext<TaskListContextType | undefined>(
  undefined
);

export const TaskListContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [lists, setLists] = useState<ListType[]>(initialLists);

  const addTask = (listId: number, newTaskName: string) => {
    const listToFind = lists.find((list) => list.id === listId);
    const maxTaskId = listToFind
      ? Math.max(...(listToFind.tasks.map((task) => task.id) || [0]))
      : -1;
    const newTaskId = maxTaskId + 1;

    const newTask = {
      title: newTaskName,
      id: newTaskId,
    };

    const listToUpdate = lists.find((list) => list.id === listId);
    if (listToUpdate) {
      const updatedList = {
        ...listToUpdate,
        tasks: [...listToUpdate.tasks, newTask],
      };

      setLists((prev) =>
        [...prev.filter((list) => list.id !== listId), updatedList].sort(
          (a, b) => a.id - b.id
        )
      );
    }
  };

  const removeTask = (listId: number, taskId: number) => {
    const listToUpdate = lists.find((list) => list.id === listId);

    if (listToUpdate) {
      const updatedList = {
        ...listToUpdate,
        tasks: listToUpdate.tasks.filter((task) => task.id !== taskId),
      };

      setLists((prev) =>
        [...prev.filter((list) => list.id !== listId), updatedList].sort(
          (a, b) => a.id - b.id
        )
      );
    }
  };

  const addList = (newListName: string) => {
    const maxListId = Math.max(...lists.map((list) => list.id));
    const newListId = maxListId + 1;

    const newList = {
      title: newListName,
      tasks: [],
      id: newListId,
      visible: true,
    };

    setLists((prev) => [...prev, newList]);
  };

  const removeList = (listId: number) => {
    setLists((prev) => prev.filter((list) => list.id !== listId));
  };

  const filterByName = (searchText: string) => {
    setLists((prev) =>
      prev.map((list) =>
        list.title.toLowerCase().includes(searchText.toLowerCase())
          ? { ...list, visible: true }
          : { ...list, visible: false }
      )
    );
  };

  const contextValue = {
    lists,
    addTask,
    removeTask,
    addList,
    removeList,
    filterByName,
  };

  return (
    <TaskListContext.Provider value={contextValue}>
      {children}
    </TaskListContext.Provider>
  );
};
