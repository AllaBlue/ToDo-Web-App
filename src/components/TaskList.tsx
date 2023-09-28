import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

import { TaskType } from "../context/TaskListContext";
import PopupWindow from "./PopupWindow";

type TaskListProps = {
  title: string;
  tasks: TaskType[];
  id: number;
};

const TaskList = (props: TaskListProps) => {
  return (
    <>
      <List>
        <ListItem>
          <ListItemText
            primary={<Typography variant="h6">{props.title}</Typography>}
            secondary={`Tasks: ${props.tasks.length}`}
          />
        </ListItem>
        <Divider />
        {props.tasks.map((task) => (
          <ListItem key={task.id}>
            <ListItemText
              primary={task.title}
              style={{ marginRight: "30px" }}
            />
            <PopupWindow
              title="Delete Task"
              action="delete task"
              listId={props.id}
              taskId={task.id}
            />
          </ListItem>
        ))}
        <Divider />
      </List>
    </>
  );
};

export default TaskList;
