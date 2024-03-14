import React, { useState } from 'react'
import { IoIosStar } from "react-icons/io";
import team1 from "../../assets/team1.webp";
import team2 from "../../assets/team2.webp";
import team3 from "../../assets/team3.webp";
import team4 from "../../assets/team4.webp";
const Ourteam = () => {
    const [Ourteam, setOurTeam] = useState([
        {
            img: team1,
            name: 'Ronald richards',
            level: 'senior vice president',
        },
        {
            img: team2,
            name: 'Ronald richards',
            level: 'senior vice president',
        },
        {
            img: team3,
            name: 'Ronald richards',
            level: 'senior vice president',
        },
        {
            img: team4,
            name: 'Ronald richards',
            level: 'senior vice president',
        },
        {
            img: team1,
            name: 'Ronald richards',
            level: 'senior vice president',
        },
        {
            img: team2,
            name: 'Ronald richards',
            level: 'senior vice president',
        }
    ])
  return (
    <>
    
            <div>
                <div className='flex flex-col gap-5 my-3 text-center'>
                    <h1 className='text-5xl font-bold'>Our Team</h1>
                    <p className='font-semibold text-[#333333]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>


                <div className='grid lg:grid-cols-3 sm:grid-cols-1 mx-auto'>
                        {
                            Ourteam.map((item, index) => {
                                return (
                                    <div className='w-[23rem] my-2 pb-3 bg-white  mx-auto'>
                                        <img
                                            className='w-full h-[20rem]'
                                            src={item.img}
                                            alt=''
                                        />
                                        <div className='py-2 pl-3 border-b border-x border-gray-400'>
                                        <span className='text-[#fe7d55] text-sm font-semibold flex gap-3 capitalize'>
                                            {item.name}
                                        </span>
                                        <p className='font-bold text-[#333333] mb-3 capitalize'>{item.level}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>







            <div>
            <div className="container  my-10 mx-auto flex justify-between flex-wrap">
        <div className="lg:w-[50%] my-auto  mx-auto pl-5">
          <h2 className="flex gap-1 text-3xl">
            <IoIosStar className="text-[#fe7d55]" />{" "}
            <IoIosStar className="text-[#fe7d55]" />
            <IoIosStar className="text-[#fe7d55]" />
            <IoIosStar className="text-[#fe7d55]" />
            <IoIosStar className="text-[#fe7d55]" />
          </h2>
          <h1 className="text-5xl font-medium leading-normal ">
            I found user interface course very relevant and helpful to clear the
            exam
          </h1>

          <div className="flex gap-4 my-5">
            <img
              className="w-[3rem] h-[3rem] rounded-full my-auto"
              src={team2}
              alt=""
              srcset=""
            />
            <div className="flex flex-col text-[#333333] my-auto text-sm font-bold leading-5">
              <span>Bessie Cooper</span>two month ago{" "}
            </div>
          </div>
        </div>

        <div className="relative lg:w-[50%] my-3 mx-auto">
          <img
            className=" rounded-t-3xl w-[30rem] h-[30rem] mx-auto"
            src={team4}
            alt=""
            srcset=""
          />
          <div className="absolute bottom-[0rem]  left-[1rem] flex flex-col gap-3 man_hidden_css w-[9rem] h-[9rem] rounded-[3rem] bg-[#fe7d55] "></div>
        </div>
      </div>
            </div>

    </>
  )
}

export default Ourteam