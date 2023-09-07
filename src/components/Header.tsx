import { Typography } from "@mui/material";

type HeaderProps = {
  title: string;
  totalTaskLists: number;
  totalTasks: number;
};

const Header = (props: HeaderProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        backgroundColor: "#2196f3",
        color: "white",
      }}
    >
      <Typography variant="h4">{props.title}</Typography>
      <div>
        <Typography variant="subtitle1">
          Task Lists: {props.totalTaskLists}
        </Typography>
        <Typography variant="subtitle1">Tasks: {props.totalTasks}</Typography>
      </div>
    </div>
  );
};

export default Header;
