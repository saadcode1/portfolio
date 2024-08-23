import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Button} from "@mui/material"
import { Link } from 'react-router-dom';
export default function Letestwork(){
    return(
        <>
        <div className="letest-work">
           <p className='letest-works'>See My<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Letest Works</p>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAD34Y2hQGurxFzuhwk_mVh1_t9Y9O3mC-LA&s"/>
           </div>
           <div className="letst-work-1">
           <p>See projects...!</p>
           <Link style={{color:"white"}} to="/projects"><ArrowForwardIcon/></Link>
        </div>
       </>
    )
}