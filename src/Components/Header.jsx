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
    // {
    //   url: "/blog",
    //   text: "blog",
    // }
  ])
 
  return (
    <>
      <div className="flex justify-between px-14 py-3 ">
        <div>Logo</div>

        <div className="flex gap-7 ">
          <div><ul className="flex gap-5">
            {
              Navurl.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      to={item.url}
                      activeClassName=" text-gray-900"
                      className="px-3 py-2 rounded-md text-base font-medium capitalize"
                    >
                      {item.text}
                    </NavLink>
                  </li>
                )
              })
            }
            </ul></div>

          {/* <div>
            <NavLink
              to="/contact"
              activeClassName="bg-gray-200 text-gray-900"
              className="px-3 py-2 text-sm font-medium capitalize border border-black"
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
