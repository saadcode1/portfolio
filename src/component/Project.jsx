import "./Project.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import {useGSAP} from "@gsap/react";
import animations from "../Gsap";
import { gsap, ScrollTrigger } from 'gsap/all';
export default function Project(){
    const firstDivRef = useRef(null);
   const articalsRef = useRef(null);
   const productDivRef = useRef(null);
   const thirdDivRef = useRef(null);
   const serviceRef = useRef(null);
   const featureRef = useRef(null);
   const projectsRef = useRef(null);
   const letestRef = useRef(null);
   const skillsRef = useRef(null);
   const workRef = useRef(null);


   
   useGSAP(()=>{
    animations.animateFirstDiv(firstDivRef.current);
    animations.animateArticalsDiv(articalsRef.current);
    animations.animateProductDiv(productDivRef.current);
    animations.animateThirdDiv(thirdDivRef.current);
    animations.animateServiceDiv(serviceRef.current);
    animations.animateFeatureDiv(featureRef.current);
    animations.animateProjectsDiv(projectsRef.current);
    animations.animateLetestDiv(letestRef.current)
    animations.animateSkillsDiv(skillsRef.current)
    animations.animateWorkDiv(workRef.current);
 })
    return(
        <div className="profile">
      <div className="first-container">
        <div ref={firstDivRef} className="first-div-img" >
             <div className="zerodha">
                <p>Zerodha Trading Chart Bar <br/>Application</p>
             </div>
        </div>
                
        <div ref={articalsRef} className="articals-img">
        <div className="zerodha">
                <p>Spotify<br/>Application</p>
             </div>     
        </div>
      </div>
              
      <div className="sec-container">
        <div className="sec-inner">
          <div ref={productDivRef} className="product-div-img">
          <div className="zerodha">
                <p>Zerodha Chart<br/>Data</p>
             </div>      
          </div>
                  
          <div ref={thirdDivRef}  className="third-div-img">
            
          <div className="zerodha">
                <p>Movie Api<br/>Application</p>
             </div>
          </div>
        </div>
        <div ref={serviceRef}  className="service-img">
        <div className="zerodha">
                <p>Whatsapp <br/>Application</p>
             </div>
        </div>
      </div>
         
      <div className="third-container">
        <div ref={featureRef} className="feature">
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
        </div>
        <div ref={projectsRef} className="projects-img">
        <div className="zerodha">
                <p>Resume Builder <br/>Application</p>
             </div>
        </div>
                 
        <div ref={letestRef} className="letest-img">
        <div className="zerodha">
                <p>Zerodha<br/>Application</p>
             </div> 
        </div>
      </div>
            
      <div  className="last-container">
        <div ref={skillsRef} className="skills-img">
        <div className="zerodha">
                <p>Javapoint Clone <br/>Application</p>
             </div>
        </div>
         
        <div ref={workRef}  className="work-img">
        <div className="zerodha">
                <p>Zerodha Interface <br/>Application</p>
             </div>
        </div>
      </div>
    </div>
    )
}