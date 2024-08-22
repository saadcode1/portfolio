import "./Skill.css"
import { motion } from "framer-motion";
export default function Skills(){
    return(
        <>
        <p className="p">Skills & Tools</p>
       <div className="first-mar">
        <div className="first-child">
             <motion.p
             initial={{ x: 0 }}
             animate={{ x: '-100%' }}
             transition={{
               duration: 20,
               repeat: Infinity,
               ease: 'linear'
             }}
             className="skill">
                 
                <span className="skill-1">HTML</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1">CSS</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1">JAVASCRIPT</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1">REACT.JS</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1">EXPRESS.JS</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1">MONGODB</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1">MYSQL</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1">GSAP</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1">FRAMER-MOTION</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
             </motion.p>
             <motion.p
             initial={{ x: 0 }}
             animate={{ x: '-100%' }}
             transition={{
               duration: 20,
               repeat: Infinity,
               ease: 'linear'
             }}
             className="skill">
                 
                 <span className="skill-1">HTML</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1">CSS</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1">JAVASCRIPT</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1">REACT.JS</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1">EXPRESS.JS</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1">MONGODB</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1">MYSQL</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1">GSAP</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1">FRAMER-MOTION</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
             </motion.p>
             
        </div>
        
       </div>

       <div className="sec-mar">
        <div className="sec-child">
             <motion.p
             initial={{ x: '-100%' }}
             animate={{ x: 0 }}
             transition={{
               duration: 20,
               repeat: Infinity,
               ease: 'linear'
             }}
             className="skill">
                  
                <span className="skill-1"><i class="fa-brands fa-html5"></i></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1"><i class="fa-brands fa-css3-alt"></i></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1"><i class="fa-brands fa-js"></i></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1"><i class="fa-brands fa-react"></i></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1"><i class="fa-solid fa-database"></i></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1"><i class="fa-brands fa-node-js"></i></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1"><i class="fa-brands fa-html5"></i></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1"><i class="fa-brands fa-css3-alt"></i></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1"><i class="fa-brands fa-js"></i></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1"><i class="fa-brands fa-react"></i></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1"><i class="fa-solid fa-database"></i></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1"><i class="fa-brands fa-node-js"></i></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
             </motion.p>
             <motion.p
             initial={{ x: "-100%" }}
             animate={{ x: 0 }}
             transition={{
               duration: 20,
               repeat: Infinity,
               ease: 'linear'
             }}
             className="skill">
                 <span className="skill-1"><i class="fa-brands fa-html5"></i></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1"><i class="fa-brands fa-css3-alt"></i></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1"><i class="fa-brands fa-js"></i></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1"><i class="fa-brands fa-react"></i></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1"><i class="fa-solid fa-database"></i></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1"><i class="fa-brands fa-node-js"></i></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1"><i class="fa-brands fa-html5"></i></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1"><i class="fa-brands fa-css3-alt"></i></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1"><i class="fa-brands fa-js"></i></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1"><i class="fa-brands fa-react"></i></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1"><i class="fa-solid fa-database"></i></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="skill-1"><i class="fa-brands fa-node-js"></i></span>
              
             </motion.p>
             
        </div>
        
       </div>
       </>
    )
}