import React, { useState, useCallback } from "react";

const EyeLids = (props) => {
  const [topSquarePosition, setTopSquarePosition] = useState(0);
  const [bottomSquarePosition, setBottomSquarePosition] = useState(140);

  const handleMouseMove = useCallback((event) => {
    const newPosition = event.clientY;
    if (newPosition >= 296 || newPosition <= 280) {
      setTopSquarePosition(newPosition);
      setBottomSquarePosition(140 - newPosition);
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseMove]);

  const handleMouseDown = useCallback(
    (event) => {
      event.preventDefault();
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [handleMouseMove, handleMouseUp]
  );

  const centerY = 70;
  const topHeight = topSquarePosition + 20;
  const bottomHeight = bottomSquarePosition + 20;
  const topTranslateY = centerY - topHeight;
  const bottomTranslateY = centerY + bottomHeight;

  return (
    <>
      <div className="flex items-center justify-center h-[140px] w-[140px] border border-gray-700 relative overflow-hidden rounded-full z-20">
        <div
          className="h-[100px] w-[220px] bg-[#130F40] absolute z-40"
          style={{
            height: `${topHeight}px`,
            transform: `translateY(${topTranslateY}px)`,
          }}
          onMouseDown={handleMouseDown}
        />

        {props.children}

        <div
          className="h-[100px] w-[220px] bg-[#130F40] absolute z-40"
          style={{
            height: `${bottomHeight}px`,
            transform: `translateY(${bottomTranslateY}px)`,
          }}
          onMouseDown={handleMouseDown}
        />
      </div>
    </>
  );
};

export default EyeLids;
