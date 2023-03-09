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
import SelectPort from "../components/SelectPort";
import Servo from "../components/Servo";


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
      <div className="container mx-auto h-screen flex items-center justify-center">
        <div className="w-1/2 ">
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
        <div className="w-1/3 h-full ">
          <div className=" mt-[75px] mx-[30px] p-[20px] border border-gray-700/30 rounded-[15px]">
            <div className="">
              <h1 className="text-[20px] font-semibold">Controls</h1>
            </div>
            <div className=" grid gap-[10px] rounded-[5px] mt-[10px] w-auto ">
              <div className="flex items-center justify-center space-x-[10px] border-b pb-[10px]">
                <p className="text-[14px] w-[130px]">Jaw</p>

                <input
                  className="h-[5px] border-none "
                  id="jaw-slider"
                  type="range"
                  min="0"
                  max="70"
                  value={jawValue}
                  onChange={jawChange}
                  style={{ width: "100%" }}
                />
                <span className="w-[100px] text-right text-[12px]">
                  {jawValue} / 70
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[30px] right-[30px]">
        <SelectPort />
        </div>
      </div>
    </main>
  );
}

export default Controls;
