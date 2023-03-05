/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect, useState } from "react";
import storedValuesZustand from "../store/storedvalues";
import {
  EyeLeft,
  EyeRight,
  Face,
  EyeBrowRight,
  EyeBrowLeft,
  Jaw,
  LipRight,
  LipLeft,
} from "../components";

function Controls() {
  const { leftDotPosition, rightDotPosition, jawValue, setJawValue } =
    storedValuesZustand();

  useEffect(() => {
    const slider = document.getElementById("jaw-slider");
    if (slider) {
      slider.value = jawValue;
    }
  }, [jawValue]);

  const jawChange = (event) => {
    setJawValue(event.target.value);
  };

  const lipChange = (event) => {
    setJawValue(event.target.value);
  };

  console.log(jawValue);

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
                <div className="absolute">
                  <input
                  id="jaw-slider"
                    type="range"
                    min="0"
                    max="70"
                    value={jawValue.jawValue}
                    onChange={jawChange}
                    style={{ width: "100%" }}
                  />
                  <p>Value: {jawValue.jawValue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">

        </div>
      </div>
    </main>
  );
}

export default Controls;
