import { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import PopupWindow from "./components/PopupWindow";
import TaskList from "./components/TaskList";
import {
  TaskListContext,
  TaskListContextType,
} from "./context/TaskListContext";
import { Box, Card, CardContent } from "@mui/material";
import SearchArea from "./components/SearchArea";

function App() {
  const { lists } = useContext(TaskListContext) as TaskListContextType;

  return (
    <>
      <Header title={"Tasks Lists"} />
      <SearchArea />
      <Box mt={4} className="cardContainer">
        {lists
          .filter((list) => list.visible === true)
          .map((l) => (
            <Card key={l.id} style={{ position: "relative" }} className="card">
              <CardContent>
                <TaskList title={l.title} tasks={l.tasks} id={l.id} />
                <PopupWindow
                  title="Add Task"
                  action="add task"
                  listId={l.id}
                  taskId={-1}
                />
              </CardContent>

              <PopupWindow
                title="Delete List"
                action="delete list"
                listId={l.id}
                taskId={-1}
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
              listId={-1}
              taskId={-1}
            />
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default App;
