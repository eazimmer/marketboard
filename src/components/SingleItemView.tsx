// React
import { useState } from "react";

// Components
import LargeCard from "./LargeCard";

// Material UI
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

// Styles
import "./SingleItemView.css";

function SingleItemView() {
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
      <div className="flex justify-between">
        <div>
          <div className="card-label">Home World</div>
          <LargeCard
            labels={["Price", "Quantity"]}
            rows={[
              { price: 989, quantity: 99 },
              { price: 989, quantity: 99 },
            ]}
          ></LargeCard>
        </div>
        <div>
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

export default SingleItemView;
