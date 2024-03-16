import React from 'react'
import Ourstory from './Ourstory'
import CounterData from './CounterData'
import Ourteam from './Ourteam'
import EmailFooter from '../../Components/EmailFooter'
import Aboutme from './Aboutme'
const About = () => {
  return (
    <>
      <div className='text-center my-5'>
        <h1 className='text-5xl font-bold'>About us</h1>
        <p className='text-[#333333] '>Learn more about the company and the team behind it.</p>
      </div>

      <Ourstory />
      <CounterData />
      <div className="flex flex-col gap-5 my-3 text-center">
          <h1 className="text-5xl font-bold">Our Team</h1>
          <p className="font-semibold text-[#333333]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      <Ourteam />
      <Aboutme/>
      <EmailFooter />
      
    </>
  )
}

export default About