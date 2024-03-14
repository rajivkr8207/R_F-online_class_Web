import React from "react";

const EmailFooter = () => {
  return (
    <>
      <div className="my-5 py-10   container mx-auto bg-[#FFD05C] flex  gap-4 place-content-center flex-col items-center">
        <h1 className="text-5xl font-bold">Still think about it?</h1>
        <p>sign up for our newsletter and get 10% off your next course.</p>
        <div className="flex gap-2 my-3">
          <input
            type="text"
            className="py-3 px-2 w-56 text-sm outline-none"
            placeholder="Enter your email here"
            name=""
            id=""
          />
          <button className="px-5 py-2 text-sm bg-black text-white">
            Sign up Now
          </button>
        </div>
      </div>
    </>
  );
};

export default EmailFooter;
