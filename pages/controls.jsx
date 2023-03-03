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

function Controls() {
  const { leftDotPosition, rightDotPosition } = useDotPositions();

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

              <div className="-mt-[123px] flex space-x-[178px] ml-[90px] z-30 absolute">
                <LipRight />
                <LipRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </mainn>
  );
}

export default Controls;
