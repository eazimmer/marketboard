// React
import React, { useState } from "react";

// Material UI
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

// Local
import { DATA_CENTERS, SERVERS, WORLDS_ENUM } from "./utils/servers";
import "./App.css";

function App() {
  const [dataCenter, setDataCenter] = useState(
    localStorage.getItem("dataCenter") ?? ""
  );
  const [homeWorld, setHomeWorld] = useState(
    localStorage.getItem("homeWorld") ?? ""
  );
  const [searchText, setSearchText] = useState("");
  const [availableWorlds, setAvailableWorlds] = useState<WORLDS_ENUM[]>(
    getWorldsForDataCenter()
  );

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

  // Populate available worlds based on selected datacenter
  function selectDataCenter(dataCenter: string) {
    // Reset homeworld whenever datacenter selection changes
    setHomeWorld("");
    localStorage.removeItem("homeWorld");

    // Store dataCenter value
    setDataCenter(dataCenter);
    localStorage.setItem("dataCenter", dataCenter);

    // Pull associated worlds from relevant datacenter
    const server = SERVERS.find((server) => server.dataCenter === dataCenter);
    if (server) {
      setAvailableWorlds(server.worlds);
    } else {
      console.error(
        "Failed to find worlds associated with datacenter: ",
        dataCenter
      );
    }
  }

  function selectHomeWorld(world: string) {
    setHomeWorld(world);
    localStorage.setItem("homeWorld", world);
  }

  // Pull associated worlds from relevant datacenter
  function getWorldsForDataCenter(): WORLDS_ENUM[] {
    if (dataCenter) {
      const server = SERVERS.find((server) => server.dataCenter === dataCenter);
      if (server) {
        return server.worlds;
      } else {
        return [];
      }
    } else {
      return [];
    }
  }

  return (
    <>
      <div id="top-nav">
        <div id="search-container">
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
          <IconButton
            id="search-submit-button"
            color="secondary"
            onClick={searchItem}
          >
            <SearchIcon />
          </IconButton>
        </div>
        <div className="flex">
          <div className="dropdown-button flex">
            <FormControl sx={{ minWidth: 150 }}>
              <InputLabel id="data-center-select-helper-label">
                Data Center
              </InputLabel>
              <Select
                labelId="data-center-select-helper-label"
                value={dataCenter}
                label="Data Center"
                onChange={(event: SelectChangeEvent) =>
                  selectDataCenter(event.target.value)
                }
              >
                {DATA_CENTERS.map((dataCenter) => (
                  <MenuItem key={dataCenter} value={dataCenter}>
                    {dataCenter}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="dropdown-button flex">
            <FormControl disabled={!dataCenter} sx={{ minWidth: 150 }}>
              <InputLabel id="home-world-select-helper-label">
                Home World
              </InputLabel>
              <Select
                labelId="home-world-select-helper-label"
                value={homeWorld}
                label="Home World"
                onChange={(event: SelectChangeEvent) =>
                  selectHomeWorld(event.target.value)
                }
              >
                {availableWorlds.map((world) => (
                  <MenuItem key={world} value={world}>
                    {world}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
