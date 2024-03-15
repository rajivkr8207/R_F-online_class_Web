import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import EmailFooter from "../../Components/EmailFooter";
import CardBlog from "./CardBlog";
const Blog = () => {
  return (
    <>
      <div className="my-5">
        <div className="my-16 text-center">
          <h1 className="capitalize text-5xl font-bold">News & Resource</h1>
          <p className="text-[#333333] font-semibold my-5">
            the latest industry news, interviews, texhnologies, and resource
          </p>
        </div>

        <div>
          <div className='grid  lg:justify-start lg:place-content-end sm:place-content-center  bottom-0  w-full h-[100vh] bg-[url("https://images.pexels.com/photos/6415/apple-desk-office-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-cover bg-center bg-no-repeat'>
            <div className=" lg:w-[30rem] h-auto my-auto mx-auto  py-auto bg-white lg:mb-8 lg:ml-8">
              <div className="my-auto mx-5">
                <h1 className="capitalize lg:text-4xl sm:text-2xl font-bold">
                  CSS Font Size: how to use css font size
                </h1>
                <p className="text-[#fe7d55] font-semibold my-2">
                  November 8, 2022 . 10MIN
                </p>

                <button className="cursor-pointer flex my-3  py-auto gap-3 ">
                  Read More <FaArrowRightLong className="my-auto py-auto" />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardBlog />
      <EmailFooter />
    </>
  );
};

export default Blog;
