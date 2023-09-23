import { Box, Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

type SearchAreaProps = {
  onClick: (searchText: string) => void;
};

const SearchArea = ({ onClick }: SearchAreaProps) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchText(event.target.value);
  };

  const handleClick = () => {
    onClick(searchText);
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
