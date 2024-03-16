import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
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

  const [Oppen, setOpen] = useState(false)
  return (
    <>
      <div className="flex w-[100vw] overflow-hidden lg:flex-row flex-col justify-between py-3 ">
        <div className="lg:ml-10">Logo</div>
        <div onClick={()=>setOpen(!Oppen)} className="text-4xl absolute top-3 right-5 md:hidden">
        <ion-icon name={Oppen ? 'close': 'menu'}></ion-icon>
        {/* <ion-icon name="menu-outline"></ion-icon>
        <ion-icon name="close-outline"></ion-icon> */}
        </div>

        <div className={`flex lg:flex-row flex-col mt-4 my-auto gap-5 mr-10 mobile_absolute transition-all duration-300 ease-in bg-white pb-5   ${Oppen ? 'top-10 md:opacity-100': 'top-[-490px] md:opacity-100'}`}>
          <div className=" mx-auto">
            <ul className="flex  lg:flex-row flex-col  gap-10 my-auto">
              {Navurl.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      to={item.url}
                      activeClassName=" text-gray-900"
                      className=" py-2 rounded-md text-base font-medium capitalize cursor-pointer"
                    >
                      {item.text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mx-auto">
            <NavLink
              to="/contact"
              activeClassName="bg-gray-200 text-gray-900"
              className="px-3 py-2 text-sm font-medium capitalize border  border-black"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
