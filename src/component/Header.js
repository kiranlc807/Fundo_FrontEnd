import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Badge,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Refresh as RefreshIcon,
  Settings as SettingsIcon,
  Apps as AppsIcon,
  AccountCircle as AccountCircleIcon,
  MenuOpen as MenuOpenIcon,
} from "@mui/icons-material";
import Sidebar from "./Slidebar.js";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsSidebarOpen(open);
  };

  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            {isSidebarOpen ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "80px",
              marginLeft: "-15px",
            }}
          >
            {/* Google Keep image */}
            <img
              src={
                "https://play-lh.googleusercontent.com/9bJoeaPbGTB8Tz_h4N-p-6ReRd8vSS-frZb2tmJulaGIoTKElKj3zpmcFJvnS96ANZP5"
              }
              style={{
                marginRight: "8px",
                height: "45px",
                width: "auto",
                marginRight: "5px",
              }}
            />
            {/* FundoNote text */}
            <Typography variant="h6" sx={{ color: "inherit" }}>
              Fundo
            </Typography>
          </div>
          <div style={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <SearchIcon sx={{ mr: 1 }} />
            <InputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
              sx={{ color: "inherit", flexGrow: 1 }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit" aria-label="refresh">
              <RefreshIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="last view">
              {/* Add your "last view" icon here */}
            </IconButton>
            <IconButton color="inherit" aria-label="settings" sx={{ mr: 1 }}>
              <SettingsIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Google Apps">
              <Badge color="error" variant="dot">
                <AppsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit" aria-label="profile">
              <AccountCircleIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Sidebar isOpen={isSidebarOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Header;