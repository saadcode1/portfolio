import Stars from "./Stars";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import Pagenot from "./Pagenot";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
export default function Home(){
    return(
      <>
          <BrowserRouter>
      <Stars/>
      <div style={{top:"0",color:"red",position:"absolute",width:"100vw",height:"100vh",backgroundColor:"transparent",display:"flex",justifyContent:"center",alignItems:"baseline",overflow:"scroll",overflowX:"hidden"}}>
        <div>
      <Navbar/>
      <Routes>
       <Route path="/" element={  <Dashboard/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/projects" element={<Project/>}/>
       <Route path="*" element={<Pagenot/>}/>
      </Routes>
    
      </div>
      </div>
      </BrowserRouter>
      </>
    )
}