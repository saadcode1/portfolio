import { gsap, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const animations = {
  animateFirstDiv: (element) => {
    gsap.fromTo(element, {
      scale: 0,
      duration: 0.5,
      delay: 0.5,
    }, {
      scale: 1,
      duration: 0.5,
      delay: 0.5,
      ease:"bounce.inOut",
    });
  },

  animateArticalsDiv: (element) => {
    gsap.fromTo(element, {
      scale: 0,
      duration: 0.7,
      delay: 0.7,
    }, {
      scale: 1,
      duration: 0.7,
      delay: 0.7,
      ease:"bounce.inOut",
    });
  },

  animateProductDiv: (element) => {
    gsap.fromTo(element, {
      scale: 0,
      duration: 0.9,
      delay: 0.9,
    }, {
      scale: 1,
      duration: 0.9,
      delay: 0.9,
      ease:"bounce.in",
    });
  },

  animateThirdDiv: (element) => {
    gsap.fromTo(element, {
      scale: 0,
      duration: 1,
      delay: 1,
    }, {
      scale: 1,
      duration: 1,
      delay: 1,
      ease:"bounce.inOut",
    });
  },

  animateServiceDiv: (element) => {
    gsap.fromTo(element, {
      scale: 0,
      duration: 1.2,
      delay: 1.2,
    }, {
      scale: 1,
      duration: 1.2,
      delay: 1.2,
      ease:"bounce.in",
    });
  },

  animateFeatureDiv: (element) => {
    gsap.fromTo(element, {
      scale: 0,
      duration: 0.5,
      delay: 0.5,
    }, {
      scale: 1,
      duration: 0.5,
      delay: 0.5,
      ease:"bounce.inOut",
    });
  },

  animateProjectsDiv: (element) => {
    gsap.fromTo(element, {
      scale: 0,
      duration: 0.5,
      delay: 0.5,
    }, {
      scale: 1,
      duration: 0.5,
      delay: 0.5,
      ease:"bounce.in",
    });
  },

  animateLetestDiv: (element) => {
    gsap.fromTo(element, {
      scale: 0,
      duration: 0.5,
      delay: 0.5,
    }, {
      scale: 1,
      duration: 0.5,
      delay: 0.5,
      ease:"bounce.inOut",
    });
  },

  animateSkillsDiv: (element) => {
    gsap.fromTo(element, {
      scale: 0,
      duration: 0.5,
      delay: 0.5,
    }, {
      scale: 1,
      duration: 0.5,
      delay: 0.5,
      ease:"bounce.in",
    });
  },

  animateWorkDiv: (element) => {
    gsap.fromTo(element, {
        scale: 0,
        duration: 0.5,
        delay: 0.5,
      }, {
        scale: 1,
        duration: 0.5,
        delay: 0.5,
        ease:"bounce.inOut",
      });
      
      ScrollTrigger.create({
        trigger: element,
        start: 'top 20%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      
      });
},

};

export default animations;