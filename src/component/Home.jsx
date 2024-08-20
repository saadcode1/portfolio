import Stars from "./Stars";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
export default function Home(){
    return(
      <>
       
      <Stars/>
      <div style={{top:"0",color:"red",position:"absolute",width:"100vw",height:"100vh",backgroundColor:"transparent",display:"flex",justifyContent:"center",alignItems:"baseline",overflow:"scroll"}}>
        <div>
      <Navbar/>
      <Dashboard/>
      </div>
      </div>
      
      </>
    )
}