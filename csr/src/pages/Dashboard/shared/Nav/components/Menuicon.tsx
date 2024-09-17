import { IconButton, Typography } from "@mui/material";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

export default function Menuicon({handleDrawerToggle,}){
    return <IconButton
    color="inherit"
    aria-label="open drawer"
    edge="start"
    onClick={handleDrawerToggle}
    sx={{ mr: 2 }}
  >
    <MenuIcon />
  </IconButton>
}