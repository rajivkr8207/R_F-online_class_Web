import React, { useEffect } from 'react'
import {preLoaderAnim} from '../animations/index'
const Preloader = () => {
    useEffect(() => {
      preLoaderAnim()
    
      
    }, []);
    
  return (
    <div className='h-screen w-full bg-black grid place-content-center text-white'>
        <div className='flex gap-2 font-semibold text-lg'><span>wait,</span>
        <span>Coder,</span>
        <span>Loading....</span></div>
    </div>
  )
}

export default Preloader