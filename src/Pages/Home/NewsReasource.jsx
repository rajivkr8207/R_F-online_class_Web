import React, { useState } from "react";
import team1 from "../../assets/team1.webp";
import team2 from "../../assets/team2.webp";
import team4 from "../../assets/team4.webp";
import { IoIosStar } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
const NewsReasource = () => {
  const [NewResourse, setNewResource] = useState([
    {
      img: team1,
      Date: "March-12-2024",
      time: "17 min",
      title: "The Complete Copywriting and SEO Courses",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quibusdam",
    },
    {
      img: team2,
      Date: "March-12-2024",
      time: "27 min",
      title: "The Complete Digital Marketing Courses",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quibusdam",
    },
    {
      img: team4,
      Date: "March-12-2024",
      time: "17 min",
      title: "Build Web apps withg React & firebase",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quibusdam",
    },
  ]);
  return (
    <>
      <div>
        <div className="bg-[#FFF6ED] py-5 my-5">
          <div className="container mx-auto">
            <h1 className="text-center text-5xl font-bold">News & Resource</h1>
            <p className="text-center text-base font-semibold">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 mx-auto">
              {NewResourse.map((item, index) => {
                return (
                  <div className="w-[10rem] bg-white flex flex-col mx-auto my-3 pb-5">
                    <img src={item.img} className="w-[10rem] h-[18rem]" alt="" />
                    <div className="py-2 pl-2">
                      <span className="text-[#fe7d55] text-sm font-semibold flex gap-3 capitalize">
                        <span>{item.Date}</span> <span>{item.time}</span>
                      </span>
                      <h1 className="text-2xl font-bold capitalize">
                        {item.title}
                      </h1>

                      <p className="text-[#333333] font-bold my-3 capitalize">
                        {item.description}
                      </p>

                      <NavLink className="flex my-auto gap-3 font-semibold text-[#333333]">
                        Readmore <FaLongArrowAltRight className="my-auto" />
                      </NavLink>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-center">
            <button className="px-5 py-3 my-3 text-white bg-[#fe7d55] font-semibold">
              View All Blog
            </button>
          </div>
        </div>
      </div>

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
            I found user interface course very relevant and helpful to clear the
            exam
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

        <div className="relative lg:w-[50%] my-3 mx-auto ">
          <img
            className=" rounded-t-3xl w-[25rem] h-[30rem] lg:pl-10"
            src={team4}
            alt=""
            srcset=""
          />
          <div className="absolute bottom-[-2rem]  left-[-1rem] flex flex-col gap-3 man_hidden_css w-[7rem] h-[7rem] rounded-3xl bg-[#fe7d55] "></div>
        </div>
      </div>
    </>
  );
};

export default NewsReasource;
