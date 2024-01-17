import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Search as SearchIcon,
  Archive as ArchiveIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";



const Sidebar = ({ drawerState, toggleDrawer }) => {
  const route = useNavigate();

  const handleSideBarIcon = (path)=>{
    route(`/dashboard${path}`);
  }
  
  return (
    <Drawer
      anchor="left"
      open={drawerState}
      onClose={()=>toggleDrawer(false)}
      sx={{ marginTop: "64px" ,backgroundColor:"white"}}
    >
      <List>
        {/* Add your sidebar items here */}
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="Notes" onClick={()=>handleSideBarIcon('/notes')}  />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ArchiveIcon />
          </ListItemIcon>
          <ListItemText primary="Archive" onClick={()=>handleSideBarIcon('/archive')}/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Trash" onClick={()=>handleSideBarIcon('/trash')}/>
        </ListItem>
        {/* Add more items as needed */}
      </List>
    </Drawer>
  );
};

export default Sidebar;