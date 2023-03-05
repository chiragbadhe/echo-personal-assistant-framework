/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from "react";

const EyeBrowLeft = ({ centerX, startY, endY, initialAngle }) => {
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
      let newAngle = angle - deltaY;
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
      className="eyebrow z-30 absolute h-[30px] h-[30px] w-[150px]"
      onMouseDown={handleMouseDown}
      style={style}
    >
      <svg
        width="175"
        height="63"
        viewBox="0 0 175 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M132.524 0.8509L8.08 42.926L-0.000117786 62.4304L130.022 35.5911L167.36 54.3973L174.959 41.5136L132.524 0.8509Z"
          fill="#232323"
        />
      </svg>
    </div>
  );
};

export default EyeBrowLeft;
