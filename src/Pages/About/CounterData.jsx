import React, { useState } from "react";

const CounterData = () => {
  const [Countdata, setCountData] = useState([
    {
      value: "12k",
      name: "student worldwide",
    },
    {
      value: "1.4k",
      name: "student Community",
    },
    {
      value: "200",
      name: "mentors & teachers",
    },
    {
      value: "50+",
      name: "online courses",
    },
  ]);
  return (
    <>
      <div className="bg-[#FFF6ED] my-6">
        <div className="grid lg:grid-cols-4 col-span-1 mx-auto py-10">
          {Countdata.map((item, index) => {
            return (
              <div className="flex items-center  lg:border-r border-[#333333] my-4 mx-auto">
                <div className=" text-center flex flex-col gap-3 px-3">
                  <p className="text-7xl font-semibold "> {item.value}</p>
                  <h1 className="text-lg font-bold text-[#333333] capitalize">
                    {item.name}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CounterData;
