import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [Navurl, setNavUrl] = useState([
    {
      url: "/",
      text: "home",
    },
    {
      url: "/about",
      text: "about",
    },
    {
      url: "/course",
      text: "courses",
    },
    // {
    //   url: "/teacher",
    //   text: "teacher",
    // },
    {
      url: "/blog",
      text: "blog",
    },
  ]);

  return (
    <>
      <div className="flex lg:flex-row flex-col justify-between py-3 ">
        {/* <div className="lg:ml-10">Logo</div> */}
        <div></div>
        <div className="flex  gap-7 lg:mx-0 lg:mt-0 mt-4 my-auto mx-auto">
          <div>
            <ul className="flex  gap-5 my-auto">
              {Navurl.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      to={item.url}
                      activeClassName=" text-gray-900"
                      className="px-3 py-2 rounded-md text-base font-medium capitalize cursor-pointer"
                    >
                      {item.text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* <div>
            <NavLink
              to="/contact"
              activeClassName="bg-gray-200 text-gray-900"
              className="px-3 py-2 text-sm font-medium capitalize border  border-black"
            >
              Contact
            </NavLink>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
