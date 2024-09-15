// React
import { useState } from "react";

// Components
import SingleItemView from "./components/SingleItemView";
import MultiItemView from "./components/MultiItemView";

// Material UI
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
} from "@mui/material";

// Utils
import { DATA_CENTERS, SERVERS, WORLDS_ENUM } from "./utils/servers";

// Styles
import "./App.css";

function App() {
  const [dataCenter, setDataCenter] = useState(
    localStorage.getItem("dataCenter") ?? ""
  );
  const [homeWorld, setHomeWorld] = useState(
    localStorage.getItem("homeWorld") ?? ""
  );
  const [availableWorlds, setAvailableWorlds] = useState<WORLDS_ENUM[]>(
    getWorldsForDataCenter()
  );
  const [multiView, setMultiView] = useState(false);

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
        <div id="view-toggle" className="centered">
          <h3>Single Item View</h3>
          <Switch
            checked={multiView}
            onChange={(e) => setMultiView(e.target.checked)}
          />
          <h3>List Items View</h3>
        </div>
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
      <div id="content-container" className="flex justify-between">
        {multiView ? (
          <MultiItemView></MultiItemView>
        ) : (
          <SingleItemView></SingleItemView>
        )}
      </div>
    </>
  );
}

export default App;
