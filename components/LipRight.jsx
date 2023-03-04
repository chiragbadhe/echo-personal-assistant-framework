import React, { useState, useRef } from "react";
import { useStore } from "../store/useDotPositions";
import useDotPositions from "../store/useDotPositions";

const LipRight = () => {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  const circleRef = useRef(null);

  const { leftDotPosition, rightDotPosition, setDotPositions } =
    useDotPositions();

  const handleMouseDown = (event) => {
    event.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event) => {
    const circleRect = circleRef.current.getBoundingClientRect();
    let newX = event.clientX - circleRect.left - circleRect.width / 2;
    let newY = event.clientY - circleRect.top - circleRect.height / 2;
    const distanceFromCenter = Math.sqrt(newX * newX + newY * newY);
    const maxRadius = circleRect.width / 2;

    const angleInRadians = Math.atan2(newY, newX);
    const angleInDegrees = angleInRadians * (180 / Math.PI);

    const pageX = circleRect.left + newX + dotRadius;
    const pageY = circleRect.top + newY + dotRadius;
    
    setDotPositions({
      leftDotPosition: { x: 0, y: 0 },
      rightDotPosition: { x: pageX.toFixed(2), y: pageY.toFixed(2) },
    });

    if (distanceFromCenter > maxRadius) {
      const angle = Math.atan2(newY, newX);
      newX = Math.cos(angle) * maxRadius;
      newY = Math.sin(angle) * maxRadius;
    } else {
      const dotAngle = Math.atan2(newY, newX);
      newX = Math.cos(dotAngle) * maxRadius;
      newY = Math.sin(dotAngle) * maxRadius;
    }


    setDotPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const dotRadius = 5;
  const circleRadius = 40;

  return (
    <>
      <div
        className="border rounded-full border-gray-700"
        ref={circleRef}
        onMouseDown={handleMouseDown}
        style={{
          width: `${circleRadius * 2}px`,
          height: `${circleRadius * 2}px`,
        }}
      >
        <div
          className="dot"
          style={{
            width: `${dotRadius * 2}px`,
            height: `${dotRadius * 2}px`,
            borderRadius: "50%",
            backgroundColor: "#434343",
            position: "relative",
            top: `${circleRadius - dotRadius + dotPosition.y}px`,
            left: `${circleRadius - dotRadius + dotPosition.x}px`,
          }}
        />
      </div>
      {/* <div>
        <p>X Position {dotPosition.x.toFixed(2)}</p>
        <p>Y Position {dotPosition.y.toFixed(2)}</p>
      </div> */}
    </>
  );
};

export default LipRight;
