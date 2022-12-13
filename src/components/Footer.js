import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
  const navigation = [
    { name: 'Home', to: 'Home', current: true },
    { name: 'About', to: 'About', current: false },
    { name: 'Portfolio', to: 'Portfolio', current: false },
    { name: 'Services', to: 'Services', current: false },
    { name: 'Contact', to: 'Contact', current: false },
  ]
  return (
    <>
      <footer className="p-4  shadow md:px-6 md:py-8 bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
          <img src="https://i.postimg.cc/Z0tnHB0J/Picsart-22-12-04-18-51-21-952.jpg" className='h-9  rounded-xl px-2' alt="logo" />
            <span className='text-center my-3 font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-500 text-2xl'>Tejas Wavhal</span>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0 text-gray-400">
            {
              navigation.map((e, i) => {
                return <li key={i}>
                  <Link to={e.to} className="mr-4 hover:underline md:mr-6 " spy={true} smooth={true} offset={10} duration={500}>{e.name}  </Link>
                </li>
              })
            }
          </ul>
        </div>
        <hr className="my-6 text-center border-gray-700 lg:my-8" />
        <span className="block text-sm text-center text-gray-400">© 2022 <p className="">https://tejaswavhal.netlify.app™ . All Rights Reserved.</p>
        </span>
      </footer>
    </>
  )
}

export default Footer