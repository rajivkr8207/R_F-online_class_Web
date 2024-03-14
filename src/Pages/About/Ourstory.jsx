import React from "react";
import team4 from "../../assets/team4.webp";
import team2 from "../../assets/team2.webp";
const Ourstory = () => {
  return (
    <>
      <div className="container  my-10 mx-auto flex justify-between flex-wrap">
        <div className="relative  lg:w-[50%] my-3 mx-auto">
          <img
            className=" rounded-t-3xl w-[30rem] h-[30rem]  lg:pl-10"
            src={team4}
            alt=""
            srcset=""
          />
          <div className="absolute bottom-[0rem]  right-[7rem] flex flex-col gap-3 man_hidden_css w-[10rem] h-[10rem] rounded-[3rem] bg-[#fe7d55] "></div>
        </div>

        <div className="lg:w-[50%]  my-auto  mx-auto">
          <h1 className="text-6xl font-bold leading-normal ">
            Our Story
          </h1>
          <p className="my-2 font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur error quia impedit, soluta culpa quibusdam?</p>
          <p className="my-2 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit eveniet, non commodi recusandae aperiam ducimus, natus porro illo ipsa minima! Aliquam, reiciendis odio. Dolorum asperiores deserunt perferendis odio voluptate?</p>
        </div>
      </div>


      <div className="container  my-10 mx-auto flex justify-between flex-wrap">

      <div className="lg:w-[50%]  my-auto  mx-auto">
          <h1 className="text-6xl font-bold leading-normal ">
            who we are
          </h1>
          <p className="my-2 font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur error quia impedit, soluta culpa quibusdam?</p>
          <p className="my-2 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime, labore animi eum tenetur officia beatae ipsa necessitatibus dolor distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit eveniet, non commodi recusandae aperiam ducimus, natus porro illo ipsa minima! Aliquam, reiciendis odio. Dolorum asperiores deserunt perferendis odio voluptate?</p>
        </div>


        <div className="relative  lg:w-[50%] my-3 mx-auto ">
          <img
            className=" rounded-t-3xl w-[30rem]  h-[35rem] lg:pl-24"
            src={team2}
            alt=""
            srcset=""
          />
          <div className="absolute bottom-[0rem] left-[2rem] flex flex-col gap-3 man_hidden_css w-[10rem] h-[10rem] rounded-[3rem] bg-[#fe7d55] "></div>
        </div>

        
      </div>

    </>
  );
};

export default Ourstory;
