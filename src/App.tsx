import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PopupWindow from "./components/PopupWindow";
import TaskList from "./components/TaskList";
import { TaskListContextType, TaskType } from "./TaskListContext";
import { Box, Card, CardContent } from "@mui/material";
import SearchArea from "./components/SearchArea";

const tasklist = [
  {
    title: "Humber",
    tasks: [
      { title: "Task 1", id: 1 },
      { title: "Task 2", id: 2 },
      { title: "Task 3", id: 3 },
    ],
    id: 1,
  },

  {
    title: "MERN",
    tasks: [
      { title: "Lab", id: 1 },
      { title: "Project", id: 2 },
      { title: "Quiz", id: 3 },
    ],
    id: 2,
  },

  {
    title: "Java",
    tasks: [
      { title: "Group Discussion", id: 1 },
      { title: "Exam", id: 2 },
      { title: "Assignment", id: 3 },
    ],
    id: 3,
  },
];

function App() {
  const [taskListState, setTaskListState] =
    useState<TaskListContextType[]>(tasklist);

  const [filteredLists, setFilteredLists] =
    useState<TaskListContextType[]>(taskListState);

  const handleTaskDeletion = (listId: number, taskId: number) => {
    const listToUpdate = taskListState.find((list) => list.id === listId);

    if (listToUpdate) {
      const updatedList = {
        ...listToUpdate,
        tasks: listToUpdate.tasks.filter((task) => task.id !== taskId),
      };

      setTaskListState(
        [
          ...taskListState.filter((list) => list.id !== listId),
          updatedList,
        ].sort((a, b) => a.id - b.id)
      );

      setFilteredLists(
        [
          ...filteredLists.filter((list) => list.id !== listId),
          updatedList,
        ].sort((a, b) => a.id - b.id)
      );
    }
  };

  const handleListDeletion = (id: number, anything: any) => {
    setTaskListState(taskListState.filter((list) => list.id !== id));
    setFilteredLists(filteredLists.filter((list) => list.id !== id));
  };

  const handleListAddition = (id: number, newList: TaskListContextType) => {
    setTaskListState((prevTaskListState) => {
      const updatedTaskListState = [...prevTaskListState, newList];
      return updatedTaskListState;
    });

    setFilteredLists((prevFilteredLists) => {
      const updatedTaskListState = [...prevFilteredLists, newList];
      return updatedTaskListState;
    });
  };

  const handleTaskAddition = (listId: number, newTask: TaskType) => {
    const listToUpdate = taskListState.find((list) => list.id === listId);
    if (listToUpdate) {
      const updatedList = {
        ...listToUpdate,
        tasks: [...listToUpdate.tasks, newTask],
      };

      setTaskListState(
        [
          ...taskListState.filter((list) => list.id !== listId),
          updatedList,
        ].sort((a, b) => a.id - b.id)
      );

      setFilteredLists(
        [
          ...filteredLists.filter((list) => list.id !== listId),
          updatedList,
        ].sort((a, b) => a.id - b.id)
      );
    }
  };

  const handleSearchListsByCategory = (searchText: string) => {
    if (searchText === "") {
      setFilteredLists(taskListState);
    } else {
      setFilteredLists(
        taskListState.filter(
          (list) => list.title.toLowerCase() === searchText.toLowerCase()
        )
      );
    }
  };

  return (
    <>
      <Header
        title={"Tasks Lists"}
        totalTaskLists={taskListState.length}
        totalTasks={taskListState
          .map((list) => list.tasks.length)
          .reduce((acc, currentValue) => acc + currentValue, 0)}
      />
      <SearchArea onClick={handleSearchListsByCategory} />
      <Box mt={4} className="cardContainer">
        {filteredLists.map((l) => (
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
                taskId={generateTaskId(l)}
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
