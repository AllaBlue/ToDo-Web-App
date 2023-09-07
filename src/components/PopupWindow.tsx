import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { useState } from "react";

type PopupWindowProps = {
  title: string;
  action: string;
  listId: number;
  taskId: number | undefined;
  onClick: (id: number, taskOrList: any) => void;
};

const PopupWindow = (props: PopupWindowProps) => {
  const [open, setOpen] = useState(false);
  const [listName, setListName] = useState("");
  const [taskName, setTaskName] = useState("");

  const handleAction = () => {
    setOpen(false);
    if (props.action == "add list") {
      addList();
    } else if (props.action == "add task") {
      addTask();
    } else if (props.action == "delete list") {
      deleteList();
    } else if (props.action == "delete task") {
      deleteTask();
    }
  };

  const addList = () => {
    const newList = {
      title: listName,
      tasks: [],
      id: props.listId,
      deleteFlag: false,
    };

    props.onClick(newList.id, newList);
  };
  const addTask = () => {
    const newTask = {
      title: taskName,
      id: props.taskId,
      deleteFlag: false,
    };

    props.onClick(props.listId, newTask);
  };
  const deleteList = () => {
    props.onClick(props.listId, "");
  };
  const deleteTask = () => {
    props.onClick(props.listId, props.taskId);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleListNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setListName(event.target.value);
  };

  const handleTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  return (
    <div>
      {props.action.includes("delete") ? (
        <IconButton
          onClick={handleOpen}
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            fontSize: "14px",
          }}
        >
          X
        </IconButton>
      ) : (
        <Button onClick={handleOpen}>
          {`${
            props.action == "add list" ? "+ Add new list" : "+ Add new task"
          }`}
        </Button>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <p>
            {props.action == "delete list" ? (
              "Are you sure you want to delete this list?"
            ) : props.action == "delete task" ? (
              "Are you sure you want to delete this task?"
            ) : props.action == "add list" ? (
              <TextField
                label="Name of List"
                variant="outlined"
                value={listName}
                onChange={handleListNameChange}
              />
            ) : props.action == "add task" ? (
              <TextField
                label="Name of Task"
                variant="outlined"
                value={taskName}
                onChange={handleTaskNameChange}
              />
            ) : (
              ""
            )}
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAction} color="primary">
            {props.action.includes("delete") ? "Delete" : "Add"}
          </Button>

          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PopupWindow;
