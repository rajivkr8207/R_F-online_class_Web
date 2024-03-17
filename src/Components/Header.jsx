import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
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
    {
      url: "/teacher",
      text: "teacher",
    },
    {
      url: "/blog",
      text: "blog",
    },
  ]);

  const [Oppen, setOpen] = useState(false);
  return (
    <>
      <motion.div
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{
          duration: "0.5",
          delay: "1",
        }}
        className="flex w-[100vw] overflow-hidden lg:flex-row flex-col justify-between py-3 "
      >
        <div className="text-2xl font-bold">
          ECO<span className="text-[#fe7d55]">LABS</span>
        </div>
        <div
          onClick={() => setOpen(!Oppen)}
          className="text-4xl absolute top-3 right-5 md:hidden"
        >
          <ion-icon name={Oppen ? "close" : "menu"}></ion-icon>
          {/* <ion-icon name="menu-outline"></ion-icon>
        <ion-icon name="close-outline"></ion-icon> */}
        </div>

        <div
          className={`flex lg:flex-row flex-col mt-4 my-auto gap-5 mr-10 mobile_absolute transition-all duration-300 ease-in bg-white pb-5   ${
            Oppen ? "top-8 md:opacity-100" : "top-[-490px] md:opacity-100"
          }`}
        >
          <div className=" mx-auto">
            <ul className="flex  lg:flex-row flex-col  gap-10 my-auto">
              {Navurl.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      to={item.url}
                      activeClassName=" text-gray-900"
                      className={({isActive})=> `px-2 py-2  text-base font-medium capitalize cursor-pointer ${isActive ? 'text-[#fe7d55] ' : 'text-black '} rounded-md`}
                      
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
      </motion.div>
    </>
  );
};

export default Header;
