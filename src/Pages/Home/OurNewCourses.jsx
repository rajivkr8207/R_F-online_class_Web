import React, { useState } from "react";
import pic4 from "../../assets/4.webp";
const OurNewCourses = () => {
  const [NewCourses, setNewCourses] = useState([
    {
      img: pic4,
      title: "The Complete Copywriting and SEO Courses",
      lesson: "17 Lesson",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quibusdam",
      authorimg: pic4,
      authorname: "Albert Flores",
    },
    {
      img: pic4,
      title: "The Complete Digital Marketing Courses",
      lesson: "27 Lesson",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quibusdam",
      authorimg: pic4,
      authorname: "arlene mcCoy",
    },
    {
      img: pic4,
      title: "Build Web apps withg React & firebase",
      lesson: "17 Lesson",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quibusdam",
      authorimg: pic4,
      authorname: "floyd miles",
    },
  ]);
  return (
    <>
      <div className="bg-[#FFF6ED] py-5">
        <div className="container mx-auto">
          <h1 className="text-center text-3xl font-bold">Our New Courses</h1>
          <p className="text-center text-base font-semibold">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 mx-auto">
            {NewCourses.map((item, index) => {
              return (
                <div className="w-[22rem] bg-white flex flex-col mx-auto my-3">
                  <img src={item.img} className="w-full h-[18rem] " alt="" />
                  <div className="pl-2">
                    <h1 className="text-2xl font-bold capitalize">
                      {item.title}
                    </h1>
                    <span className="text-[#fe7d55] font-bold">
                      {item.lesson}
                    </span>
                    <p className="text-[#333333] font-bold my-3">
                      {item.description}
                    </p>

                    <span className="flex gap-3">
                      <img
                        className="w-[2rem] h-[2rem] my-3 rounded-full"
                        src={item.authorimg}
                        alt=""
                        srcset=""
                      />
                      <span className="my-auto font-semibold text-[#333333]">
                        by <span className="capitalize">{item.authorname}</span>
                      </span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center">
          
          <button className="px-5 py-3 my-3 text-white bg-[#fe7d55] font-semibold">
            View All Courses
          </button>
        </div>
      </div>





      <div className="container  my-5 mx-auto flex justify-between flex-wrap">

      <div className="lg:w-[50%] my-auto  mx-auto pl-4">
          <h1 className="text-5xl font-bold leading-normal ">
            Talented and Highly Qualified Tutors
          </h1>
          <p className="font-bold text-[#333333] mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, unde
            quidem modi tenetur facere soluta. Dolore blanditiis ratione quo
            voluptas.
          </p>
          <div className="flex flex-col gap-4 my-5">
            
          </div>
          <button className="text-white bg-[#fe7d55] px-6 py-3 font-bold text-base">
            Get started
          </button>
        </div>


        <div className="relative lg:w-[50%] my-3 mx-auto">
          <img
            className=" rounded-t-3xl lg:w-[35rem] sm:w-[32rem]  h-[34rem]"
            src={pic4}
            alt=""
            srcset=""
          />
          <div className="absolute top-24 left-[-4rem] flex flex-col gap-3 man_hidden_css">
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

        
      </div>


    </>
  );
};

export default OurNewCourses;
