import React, { useState } from "react";
import team1 from "../../assets/team1.webp";
import team2 from "../../assets/team2.webp";
import team4 from "../../assets/team4.webp";

const ExploreTeacher = () => {
  const [Teacher, setTeacher] = useState([
    {
      img: team1,
      name: "Bessie Cooper",
      address: "Colorado, USA",
    },
    {
      img: team2,
      name: "leslie Alexander",
      address: "Dublin, ireland",
    },
    {
      img: team4,
      name: "jacob jones",
      address: "folirida, USA",
    },
  ]);
  return (
    <>
      <div>
        <div className="my-5">
          <h1 className="text-center text-5xl font-bold">Explore Teachers</h1>{" "}
          <p className="text-center font-semibold text-[#333333] my-3">
            our teacher are experts to share their experience with you
          </p>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 mx-auto">
          {Teacher.map((item, index) => {
            return (
              <div className="w-[23rem] my-2 pb-3 bg-white  mx-auto">
                <img
                  className="w-full h-[20rem]"
                  src={item.img}
                  alt=""
                  srcset=""
                />
                <div className="pl-2 border-b border-x border-[#696969]">
                  <h4 className="text-lg font-bold">{item.name}</h4>
                  <p className="text-base font-medium text-[#333333]">
                    {item.address}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center my-5">
            <button className="bg-[#fe7d55] text-white font-medium px-8 py-3">View All Teacher</button>
        </div>
      </div>
    </>
  );
};

export default ExploreTeacher;
