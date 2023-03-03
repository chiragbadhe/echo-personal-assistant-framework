/* eslint-disable @next/next/no-img-element */
import { useState, useRef } from 'react';

function Twist() {
  const [tiltAngle, setTiltAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const imageRef = useRef(null);
  const maxAngle = 30;
  
  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX);
  };
  
  const handleMouseMove = (event) => {
    if (isDragging) {
      const newX = event.clientX;
      const deltaX = newX - startX;
      let newAngle = tiltAngle + deltaX;
      if (newAngle > maxAngle) {
        newAngle = maxAngle;
      } else if (newAngle < -maxAngle) {
        newAngle = -maxAngle;
      }
      setTiltAngle(newAngle);
      setStartX(newX);
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  return (
    <div 
      style={{
        position: 'relative',
        width: '300px',
        height: '300px',
        border: '1px solid black',
        overflow: 'hidden'
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <img 
        src="https://via.placeholder.com/300x300.png" 
        alt="Twisted Image" 
        ref={imageRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) rotateY(${tiltAngle}deg)`
        }}
      />
      <button 
        onClick={() => setTiltAngle(0)}
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      >
        Reset
      </button>
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '10px',
          height: '10px',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
}

export default Twist;
