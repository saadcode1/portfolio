import React, { useMemo, useRef } from 'react';

import "../App.css";
import "../index.css"

export default function Stars(){
    const starCount = 300;
  const nightSkyRef = useRef(null);

  const stars = useMemo(() => {
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        left: Math.random() * 100,
        top: Math.random() * -100,
        animationDelay: Math.random() * 20,
        animationDuration: 4 + Math.random() * 5,
      });
    }
    return stars;
  }, [starCount]);
    return(
        <>
           <div className="night-sky" ref={nightSkyRef}>
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            left: `${star.left}vw`,
            top: `${star.top}px`,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
    </div>
        </>
    )
}