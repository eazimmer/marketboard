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

// Utils
import { DATA_CENTERS, SERVERS, WORLDS_ENUM } from "./utils/servers";

// Components
import LargeCard from "./components/LargeCard";

// Styles
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
          sx={{
            "& fieldset": { border: "none" },
          }}
        />
        <IconButton
          id="search-submit-button"
          color="secondary"
          onClick={searchItem}
        >
          <SearchIcon id="search-submit-icon" />
        </IconButton>
      </div>
      <div id="content-container" className="flex justify-between">
        <div className="card-container">
          <div className="card-label">Home World</div>
          <LargeCard
            labels={["Price", "Quantity"]}
            rows={[
              { price: 989, quantity: 99 },
              { price: 989, quantity: 99 },
            ]}
          ></LargeCard>
        </div>
        <div className="card-container">
          <div className="card-label">Other Worlds</div>
          <LargeCard
            labels={["Price", "Quantity", "World"]}
            rows={[
              { price: 989, quantity: 99, world: "Adamantoise" },
              { price: 989, quantity: 99, world: "Adamantoise" },
            ]}
          ></LargeCard>
        </div>
      </div>
    </>
  );
}

export default App;
