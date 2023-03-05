/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect, useState } from "react";
import useDotPositions from "../store/useDotPositions";
import {
  EyeLeft,
  EyeRight,
  Face,
  EyeBrowRight,
  EyeBrowLeft,
  Jaw,
  LipRight,
  EyeLids,
  LipLeft,
  Tilt,
  Twist,
  Slider,
} from "../components";

function Controls() {
  const { leftDotPosition, rightDotPosition, leftLipAngle, rightLipAngle, setLeftLip, setLeftLipAngle } =
    useDotPositions();

  console.log(leftLipAngle, rightLipAngle);

  const distance = Math.sqrt(
    (leftDotPosition.x - rightDotPosition.x) ** 2 +
      (leftDotPosition.y - rightDotPosition.y) ** 2
  );

  const handleChange = (event) => {
    setLeftLipAngle({ leftLipAngle: event.target.value });
  };



  return (
    <main>
      <div className="container mx-auto flex items-center justify-center">
        <div className="w-1/2 h-screen">
          <p></p>
          <div className="flex items-center justify-center h-full">
            <div className="relative -mt-[50px]">
              <Face />
              <div className="flex space-x-[120px] absolute top-0 mt-[100px] flex ">
                <div className="relative">
                  <div className="space-x-[270px] absolute -mt-[60px] ml-[27px]">
                    <EyeBrowLeft
                      centerX={120}
                      startY={20}
                      endY={30}
                      initialAngle={0}
                    />
                    <EyeBrowRight
                      centerX={50}
                      startY={20}
                      endY={30}
                      initialAngle={0}
                    />
                  </div>
                  <div className="flex absolute space-x-[120px] ml-[65px]">
                    <EyeLeft />
                    <EyeRight />
                  </div>
                </div>
                <div className=" absolute mt-[390px] pl-[12.5px]">
                  <Jaw />
                </div>
              </div>

              <div className="-mt-[123px] relative flex space-x-[178px] ml-[90px] z-30 ">
                <LipRight />
                <LipLeft />

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Controls;
