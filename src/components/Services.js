import React from 'react'
import { BsPencilSquare } from 'react-icons/bs'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { BsFillChatTextFill } from 'react-icons/bs'

const Services = () => {
  return (
    <div className='dark:bg-gray-800' id='Services'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className='text-center my-3 font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-500 text-4xl'>SERVICES</h1>
          <h2 className='mb-8 text-center text-black font-semibold text-2xl dark:text-white' style={{ fontFamily: 'kalam,cursive' }}>What can i do for You ?</h2>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-pink-500 mb-4 flex-shrink-0">
                <BsPencilSquare className='text-3xl' />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2 dark:text-white">WEB DESIGN</h2>
                <p className="leading-relaxed text-base dark:text-gray-300">I can make a Responsive Web Design using HTML, CSS, SCSS, BOOTSTRAP, TAILWIND CSS and REACT JS as per the requirements.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-pink-500 mb-4 flex-shrink-0">
                <HiOutlineDesktopComputer className='text-3xl' />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2 dark:text-white">WEB DEVELOPMENT</h2>
                <p className="leading-relaxed text-base dark:text-gray-300">I can make Front-End Website using REACT JS by using Functional-Based Components and REACT HOOKS and by using the other powers of REACT JS.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-pink-500 mb-4 flex-shrink-0">
                <BsFillChatTextFill className='text-3xl' />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2 dark:text-white">CONSULTANCY</h2>
                <p className="leading-relaxed text-base  dark:text-gray-300">I can guide and help you to become a successful Web Designer and Front-End Web Developer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services