import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PopupWindow from "./components/PopupWindow";
import TaskList from "./components/TaskList";
import {
  // TaskListContext,
  TaskListContextType,
  TaskType,
} from "./TaskListContext";
import { Box, Card, CardContent } from "@mui/material";

const tasklist = [
  {
    title: "Humber",
    tasks: [
      { title: "Task 1", id: 1, deleteFlag: false },
      { title: "Task 2", id: 2, deleteFlag: false },
      { title: "Task 3", id: 3, deleteFlag: false },
    ],
    id: 1,
    deleteFlag: false,
  },

  {
    title: "MERN",
    tasks: [
      { title: "Lab", id: 1, deleteFlag: false },
      { title: "Project", id: 2, deleteFlag: false },
      { title: "Quiz", id: 3, deleteFlag: false },
    ],
    id: 2,
    deleteFlag: false,
  },

  {
    title: "Java",
    tasks: [
      { title: "Group Discussion", id: 1, deleteFlag: false },
      { title: "Exam", id: 2, deleteFlag: false },
      { title: "Assignment", id: 3, deleteFlag: false },
    ],
    id: 3,
    deleteFlag: false,
  },
];

function App() {
  const [taskListState, setTaskListState] =
    useState<TaskListContextType[]>(tasklist);

  const getOriginalList = (listId: number) => {
    return taskListState.find((list) => list.id === listId);
  };

  const handleTaskDeletion = (listId: number, taskId: number) => {
    const updatedTaskListState = [...taskListState];

    const listToUpdate = updatedTaskListState.find(
      (list) => list.id === listId
    );
    const taskIndex = listToUpdate?.tasks.findIndex(
      (task) => task.id === taskId
    );

    if (listToUpdate && taskIndex !== -1 && taskIndex != undefined) {
      listToUpdate.tasks[taskIndex].deleteFlag = true;

      setTaskListState(updatedTaskListState);

      console.log(`from handleTaskDeletion`);
      console.log(updatedTaskListState);
    }
  };

  const handleListDeletion = (id: number, anything: any) => {
    const updatedTaskListState = [...taskListState];
    console.log(anything);

    const listToDelete = updatedTaskListState.find((list) => list.id === id);

    if (listToDelete) {
      const deletedList = {
        ...listToDelete,
        deleteFlag: true,
      };

      const listIndex = updatedTaskListState.indexOf(listToDelete);

      updatedTaskListState[listIndex] = deletedList;

      setTaskListState(updatedTaskListState);
    }

    console.log(`listId to Delete -> ${id}`);
    console.log(`taskListState after Delete`);
    console.log(taskListState);
  };

  const handleListAddition = (id: number, newList: TaskListContextType) => {
    console.log(`newList ->`);
    console.log(newList);

    console.log(`id -> ${id}`);

    setTaskListState((prevTaskListState) => {
      const updatedTaskListState = [...prevTaskListState, newList];
      return updatedTaskListState;
    });

    console.log(`updated taskliststate ->`);
    console.log(taskListState);
  };

  const handleTaskAddition = (id: number, newTask: TaskType) => {
    const updatedTaskListState = [...taskListState];

    const listToUpdate = updatedTaskListState.find((list) => list.id === id);

    if (listToUpdate) {
      const updatedList = {
        ...listToUpdate,
        tasks: [...listToUpdate.tasks, newTask],
      };

      const listIndex = updatedTaskListState.indexOf(listToUpdate);

      updatedTaskListState[listIndex] = updatedList;

      setTaskListState(updatedTaskListState);

      console.log(`from handleTaskAddition`);
      console.log(updatedTaskListState);
    }
  };

  const filteredTaskListState = taskListState
    .filter((list) => !list.deleteFlag)
    .map((list) => ({
      ...list,
      tasks: list.tasks.filter((task) => !task.deleteFlag),
    }));

  return (
    <>
      {/* <TaskListContext.Provider value={filteredTaskListState}> */}
      <Header
        title={"Tasks Lists"}
        totalTaskLists={filteredTaskListState.length}
        totalTasks={filteredTaskListState
          .map((list) => list.tasks.length)
          .reduce((acc, currentValue) => acc + currentValue)}
      />
      <Box mt={4} className="cardContainer">
        {filteredTaskListState.map((l) => (
          <Card key={l.id} style={{ position: "relative" }} className="card">
            <CardContent>
              <TaskList
                title={l.title}
                tasks={l.tasks}
                id={l.id}
                onClick={handleTaskDeletion}
              />
              <PopupWindow
                title="Add Task"
                action="add task"
                listId={l.id}
                taskId={generateTaskId(getOriginalList(l.id))}
                onClick={handleTaskAddition}
              />
            </CardContent>

            <PopupWindow
              title="Delete List"
              action="delete list"
              listId={l.id}
              taskId={-1}
              onClick={handleListDeletion}
            />
          </Card>
        ))}
        <Card
          style={{ position: "relative", width: "calc(33.33% - 16px)" }}
          className="card"
        >
          <CardContent>
            <PopupWindow
              title="Add List"
              action="add list"
              listId={generateListId(taskListState)}
              taskId={-1}
              onClick={handleListAddition}
            />
          </CardContent>
        </Card>
      </Box>
      {/* </TaskListContext.Provider> */}
    </>
  );
}

const generateTaskId = (list: TaskListContextType | undefined) => {
  let maxTaskId = -1;
  if (list != undefined) {
    maxTaskId = Math.max(...list.tasks.map((task) => task.id));

    console.log(`maxTaskId -> ${maxTaskId}`);
    return maxTaskId + 1;
  }
};

const generateListId = (lists: TaskListContextType[]) => {
  const maxListId = Math.max(...lists.map((list) => list.id));
  return maxListId + 1;
};

export default App;
