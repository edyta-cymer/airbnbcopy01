import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#eB5757",
  },
  palette: {
    primary: {
      main: "#eB5757",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="input-box-one">
        <input
          className="input-where"
          type="text"
          placeholder="Helsinki, Finland"
        ></input>
      </div>
      <div className="input-box-two">
        <input
          className="input-guests"
          type="text"
          placeholder="Add Guest"
        ></input>
      </div>

      <div className="icon-box">
        <ThemeProvider theme={theme}>
          <SearchIcon color="primary" className="search-icon" />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default SearchBar;
