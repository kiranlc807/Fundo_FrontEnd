import Header from "./Header";
import Sliderbar from './Sildebar';
import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
    const [open, setOpen] = useState(false)
    useEffect(()=>console.log(open),[open]);
    return (
      <>
        <Header toggleDrawer={setOpen} currState={open} />
        <div style={{ display: "flex" }}>
          <Sliderbar drawerState={open} toggleDrawer={setOpen}/>
        </div>
          <Outlet />
      </>
    )
  };

export default DashboardLayout;