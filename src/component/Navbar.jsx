import React from "react";
import styled from "@emotion/styled";
import "./Navbar.css";
import ListIcon from '@mui/icons-material/List';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Drawerchild from "./Drawerchild";
import { useCallback } from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    const Listicon = styled(ListIcon)`
      font-size: 10vw;
    `;

    const  close=useCallback((data)=>{
        setOpen(data)
    },[])

    return (
      <>
        <div className="navbar">
          <div>
            <h2 className="header">PortFolio</h2>
            <span className="option-icon">
              <Listicon onClick={toggleDrawer(true)} />
            </span>
          </div>
          <div className="option">
            <Link style={{fontSize:"22px",color:"white",textDecoration:"none"}} to="/">Home</Link>
            <Link style={{fontSize:"22px",color:"white",textDecoration:"none"}} to="/about">About</Link>
            <Link style={{fontSize:"22px",color:"white",textDecoration:"none"}} to="/contact">Contact</Link>
          </div>
          <div className="button">
            <Button variant="contained">Lets Talk</Button>
          </div>
        </div>

        <div>
          <Drawer open={open} onClose={toggleDrawer(false)}>
           <Drawerchild close={close}/>
          </Drawer>
        </div>
      </>
    );
}