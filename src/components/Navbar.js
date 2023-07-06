import React from "react";
import { Typography, AppBar, Toolbar } from "@mui/material";
import StorageIcon from "@mui/icons-material/Storage";

export const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#0F5672", height: 60,position:'fixed' }}>
      <Toolbar>
        <Typography
          variant="h4"
          sx={{
            flexGrow: 1,
            textAlign: "center",
            paddingBottom: 2,
            marginLeft: 5,
            paddingTop: 1,
          }}
        >
          <StorageIcon /> Redux and API App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
