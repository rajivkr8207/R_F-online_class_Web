import React from "react";
import CoursesCard from "./CoursesCard";
import EmailFooter from "../../Components/EmailFooter";

const Course = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between flex-wrap my-3 ">
          <div className="flex flex-col gap-3 pl-3">
            <h1 className="text-5xl font-bold ">Browse Courses</h1>
            <p className="text-[#333333] font-semibold">
              Along with profestional, we are up with exclusive school courses
              as well.
            </p>
          </div>

          <div className="mx-auto lg:mr-3">
            <div className="my-4 ">
              <select
                name="courses"
                id=""
                className="text-center text-lg font-semibold border border-black px-1 py-2 "
              >
                <option value="web dev">web dev</option>
                <option value="Comnication">Comnication</option>
                <option value="Soft skill">Soft skill</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <CoursesCard />

      <EmailFooter />
    </>
  );
};

export default Course;
