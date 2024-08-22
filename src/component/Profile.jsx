import {Button} from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Profile(){
    return(
        
           <>
            <div  className="check">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq26NGyIcDVZPc4w-GSmOI4R907rAafHWDHw&s"/>
         </div>
         <Button variant="contained">I'm Saad Nezami</Button>
         <div className="bio-div">
            <p>Biography</p>
             <ArrowForwardIcon/>
         </div>
         </>
    
    )
}