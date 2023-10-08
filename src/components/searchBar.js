import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { search } from "../axios";
import { useBar } from "../hooks/hooks";

export default function CustomizedInputBase() {
  const [value, setValue] = React.useState("");
  const { projects, setProjects } = useBar();

  const handleSearch = async (event) => {
    console.log(value);
    const result = await search(value);
    console.log("in searchBar.js", result.length);
    setProjects(result);
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "50%" }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="find out interested open science project"
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        onClick={handleSearch}
        disabled={value === ""}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
