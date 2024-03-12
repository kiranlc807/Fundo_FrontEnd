import Header from "./Header";
import Sliderbar from './Sildebar';
import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import {
  Search as SearchIcon,
  Archive as ArchiveIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";


const DashboardLayout = () => {
    const [open, setOpen] = useState(false)
    useEffect(()=>console.log(),[open]);
    return (
      <><div>
        <Header toggleDrawer={setOpen} currState={open} />
        </div>
        <div style={{ display: "flex" }}>
          <Sliderbar drawerState={open} toggleDrawer={setOpen}/>
        </div>
        <div style={{with:"20px",
        position:"absolute",
        backgroundColor:"white", 
        height:"100%",marginTop:"75px", 
        display:"flex",
        flexDirection:"column" ,
        gap:"10px"}}>
          <IconButton>
        <SearchIcon />
        </IconButton>
        <IconButton>
        <ArchiveIcon />
        </IconButton>
        <IconButton>
        <DeleteIcon />
        </IconButton>
          </div>
          <div>
          <Outlet />
          </div>
      </>
    )
  };

export default DashboardLayout;