import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Drawerchild({close}){

    return(
        <div className="drawer" style={{backgroundColor:"#1A1A1A"}}>
            <h2>BentoX</h2>
           <ul>
            <Link style={{color:"white",marginTop:"20px"}}   to="/" onClick={()=>close(false)}>Home</Link>
           
            <br/>
            <br/>
            <Link style={{color:"white",marginTop:"20px"}} to="/about" onClick={()=>close(false)}>About</Link>
            <br/>
            <br/>
            <li>Contact</li>
           </ul>
                             
           <div>
            <a style={{color:"white",textDecoration:"none"}} href="#">LinkedIn</a> ||  <a style={{color:"white",textDecoration:"none"}} href="#">Github</a>
           </div>
        </div>
    )
}