import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
export default function Blog(){
    return(
        <>
         <div className="feature-1-child">
            <p>Work With<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Saad Nezami</p>
            </div>
            <div className="feature-1-div-div">
            <p>Get In Touch...!</p>
             <Link to="/contact"><ArrowForwardIcon style={{color:"white"}}/></Link>
         </div>
        </>
    )
}