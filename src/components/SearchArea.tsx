import { Box, Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useContext, useState } from "react";
import {
  TaskListContext,
  TaskListContextType,
} from "../context/TaskListContext";

const SearchArea = () => {
  const [searchText, setSearchText] = useState("");
  const { filterByName } = useContext(TaskListContext) as TaskListContextType;

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchText(event.target.value);
  };

  const handleClick = () => {
    filterByName(searchText);
  };

  return (
    <Box
      mt={4}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Category"
        variant="outlined"
        sx={{
          marginRight: "20px",
        }}
        value={searchText}
        onChange={handleSearchTextChange}
      />

      <Button variant="contained" onClick={handleClick}>
        <SearchIcon />
      </Button>
    </Box>
  );
};

export default SearchArea;
