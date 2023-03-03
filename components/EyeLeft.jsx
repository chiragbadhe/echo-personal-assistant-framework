import React, { useState, useRef } from "react";

const EyeLeft = () => {
  const [corneaPosition, setCorneaPosition] = useState({ x: 0, y: 0 });

  const eyeRef = useRef(null);

  const handleMouseDown = (event) => {
    event.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event) => {
    const eyeRect = eyeRef.current.getBoundingClientRect();
    let newX = event.clientX - eyeRect.left - eyeRect.width / 2;
    let newY = event.clientY - eyeRect.top - eyeRect.height / 2;
    const maxRadius = eyeRect.width / 2 - corneaRadius;
    const distanceFromCenter = Math.sqrt(newX * newX + newY * newY);
    if (distanceFromCenter > maxRadius) {
      const angle = Math.atan2(newY, newX);
      newX = Math.cos(angle) * maxRadius;
      newY = Math.sin(angle) * maxRadius;
    }
    setCorneaPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const corneaRadius = 20;
  const eyeRadius = 65;

  return (
    <>
      <div
        className="border rounded-full bg-white z-20 relative"
        ref={eyeRef}
        onMouseDown={handleMouseDown}
        style={{ width: `${eyeRadius * 2}px`, height: `${eyeRadius * 2}px` }}
      >
        <div
          className="cornea"
          style={{
            width: `${corneaRadius * 2}px`,
            height: `${corneaRadius * 2}px`,
            borderRadius: "50%",
            backgroundColor: "white",
            position: "relative",
            top: `${eyeRadius - corneaRadius + corneaPosition.y}px`,
            left: `${eyeRadius - corneaRadius + corneaPosition.x}px`,
          }}
        >
          <div className="bg-black h-full w-full rounded-full"></div>
        </div>
      </div>
      {/* <div>
        <p>X Position {corneaPosition.x.toFixed(2)}</p>
        <p>Y Position {corneaPosition.y.toFixed(2)}</p>
      </div> */}
    </>
  );
};

export default EyeLeft;
