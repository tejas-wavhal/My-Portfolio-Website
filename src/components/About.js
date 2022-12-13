import React from 'react'
import { Link } from 'react-scroll'

const About = () => {
  let skills = [
    {
      "skill": "HTML",
      "percent": 75
    },
    {
      "skill": "CSS & SASS",
      "percent": 80
    },
    {
      "skill": "BOOTSTRAP",
      "percent": 75
    },
    {
      "skill": "TAILWIND CSS",
      "percent": 65
    },
    {
      "skill": "JAVASCRIPT",
      "percent": 70
    },
    {
      "skill": "REACT JS",
      "percent": 85
    },
    {
      "skill": "NODE JS & EXPRESS JS",
      "percent": 15
    },
    {
      "skill": "PYTHON",
      "percent": 30
    }
  ]
  return (
    <div className='dark:bg-gray-800 dark:text-white' id='About'>
      <div className='mx-5 md:mx-32 lg:mx-72'>
        <h1 className='text-center py-3 font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-500 text-4xl'>ABOUT</h1>
        <h2 className='text-center my-3 font-semibold text-2xl' style={{ fontFamily: 'kalam,cursive' }}>Let me introduce Myself</h2>
        <div className='md:flex md:items-center my-10 '>
          <img className="w-32 h-w-32 rounded-full mx-auto" src="https://i.postimg.cc/G2BXVQkP/Profile.jpg" alt="image_description" />
          <p className='my-3 text-center text-gray-700 md:mx-24 md:text-start dark:text-gray-300'>I am Tejas Wavhal from Pune. I code React js beautifully simple, and i love what i do.</p>
        </div>
        <div>
          <div className='md:flex md:space-x-11'>
            <div>
              <div className=''>
                <h1 className='text-center md:text-start font-bold'>PROFILE</h1>
                <p className='text-center md:text-start text-gray-700 dark:text-gray-300'>Excited to be at the development phase of my new carrier as a web Developer. And looking further to be Full Stack MERN Developer. I am ambitious, adventurous, curious person who always looking to learn new things</p>
              </div>
              <div className='my-10'>
                <h1 className='font-bold'>FULLNAME:</h1>
                <p className='text-gray-700 dark:text-gray-300'>Tejas Rajendra Wavhal</p>
              </div>
              <div className='my-10'>
                <h1 className='font-bold'>BIRTH DATE:</h1>
                <p className='text-gray-700 dark:text-gray-300'>September 16, 2000</p>
              </div>
              <div className='my-10'>
                <h1 className='font-bold'>EMAIL:</h1>
                <p className='text-gray-700 dark:text-gray-300'>tejas.wavhal01@gmail.com</p>
              </div>
            </div>
            <div className=''>
              <div className='my-5 md:my-0'>
                <h1 className='text-center font-bold md:text-start'>SKILLS</h1>
                <p className='text-gray-700 dark:text-gray-300'>Below are the Technical Skill i have as a Front-End Developer. HTML, CSS, SCSS, JAVASCRIPT, REACT JS, BOOTSTREAP, TAILWIND. </p>
              </div>
              <div className='mx-auto'>
                {skills.map((e, i) => {
                  return <div key={i} className='my-0' style={{}}>
                    <h1 className='text-center font-bold md:text-start mt-6'>{e.skill}</h1>
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div className="bg-gradient-to-br from-purple-700 to-pink-600 text-2xl' text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full " style={{ width: `${e.percent}%` }}> {e.percent}%</div>
                    </div>
                  </div>
                })}
              </div>
            </div>
          </div>
          <div className="py-10 w-full">
            <div className="flex justify-center ">
              <Link to="Contact" spy={true} smooth={true} offset={10} duration={500}>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Hire Me
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;