import React, { useState } from "react";
import pic1 from "../../assets/1.webp";
import pic2 from "../../assets/2.webp";
import pic3 from "../../assets/3.webp";
import pic4 from "../../assets/4.webp";
import pic5 from "../../assets/5.webp";
import LearnAnywhere from "./LearnAnywhere";
import OurNewCourses from "./OurNewCourses";
import ExploreTeacher from "./ExploreTeacher";
import EmailFooter from "../../Components/EmailFooter";
import NewsReasource from "./NewsReasource";

const Home = () => {
  const [companies, setCompanies] = useState([
    {
      url: "",
      name: "Hourglass",
    },
    {
      url: "",
      name: "Command+R",
    },
    {
      url: "",
      name: "Capsule",
    },
    {
      url: "",
      name: "LightBlog",
    },
    {
      url: "",
      name: "Spherule",
    },
    {
      url: "",
      name: "Luminous",
    },
  ]);
  return (
    <>
      <div className="container mx-auto  lg:h-screen flex items-center ">
        <div className="flex justify-evenly flex-wrap pl-3">
          <div className="lg:w-[50%]  sm:my-3   flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h1 className="text-7xl font-bold">Explore Live </h1>
              <h1 className="text-7xl font-bold ">Creative Classes</h1>
            </div>
            <p className="text-[#333333] font-bold text-base">
              Choose over 2000+ courses on topics like user interface design,
              graphic design, font-end development, and much more....
            </p>

            <div className="flex gap-2">
              <button className="px-5 py-3 text-white font-semibold bg-[#fe7d55]">
                Start Learning{" "}
              </button>
              <button className="px-3 py-3 border font-bold text-sm border-black">
                Try Demo
              </button>
            </div>
          </div>

          <div className="lg:w-[50%] sm:w-[90%]">
            <div className="  mx-auto flex flex-col gap-5 my-3 ">
              <div className="flex gap-5 mx-auto">
                <div className="relative">
                  <div className="absolute top-2  w-[1rem] h-[1rem] rounded-full bg-[#fe7d55]"></div>
                  <img
                    className="w-[13rem] rounded-full h-[12rem]"
                    src={pic1}
                    alt=""
                    srcset=""
                  />
                  <div className="absolute w-[0.8rem] h-[0.8rem] rounded-full bg-[#fe7d55] right-4 bottom-4"></div>
                </div>
                <div>
                  <img
                    className="w-[12rem] rounded-t-3xl h-[12rem]"
                    src={pic2}
                    alt=""
                    srcset=""
                  />
                </div>
              </div>

              <div className="flex gap-5 mx-auto">
                <div className="relative">
                  <img
                    className="w-[13rem] h-[12rem]"
                    src={pic3}
                    alt=""
                    srcset=""
                  />
                  <div className="absolute w-[5rem] h-[5rem] rounded-full  bg-[#FFD05C] left-0 ml-[-2rem] mb-[-2rem] bottom-0"></div>
                </div>
                <div className="relative">
                  <div className="absolute right-2  w-[1rem] h-[1rem] rounded-full bg-[#fe7d55]"></div>
                  <img
                    className="w-[12rem] rounded-r-full h-[12rem]"
                    src={pic5}
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-3">
        <div>
          <h4 className="text-center font-bold text-[#333333]">
            Trusted by leading serval unicorn companies
          </h4>
        </div>
        <div className="flex justify-evenly flex-wrap">
          {companies.map((item) => {
            return (
              <span className="text-2xl font-bold text-[#333333]">
                {item.name}
              </span>
            );
          })}
        </div>
      </div>

      <LearnAnywhere />
      <OurNewCourses />
      <ExploreTeacher />
      <EmailFooter />
      <NewsReasource />
    </>
  );
};

export default Home;
