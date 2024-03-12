// import React from "react";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import {
//   Search as SearchIcon,
//   Archive as ArchiveIcon,
//   Delete as DeleteIcon,
// } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import './Slidbar.css'



// const Sidebar = ({ drawerState, toggleDrawer }) => {
//   const route = useNavigate();

//   const handleSideBarIcon = (path)=>{
//     route(`/dashboard${path}`);
//   }
  
//   return (
//     <Drawer
//       anchor="left"
//       open={drawerState}
//       onClose={()=>toggleDrawer(false)}
//       sx={{marginTop:"64px", zIndex:1}}
//     >
//       <List style={{marginTop:"64px"}}>
//         {/* Add your sidebar items here */}
//         <ListItem button>
//           <ListItemIcon>
//             <SearchIcon />
//           </ListItemIcon>
//           <ListItemText primary="Notes" onClick={()=>handleSideBarIcon('/notes')}  />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <ArchiveIcon />
//           </ListItemIcon>
//           <ListItemText primary="Archive" onClick={()=>handleSideBarIcon('/archive')}/>
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <DeleteIcon />
//           </ListItemIcon>
//           <ListItemText primary="Trash" onClick={()=>handleSideBarIcon('/trash')}/>
//         </ListItem>
//         {/* Add more items as needed */}
//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar;

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
import './Slidbar.css'

const Sidebar = ({ drawerState, toggleDrawer }) => {
  const route = useNavigate();

  const handleSideBarIcon = (path) => {
    route(`/dashboard${path}`);
    // Close the drawer after navigation
    toggleDrawer(false);
  };

  const handleListItemClick = (event, path) => {
    // Prevent closing the drawer when clicking on a list item
    event.preventDefault();
    handleSideBarIcon(path);
  };
  
  return (
    <Drawer
      anchor="left"
      open={drawerState}
      onClose={() => toggleDrawer(false)}
      sx={{ marginTop: "64px", zIndex: 1 }}
    >
      <List style={{ marginTop: "64px" }}>
        {/* Add your sidebar items here */}
        <ListItem button onClick={(event) => handleListItemClick(event, '/notes')}>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="Notes" />
        </ListItem>
        <ListItem button onClick={(event) => handleListItemClick(event, '/archive')}>
          <ListItemIcon>
            <ArchiveIcon />
          </ListItemIcon>
          <ListItemText primary="Archive" />
        </ListItem>
        <ListItem button onClick={(event) => handleListItemClick(event, '/trash')}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Trash" />
        </ListItem>
        {/* Add more items as needed */}
      </List>
    </Drawer>
  );
};

export default Sidebar;
