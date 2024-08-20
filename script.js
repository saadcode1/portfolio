document.addEventListener('DOMContentLoaded', function() {
    const starCount = 1000;
    const nightSky = document.querySelector('.night-sky');
  
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animationDelay = `${Math.random() * 30}s`;
      star.style.animationDuration = `${4 + Math.random() * 5}s`;
      nightSky.appendChild(star);
    }
  });
  