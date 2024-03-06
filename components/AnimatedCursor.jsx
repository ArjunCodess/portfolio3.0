'use client'

import { useEffect, useState } from 'react';

export default function AnimatedCursor() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const colors = [
      "#ffb56b", "#fdaf69", "#f89d63"
    ];

    const circles = document.querySelectorAll(".circle");
    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;
      
      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
        
        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });
      
      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    // Clean up function
    return () => cancelAnimationFrame(animateCircles);
  }, [coords]); // Re-run effect when coords change

  // Event listener to update coordinates
  useEffect(() => {
    function updateCoords(e) {
      setCoords({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", updateCoords);
    return () => window.removeEventListener("mousemove", updateCoords);
  }, []);

  return (
    <>
      {/* Render circles */}
      <style jsx>{`
        .circle {
          height: 24px;
          width: 24px;
          border-radius: 24px;
          background-color: black;
          position: fixed; 
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 99999999; /* so that it stays on top of all other elements */
          transition: transform 0.1s ease-out;
        }
      `}</style>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </>
  );
}