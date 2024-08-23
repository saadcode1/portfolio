import { Button } from "@mui/material";
import "./Biography.css";
import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from "framer-motion";
import { useRef } from "react";
import {useGSAP} from "@gsap/react";
import animations from "../Gsap";
import { gsap, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
export default function Biography(){

    
        const firstDivRef = useRef(null);
        const articalsRef = useRef(null);
        const productDivRef = useRef(null);
        const thirdDivRef = useRef(null);
        const featureRef = useRef(null);
        const projectsRef = useRef(null);
        const letestRef = useRef(null);
        const skillsRef = useRef(null);
        const workRef = useRef(null);
 
        useGSAP(()=>{
           animations.animateFirstDiv(firstDivRef.current);
           animations.animateArticalsDiv(articalsRef.current);
           animations.animateProductDiv(productDivRef.current);
           animations.animateThirdDiv(thirdDivRef.current);;
           animations.animateFeatureDiv(featureRef.current);
           animations.animateProjectsDiv(projectsRef.current);
           animations.animateLetestDiv(letestRef.current)
           animations.animateSkillsDiv(skillsRef.current)
           animations.animateWorkDiv(workRef.current);
        })
     

    return(
        <div className="profile-unique">
            <div className="first-container-unique">
                <div ref={firstDivRef} className="first-div-unique">
                <div  className="check">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq26NGyIcDVZPc4w-GSmOI4R907rAafHWDHw&s"/>
         </div>
         <Link to="/about"><Button variant="contained">I'm Saad Nezami</Button></Link>
                </div>
                <div ref={articalsRef} className="articals-unique">
                <div className="profile-1-unique">
              <div className="linkedin-unique">
                <a href="https://www.linkedin.com/in/md-saad-nezami-3515792b7/"><LinkedInIcon style={{ fontSize: "24" }} className="linked" /></a>
              </div>
              <div className="instagram-unique">
                <a href="https://github.com/saadcode1"><GitHubIcon className="insta-unique" /></a>
              </div>
            </div>
            <div className="profile-2-unique">
              <p>Social-Network</p>
              <ArrowForwardIcon />
            </div>
                </div>
            </div>

            <div className="sec-container-unique">
                <div className="sec-inner-unique">
                    <div ref={ productDivRef} className="product-div-unique">
                        <p className="p-name">Hello,<br/>
                       I’m Saad Nezami, a Mern-Stack,<br/>
                       Developer.</p>

                       <p className="p-description">With a strong foundation in the MERN stack, I excel at building dynamic, scalable web applications. My expertise spans the full development cycle, from crafting intuitive front-end interfaces with React to architecting robust back-end services with Node.js and Express. Leveraging MongoDB, I ensure data management is both efficient and flexible, enabling seamless performance and user experiences.</p>
                       <hr className="hr"/>
                       <div className="education">
                       <div className="education-child">
                          <p className="year">2021-2024</p>
                          <b><p style={{color:"white"}} className="college">Diploma Degree In (C.S.E).</p></b>
                          <p className="college">University - (CSVTU).</p>
                       </div>
                       <div className="education-child">
                          <p>2023-2023</p>
                          <b><p style={{color:"white"}} className="college">Internship - Code Fusion</p></b>
                          <p>Bilaspur, (CG).</p>
                       </div>
                       </div>
                    </div>

                    {/* <div className="third-div-unique">
                        <div className="profile-1-unique">
                            <div className="linkedin-unique">
                                bbbbbbbfff
                            </div>
                            <div className="instagram-unique">
                                BBBBBBB
                            </div>
                        </div>
                        <div className="profile-2-unique">
                            <p>Profile</p>
                            BBBBBBB
                        </div>
                    </div> */}
                </div>
               
            </div>

            <div className="third-container-unique">
                <div ref={thirdDivRef} className="feature-unique">
                <div  className="marquee-div-unique">
        <div className="child-mr-div-unique">
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
                <div ref={featureRef} className="projects-unique">
                    <div className="div-1-unique">
                        <p className="p1-unique">+01</p>
                        <p>YEARS EXPERIENCE</p>
                    </div>
                    <div className="div-2-unique">
                        <p className="p1-unique">+10</p>
                        <p>TOTAL PROJECTS</p>
                    </div>
                    <div className="div-3-unique">
                        <p className="p1-unique">++</p>
                        <p>CLIENTS WORLDWIDE</p>
                    </div>
                </div>

                <div ref={projectsRef} className="letest-unique">
                <div  className="feature-1-unique">
            <p>Work With<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Saad Nezami</p>
            </div>
            <div className="feature-1-div-unique">
            <p>Get In Touch...!</p>
             <Link style={{color:"white"}} to="/contact"><ArrowForwardIcon/></Link>
         </div>
                </div>
            </div>

            <div className="last-container-unique">
                <div ref={letestRef} className="skills-unique">
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
        <div ref={skillsRef} className="sec-child">
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
                </div>
                <div ref={workRef} className="work-unique">
                    <p className="do">What I Do</p>
                    <div className="list-item">
                       <p className="list-item-p"><i class="fa-solid fa-arrow-right"></i>&nbsp;Front-end</p>
                       <p className="list-item-p"><i class="fa-solid fa-arrow-right"></i>&nbsp;Server-side</p>
                       <p className="list-item-p"><i class="fa-solid fa-arrow-right"></i>&nbsp;APIs & Routing</p>
                       <p className="list-item-p"><i class="fa-solid fa-arrow-right"></i>&nbsp;Animations</p>
                       <p className="list-item-p"><i class="fa-solid fa-arrow-right"></i>&nbsp;Responsivenes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
