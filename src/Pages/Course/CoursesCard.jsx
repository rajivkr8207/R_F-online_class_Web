import React, { useState } from 'react'
import team1 from "../../assets/team1.webp";
import team2 from "../../assets/team2.webp";
import team3 from "../../assets/team3.webp";
import team4 from "../../assets/team4.webp";
const CoursesCard = () => {
    const [fullCourses, setFullCourses] = useState([
        {
            img: team1,
            title: 'the complete copywriting & seo course',
            lesson: '23 ',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt.',
            authorimg: team2,
            authorname: 'Albert flores'
        },
        {
            img: team2,
            title: 'The Complete digital marketing course',
            lesson: '23 ',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt.',
            authorimg: team2,
            authorname: 'Albert flores'
        },
        {
            img: team1,
            title: 'build webapp with react & firebase ',
            lesson: '23 ',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt.',
            authorimg: team2,
            authorname: 'Albert flores'
        },
        {
            img: team4,
            title: 'design thinking a hands on course on innovation ',
            lesson: '23 ',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt.',
            authorimg: team2,
            authorname: 'Albert flores'
        },
        {
            img: team1,
            title: 'user exprience design fundamental',
            lesson: '23 ',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt.',
            authorimg: team2,
            authorname: 'Albert flores'
        },
        {
            img: team2,
            title: 'learn figma - Ui/Ux design essential training',
            lesson: '23 ',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt.',
            authorimg: team2,
            authorname: 'Albert flores'
        },
        
    ])
  return (
    <>
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>

                {
                    fullCourses.map((item, index) => {
                        return (
                            <div className="w-[23rem] bg-white flex flex-col mx-auto my-3">
                                <img src={item.img} className="w-full h-[18rem] " alt="" />
                                <div className="pl-2 border border-gray-400">
                                    <h1 className="text-2xl font-bold capitalize">
                                        {item.title}
                                    </h1>
                                    <p className="text-[#fe7d55] font-semibold text-sm my-2">
                                        {item.lesson} LESSION
                                    </p>
                                    <p>{item.description}</p>
                                    <div>
                                        <span className="flex gap-3 my-3">
                                            <img src={item.authorimg} className="w-10 h-10 rounded-full" alt="" />
                                            <span className="text-[#fe7d55] text-sm font-semibold flex gap-3 capitalize">
                                                <span className='my-auto'>By {item.authorname}</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <div className='text-center my-5'>
            <button className='text-white font-semibold px-6 py-3 bg-[#fe7d55]'>Next</button>
        </div>

    </>
  )
}

export default CoursesCard