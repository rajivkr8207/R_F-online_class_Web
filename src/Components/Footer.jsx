import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [Navurl, setNavurl] = useState([
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
    {
      url: "/contact",
      text: "contact",
    },
  ]);
  return (
    <>
      <div className="bg-black text-white lg:px-9 py-5 md:px-3 sm:px-3">
        <div className="flex justify-between footerlink">
          <div className="flex flex-col gap-5">
            <div className="text-3xl font-semibold">ECO<span className="text-[#fe7d55]">LABS</span></div>
            <div className="mb-8">
              <ul className="flex footerlink gap-5  ">
                {Navurl.map((item, index) => {
                  return (
                    <li key={index} className="mx-auto">
                      <NavLink to={item.url} className={({isActive})=> `text-base font-medium capitalize cursor-pointer ${isActive ? 'text-[#fe7d55] ' : 'text-white '} rounded-md`}>
                        {item.text}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="flex footerlink">
            <ul className="flex gap-2 my-2 mx-auto">
              <li><NavLink><FaTwitter className="bg-white text-black p-2 rounded-full text-3xl" /></NavLink></li>
              <li><NavLink><FaFacebook className="bg-white text-black p-2 rounded-full text-3xl" /></NavLink></li>
              <li><NavLink><FaYoutube className="bg-white text-black p-2 rounded-full text-3xl" /></NavLink></li>
              <li><NavLink><FaInstagram className="bg-white text-black p-2 rounded-full text-3xl" /></NavLink></li>
              <li><NavLink><FaLinkedin className="bg-white text-black p-2 rounded-full text-3xl" /></NavLink></li>
            </ul>
          </div>

        </div>
        <hr />
        <div className="py-4"> 
          Designed by Rajiv kumar
        </div>
      </div>
    </>
  );
};

export default Footer;
