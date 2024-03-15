import React, { useState } from "react";
import team1 from "../../assets/team1.webp";
import team2 from "../../assets/team2.webp";
import team3 from "../../assets/team3.webp";
import team4 from "../../assets/team4.webp";
import { FaArrowRightLong } from "react-icons/fa6";
const CardBlog = () => {
  const [Cards, setCards] = useState([
    {
      img: team1,
      date: "Octber 15 2023",
      time: "08 min",
      title: "tech certification that matter most for the future",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: team1,
      date: "Octber 15 2023",
      time: "08 min",
      title: "tech certification that matter most for the future",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: team1,
      date: "Octber 15 2023",
      time: "08 min",
      title: "tech certification that matter most for the future",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: team1,
      date: "Octber 15 2023",
      time: "08 min",
      title: "tech certification that matter most for the future",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: team1,
      date: "Octber 15 2023",
      time: "08 min",
      title: "tech certification that matter most for the future",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: team1,
      date: "Octber 15 2023",
      time: "08 min",
      title: "tech certification that matter most for the future",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ]);
  return (
    <>
      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 sm:grid-cols-1">
          {Cards.map((item, index) => {
            return (
              <div className="lg:w-[23rem] sm:w-[18rem] bg-white flex flex-col mx-auto my-3">
                <img src={item.img} className="w-full h-[18rem] " alt="" />
                <div className="border-x border-b border-[#333333] px-3 py-3">
                  <p className="font-semibold text-[#fe7d55] text-base">
                    {item.date} . {item.time}
                  </p>
                  <h1 className="my-3 text-2xl font-bold capitalize">
                    {item.title}
                  </h1>
                  <p className="text-sm capitalize font-bold text-[#333333]">
                    {item.description}
                  </p>
                  <span className="flex gap-3 py-auto font-semibold my-3">
                    Read more <FaArrowRightLong className="my-auto" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>


        <div className="mx-auto my-5 text-center">
            <button className="cursor-pointer text-white font-semibold px-6 py-3 bg-[#fe7d55]">Next</button>
        </div>
      </div>
    </>
  );
};

export default CardBlog;
