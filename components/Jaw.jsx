import React, { useState, useRef, useEffect } from "react";
import storedValuesZustand from "../store/storedvalues";

const Jaw = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const squareRef = useRef(null);

  const { jawValue, setJawValue } = storedValuesZustand();

  useEffect(() => {
    setPosition((prev) => ({ ...prev, y: jawValue }));
  }, [jawValue]);

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
      setJawValue(newYClamped);
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
