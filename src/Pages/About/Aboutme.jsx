import React from 'react'
import { IoIosStar } from "react-icons/io";
import team1 from "../../assets/team1.webp";
import team2 from "../../assets/team2.webp";
import team3 from "../../assets/team3.webp";
import team4 from "../../assets/team4.webp";
const Aboutme = () => {
  return (
    <>
        <div>
        <div className="container  my-10 mx-auto flex justify-between flex-wrap">
          <div className="lg:w-[50%] my-auto  mx-auto pl-5">
            <h2 className="flex gap-1 text-3xl">
              <IoIosStar className="text-[#fe7d55]" />{" "}
              <IoIosStar className="text-[#fe7d55]" />
              <IoIosStar className="text-[#fe7d55]" />
              <IoIosStar className="text-[#fe7d55]" />
              <IoIosStar className="text-[#fe7d55]" />
            </h2>
            <h1 className="text-5xl font-medium leading-normal ">
              I found user interface course very relevant and helpful to clear
              the exam
            </h1>

            <div className="flex gap-4 my-5">
              <img
                className="w-[3rem] h-[3rem] rounded-full my-auto"
                src={team2}
                alt=""
                srcset=""
              />
              <div className="flex flex-col text-[#333333] my-auto text-sm font-bold leading-5">
                <span>Bessie Cooper</span>two month ago{" "}
              </div>
            </div>
          </div>

          <div className="relative lg:w-[50%] my-3 mx-auto">
            <img
              className=" rounded-t-3xl w-[30rem] h-[30rem] mx-auto"
              src={team4}
              alt=""
              srcset=""
            />
            <div className="absolute bottom-[0rem]  left-[1rem] flex flex-col gap-3 man_hidden_css w-[9rem] h-[9rem] rounded-[3rem] bg-[#fe7d55] "></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutme