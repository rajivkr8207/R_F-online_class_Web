import React, { useState } from "react";
import { RiComputerLine } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import pic4 from "../../assets/4.webp";
import OurNewCourses from "./OurNewCourses";
const LearnAnywhere = () => {
  const [Classes, setClasses] = useState([
    {
      title: "Learn from Anywhere",
      icon: RiComputerLine,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, modi rerum sed similique repellendus est",
    },
    {
      title: "Courses taught by real-world experts",
      icon: IoMdPerson,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, modi rerum sed similique repellendus est",
    },
    {
      title: "Learn in demkand skill",
      icon: FaLightbulb,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, modi rerum sed similique repellendus est",
    },
  ]);
  return (
    <>
      <div className="bg-[#FFF6ED] my-3">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-3 lg:mx-10  sm:mx-auto py-16">
          {Classes.map((item, index) => {
            return (
              <div className="container">
                <span>
                  <item.icon className="w-[5rem] h-[5rem] text-[#fa744b]" />
                </span>
                <h1 className="text-lg font-bold">{item.title}</h1>
                <p> {item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container my-5 mx-auto flex justify-around flex-wrap">
        <div className="relative lg:w-[50%]">
          <img
            className=" rounded-t-3xl lg:w-[35rem] sm:w-[32rem] h-[34rem]"
            src={pic4}
            alt=""
            srcset=""
          />
          <div className="absolute bottom-28 right-0   flex flex-col gap-3 man_hidden_css">
            <div className="flex gap-2">
            <span className="text-sm font-bold text-purple-500 bg-yellow-200 px-3 py-1">UI</span>
            <span className="text-sm font-bold text-red-500 bg-orange-300 px-3 py-1">Design</span>
            <span className="text-sm font-bold text-blue-500 bg-blue-200 px-3 py-1">Ux</span>
            </div>
            <div className="flex gap-2">
            <span className="text-sm font-bold text-purple-500 bg-yellow-200 px-3 py-1">Visual</span>
            <span className="text-sm font-bold text-blue-500 bg-blue-200 px-3 py-1">Editing</span>
            </div>
            <div className="flex gap-2">
            <span className="text-sm font-bold text-purple-500 bg-blue-200 px-3 py-1">Branding</span>
            <span className="text-sm font-bold text-blue-500 bg-blue-200 px-3 py-1">3D</span>
            </div>
          </div>
        </div>

        <div className="lg:w-[50%] my-auto mx-auto pl-5">
          <h1 className="text-5xl font-bold leading-normal ">
            Access to Learn Anytime and Anywhere
          </h1>
          <p className="font-bold text-[#333333] mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, unde
            quidem modi tenetur facere soluta. Dolore blanditiis ratione quo
            voluptas.
          </p>
          <div className="flex flex-col gap-4 my-5">
            <div className="flex gap-2">
              <span className="flex font-bold text-[#333333]">
                <CiCircleCheck className="my-auto mr-3" />
                Safe screen Time
              </span>
              <span className="flex font-bold text-[#333333]">
                <CiCircleCheck className="my-auto mr-3" />
                Safe screen Time
              </span>
            </div>
            <div className="flex gap-2">
              <span className="flex font-bold text-[#333333]">
                <CiCircleCheck className="my-auto mr-3" />
                Safe screen Time
              </span>
              <span className="flex font-bold text-[#333333]">
                <CiCircleCheck className="my-auto mr-3" />
                Safe screen Time
              </span>
            </div>
          </div>
          <button className="text-white bg-[#fe7d55] px-6 py-3 font-bold text-base">
            Get started
          </button>
        </div>
      </div>


      
    </>
  );
};

export default LearnAnywhere;
