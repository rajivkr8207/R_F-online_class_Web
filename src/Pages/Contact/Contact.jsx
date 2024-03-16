import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='text-center'>
        <h1 className='text-5xl font-bold'>Contact us</h1>
        <p className='text-[#333333] '>Learn more about the company and the team behind it.</p>
      </div>

      <div className=" py-12">
  <div className="max-w-lg mx-auto bg-white rounded-lg border shadow-md p-8">
    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
    
      <div className="mb-4">
        <label for="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" className="mt-1 p-3 border outline-none block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
      </div>
      <div className="mb-4">
        <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" className="mt-1 p-3 border outline-none block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
      </div>
      <div className="mb-6">
        <label for="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea id="message" name="message" rows="4" placeholder="Enter your message" className="mt-1 p-3 border outline-none block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
      </div>
      <div className="text-center">
        <button type="submit" className="inline-block bg-[#fe7d55] text-white px-4 py-2 rounded-md hover:bg-[#fe6955] transition duration-300">Submit</button>
      </div>
    
  </div>
</div>

    </>
  )
}

export default Contact