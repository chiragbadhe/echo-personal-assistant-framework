import React, { useState, useRef } from "react";
import { Board } from "firmata-io";

const Jaw = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const squareRef = useRef(null);

//   const board = new Board("/dev/cu.usbserial-11210"); // Replace with the appropriate serial port for your Arduino Nano
//   board.on("ready", () => {
//     // Code to control servo goes here
//   });

  const handleMouseDown = (event) => {
    setIsDragging(true);
  };

  const handleMouseUp = (event) => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const squareRect = squareRef.current.getBoundingClientRect();
      const newY = event.clientY - containerRect.top - squareRect.height / 2;
      const maxY = containerRect.height - squareRect.height;
      const newYClamped = Math.min(Math.max(newY, 0), maxY);
      setPosition((prev) => ({ ...prev, y: newYClamped }));

      const angle = Math.floor((newYClamped / maxY) * 180);
    //   board.servoWrite(9, angle);
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100px",
        height: "170px",
      }}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div
        ref={squareRef}
        style={{
          position: "absolute",
          top: `${position.y}px`,
          left: "0",
          width: "100px",
          height: "100px",
          cursor: "grab",
        }}
        onMouseDown={handleMouseDown}
      >
        {" "}
        <svg
          width="257"
          height="109"
          viewBox="0 0 257 109"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H257V84.7949L231 108.795H30L0 84.7949V0Z"
            fill="#232323"
          />
        </svg>
      </div>
    </div>
  );
};

export default Jaw;