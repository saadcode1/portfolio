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
    });
  },

  animateArticalsDiv: (element) => {
    gsap.fromTo(element, {
      scale: 0,
      duration: 0.5,
      delay: 0.5,
    }, {
      scale: 1,
      duration: 0.5,
      delay: 0.5,
    });
  },

  animateProductDiv: (element) => {
    gsap.fromTo(element, {
      scale: 0,
      duration: 0.5,
      delay: 0.5,
    }, {
      scale: 1,
      duration: 0.5,
      delay: 0.5,
    });
  },

  animateThirdDiv: (element) => {
    gsap.fromTo(element, {
      scale: 0,
      duration: 0.5,
      delay: 0.5,
    }, {
      scale: 1,
      duration: 0.5,
      delay: 0.5,
    });
  },

  animateServiceDiv: (element) => {
    gsap.fromTo(element, {
      scale: 0,
      duration: 0.5,
      delay: 0.5,
    }, {
      scale: 1,
      duration: 0.5,
      delay: 0.5,
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