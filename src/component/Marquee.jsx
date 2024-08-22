import { motion } from "framer-motion";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
export default function Marquee(){
    return(

        <div className="marquee-div">
        <div className="child-mr-div">
        <motion.p
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        >LESTEST WORKS AND FEATURED</motion.p> &nbsp;&nbsp;&nbsp;&nbsp;  <motion.p
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
        >LESTEST WORKS AND FEATURED</motion.p>
         &nbsp;&nbsp; <motion.p
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
        >LESTEST WORKS AND FEATURED</motion.p>
          
        </div>
      </div>
    )
}