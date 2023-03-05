/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from "react";

const EyeBrowRight = ({ centerX, startY, endY, initialAngle }) => {
  const eyebrowRef = useRef(null);
  const [angle, setAngle] = useState(initialAngle);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);

  const handleMouseDown = (event) => {
    event.preventDefault();
    setIsDragging(true);
    setDragStartY(event.clientY);
  };


  const handleMouseMove = (event) => {
    if (isDragging) {
      const deltaY = event.clientY - dragStartY;
      let newAngle = angle + deltaY;
      if (newAngle < -30) {
        newAngle = -30;
      } else if (newAngle > 30) {
        newAngle = 30;
      }
      setAngle(newAngle);
      setDragStartY(event.clientY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const style = {
    transform: `rotate(${angle}deg)`,
    transformOrigin: `${centerX}px ${startY}px`,
    cursor: "grab",
  };

  return (
    <div
      ref={eyebrowRef}
      className="eyebrow z-30 absolute h-[30px] w-[150px]"
      onMouseDown={handleMouseDown}
      style={style}
    >
      <svg
        width="176"
        height="64"
        viewBox="0 0 176 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.2214 0.681404L167.549 43.9555L175.573 63.8336L43.2214 34.2949L8.22627 54.8072L0.664648 41.7059L43.2214 0.681404Z"
          fill="#232323"
        />
      </svg>
    </div>
  );
};

export default EyeBrowRight;
