import { Typography } from "@mui/material";
import MainContainer from "./MainContainer";
import { useContext } from "react";
import {
  TaskListContext,
  TaskListContextType,
} from "../context/TaskListContext";

type HeaderProps = {
  title: string;
};

const Header = (props: HeaderProps) => {
  const { lists } = useContext(TaskListContext) as TaskListContextType;

  const totalNumberOfLists = lists.length;
  const totalNumberOfTasks = lists
    .map((list) => list.tasks.length)
    .reduce((acc, currentValue) => acc + currentValue, 0);

  return (
    <MainContainer>
      <Typography variant="h4">{props.title}</Typography>
      <div>
        <Typography variant="subtitle1">
          Task Lists: {totalNumberOfLists}
        </Typography>
        <Typography variant="subtitle1">Tasks: {totalNumberOfTasks}</Typography>
      </div>
    </MainContainer>
  );
};

export default Header;
