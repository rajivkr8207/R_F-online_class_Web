import React from 'react'
import Ourstory from './Ourstory'
import CounterData from './CounterData'
import Ourteam from './Ourteam'
import EmailFooter from '../../Components/EmailFooter'
const About = () => {
  return (
    <>
      <div className='text-center my-5'>
        <h1 className='text-5xl font-bold'>About us</h1>
        <p className='text-[#333333] '>Learn more about the company and the team behind it.</p>
      </div>

      <Ourstory />
      <CounterData />
      <Ourteam />
      <EmailFooter />
      
    </>
  )
}

export default About