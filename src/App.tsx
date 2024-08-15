import React, { useState } from "react";

import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

import "./App.css";

function App() {
  const [dataCenter, setDataCenter] = React.useState("");
  const [homeWorld, setHomeWorld] = React.useState("");
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
    <>
      <div id="top-nav">
        <div id="search-container" className="nav-item">
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
        <div className="flex">
          <div className="dropdown-button flex">
            <FormControl sx={{ m: 1, minWidth: 160 }}>
              <InputLabel id="data-center-select-helper-label">
                Data Center
              </InputLabel>
              <Select
                labelId="data-center-select-helper-label"
                value={dataCenter}
                label="Data Center"
                onChange={(event: SelectChangeEvent) =>
                  setDataCenter(event.target.value)
                }
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="dropdown-button flex">
            <FormControl disabled={!dataCenter} sx={{ m: 1, minWidth: 160 }}>
              <InputLabel id="home-world-select-helper-label">
                Home World
              </InputLabel>
              <Select
                labelId="home-world-select-helper-label"
                value={homeWorld}
                label="Home World"
                onChange={(event: SelectChangeEvent) =>
                  setHomeWorld(event.target.value)
                }
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
