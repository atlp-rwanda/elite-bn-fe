import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
import { MenuItem, Select, Typography } from "@material-ui/core/";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { height } from "@mui/system";

export default function Search() {
  const [criteria, setCriteria] = useState("1");
  const [searchItem, setSearchItem] = useState("");
  console.log(criteria);
  return (
    <MuiThemeProvider  >
      <div className="main-content">
       
        <br />
        <br />
        <SearchBar
          value={searchItem}
          onChange={value => {
            setSearchItem(value);
          }}
          onRequestSearch={() => console.log("onRequestSearch")}
          style={{
           
            maxWidth: 800
            
          }}
     
        />
      </div>
    </MuiThemeProvider>
  );
}
