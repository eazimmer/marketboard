import React, { useState } from "react";

import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");

  // Allow for search bar submission via enter press
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      searchItem();
    }
  }

  // Execute item search
  function searchItem() {
    console.log("Searching: ", searchText);
  }

  return (
    <div className="search-container">
      <TextField
        id="search-input"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        placeholder="Search for an item"
        value={searchText}
        variant="outlined"
      />
      <IconButton color="secondary" onClick={searchItem}>
        <SearchIcon />
      </IconButton>
    </div>
  );
}

export default App;
