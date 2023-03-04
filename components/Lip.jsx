import React, { useRef, useState, useEffect } from 'react';

function Lip() {
  const startPointRef = useRef(null);
  const endPointRef = useRef(null);
  const [startPoint, setStartPoint] = useState({ x: 50, y: 50 });
  const [endPoint, setEndPoint] = useState({ x: 150, y: 150 });

  const handleMouseMove = (e) => {
    if (e.target === startPointRef.current) {
      setStartPoint({ x: e.clientX, y: e.clientY });
    } else if (e.target === endPointRef.current) {
      setEndPoint({ x: e.clientX, y: e.clientY });
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  });

  return (
    <svg width="200" height="200">
      <line
        x1={startPoint.x}
        y1={startPoint.y}
        x2={endPoint.x}
        y2={endPoint.y}
        stroke="black"
        strokeWidth="2"
      />
      <circle
        ref={startPointRef}
        cx={startPoint.x}
        cy={startPoint.y}
        r="5"
        fill="red"
      />
      <circle
        ref={endPointRef}
        cx={endPoint.x}
        cy={endPoint.y}
        r="5"
        fill="blue"
      />
    </svg>
  );
}

export default Lip;
