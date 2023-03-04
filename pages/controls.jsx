/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect, useState } from "react";
import EyeLeft from "../components/EyeLeft";
import EyeRight from "../components/EyeRight";
import Face from "../components/Face";
import EyeBrowRight from "../components/EyeBrowRight";
import EyeBrowLeft from "../components/EyeBrowLeft";
import Jaw from "../components/Jaw";
import LipRight from "../components/LipRight";

import EyeLids from "@/components/EyeLids";

import useDotPositions from "../store/useDotPositions";
import LipLeft from "../components/LipLeft";

function Controls() {
  const { leftDotPosition, rightDotPosition, leftLipAngle } = useDotPositions();
  console.log(
    rightDotPosition.x,
    rightDotPosition.y,
    leftDotPosition.x,
    leftDotPosition.y
  );

  return (
    <mainn>
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
                    {/* <EyeLids>
                    <EyeLeft />

                    </EyeLids>
                    <EyeLids>
                      <EyeRight />
                    </EyeLids> */}
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

                {/* <svg
                  width="434"
                  height="148"
                  viewBox="0 0 434 148"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1={rightDotPosition.x}
                    y1={rightDotPosition.y}
                    x2={leftDotPosition.x}
                    y2={leftDotPosition.y}
                    stroke="red"
                    strokeWidth="10"
                  />
                </svg> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </mainn>
  );
}

export default Controls;
