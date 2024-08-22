import React from "react";
import "./Dashboard.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Profile from "./Profile";
import Blog from "./Blog";
import Title from "./Title";
import Marquee from "./Marquee";
import Getin from "./Getin";
import Letestwork from "./Letestwork";
import Sercvices from "./Services";
import Skills from "./Skills";
import { useRef } from "react";
import {useGSAP} from "@gsap/react";
import animations from "../Gsap";
import { gsap, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default function Dashboard() {
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



//   useGSAP(() => {
//    gsap.fromTo(firstDivRef.current, {
//      scale: 0,
//      duration: 0.5,
//      delay: 0.5,
   
//    }, {
//      scale: 1,
//      duration: 1,
//      delay: 0.5,
//      ease:"bounce.in",
//    });

//    gsap.fromTo(articalsRef.current, {
//      scale: 0,
//      duration: 0.5,
//      delay: 0.5,
//    }, {
//      scale: 1,
//      duration: 0.5,
//      delay: 0.5,
//    });

//    gsap.fromTo(productDivRef.current, {
//      scale: 0,
//      duration: 0.5,
//      delay: 0.5,
//    }, {
//      scale: 1,
//      duration: 0.5,
//      delay: 0.5,
//    });

//    gsap.fromTo(thirdDivRef.current, {
//      scale: 0,
//      duration: 0.5,
//      delay: 0.5,
//    }, {
//      scale: 1,
//      duration: 0.5,
//      delay: 0.5,
//    });

//    gsap.fromTo(serviceRef.current, {
//      scale: 0,
//      duration: 0.5,
//      delay: 0.5,
//    }, {
//      scale: 1,
//      duration: 0.5,
//      delay: 0.5,
//    });

//    gsap.fromTo(featureRef.current, {
//      scale: 0,
//      duration: 0.5,
//      delay: 0.5,
//    }, {
//      scale: 1,
//      duration: 0.5,
//      delay: 0.5,
//    });

//    gsap.fromTo(projectsRef.current, {
//      scale: 0,
//      duration: 0.5,
//      delay: 0.5,
//    }, {
//      scale: 1,
//      duration: 0.5,
//      delay: 0.5,
//    });

//    gsap.fromTo(letestRef.current, {
//      scale: 0,
//      duration: 0.5,
//      delay: 0.5,
//    }, {
//      scale: 1,
//      duration: 0.5,
//      delay: 0.5,
//    });

//    gsap.fromTo(skillsRef.current, {
//      scale: 0,
//      duration: 0.5,
//      delay: 0.5,
//    }, {
//      scale: 1,
//      duration: 0.5,
//      delay: 0.5,
//    });

//    gsap.fromTo(workRef.current, {
//      scale: 0,
//      duration: 0.5,
//      delay: 0.5,
//    }, {
//      scale: 1,
//      duration: 0.5,
//      delay: 0.5,
//    });
//  }, []);

  return (
   <div className="profile">
      <div className="first-container">
        <div className="first-div" ref={firstDivRef}>
          <Profile />
        </div>

        <div ref={articalsRef} className="articals">
          <Blog />
        </div>
      </div>

      <div className="sec-container">
        <div className="sec-inner">
          <div ref={productDivRef} className="product-div">
            <Title />
          </div>

          <div ref={thirdDivRef} className="third-div">
            <div className="profile-1">
              <div className="linkedin">
                <LinkedInIcon style={{ fontSize: "24" }} className="linked" />
              </div>
              <div className="instagram">
                <InstagramIcon className="insta" />
              </div>
            </div>
            <div className="profile-2">
              <p>Profile</p>
              <ArrowForwardIcon />
            </div>
          </div>
        </div>
        <div ref={serviceRef} className="service">
          <Sercvices />
        </div>
      </div>

      <div className="third-container">
        <div ref={featureRef} className="feature">
          <Marquee />
        </div>
        <div ref={projectsRef} className="projects">
          <div className="div-1">
            <p className="p1">+01</p>
            <p>YEARS EXPERIENCE</p>
          </div>
          <div className="div-2">
            <p className="p1">+145</p>
            <p>TOTAL PROJECTS</p>
          </div>
          <div className="div-3">
            <p className="p1">+129</p>
            <p>CLENTS WORLDWIBE</p>
          </div>
        </div>

        <div ref={letestRef} className="letest">
          <Letestwork />
        </div>
      </div>

      <div ref={skillsRef} className="last-container">
        <div className="skills">
          <Skills />
        </div>

        <div  ref={workRef} className="work">
          <Getin/>
        </div>
      </div>
    </div>
 
  );
}