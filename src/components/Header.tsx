import { Typography } from "@mui/material";
import MainContainer from "./MainContainer";

type HeaderProps = {
  title: string;
  totalTaskLists: number;
  totalTasks: number;
};

const Header = (props: HeaderProps) => {
  return (
    <MainContainer>
      <Typography variant="h4">{props.title}</Typography>
      <div>
        <Typography variant="subtitle1">
          Task Lists: {props.totalTaskLists}
        </Typography>
        <Typography variant="subtitle1">Tasks: {props.totalTasks}</Typography>
      </div>
    </MainContainer>
  );
};

export default Header;
