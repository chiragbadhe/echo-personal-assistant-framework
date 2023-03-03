/* eslint-disable @next/next/no-img-element */
import { useState, useRef, Children } from "react";

function Tilt() {
  const [tiltAngle, setTiltAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(null);
  const imageRef = useRef(null);
  const maxAngle = 30;

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartY(event.clientY);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const newY = event.clientY;
      const deltaY = newY - startY;
      const newAngle = tiltAngle + deltaY;
      if (newAngle > maxAngle) {
        setTiltAngle(maxAngle);
      } else if (newAngle < -maxAngle) {
        setTiltAngle(-maxAngle);
      } else {
        setTiltAngle(newAngle);
      }
      setStartY(newY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "300px",
        height: "300px",
        border: "1px solid black",
        overflow: "hidden",
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <img
        src="https://via.placeholder.com/300x300.png"
        alt="Tilted Image"
        ref={imageRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) rotateX(${tiltAngle}deg)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "30px",
          height: "30px",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
        }}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
}

export default Tilt;
