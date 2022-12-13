import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle, AiFillFacebook, AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Introduction = () => {
    return (
        <>
            <div className='p-10 text-center bg-gradient-to-br from-purple-500 to-pink-500 dark:bg-gradient-to-br dark:from-purple-700  dark:to-pink-500 ' style={{ height: '700px' }} id='Home'>
                <h1 className='font-semibold dark:text-transparent '>Enable Dark Mode For Better Experience</h1>
                <h2 className="mt-24 text-xl font-extrabold text-gray-800 dark:text-gray-900  md:text-4xl lg:text-5xl " style={{ fontFamily: 'Contrail One, cursive' }}>Hello,</h2>
                <h3 className='mb-4 text-5xl font-extrabold text-gray-800 dark:text-gray-900  md:text-7xl lg:text-7xl underline underline-offset-3 decoration-8 decoration-blue-800 ' style={{ fontFamily: 'Contrail One, cursive' }}> I'm <br /> Tejas Wavhal</h3>
                <p className="mb-6 text-2xl font-bold text-gray-800 dark:text-gray-900  lg:text-xl sm:px-16 xl:px-48 " style={{ fontFamily: 'kalam,cursive' }} >I am Frontend-end React js Developer</p>

                <Link to="About" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-gray-700 dark:bg-gray-800 rounded-lg hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 cursor-pointer" spy={true} smooth={true} offset={10} duration={500}>
                    More About me
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>

                <div className="flex text-3xl space-x-9 justify-center mt-12 ">
                    <a href=" https://www.instagram.com/tejas_7514/?__coig_restricted=1" target="_blank">< AiFillInstagram className='hover:text-blue-900' /></a>
                    <a href="https://twitter.com/WavhalTejas" target="_blank">< AiFillTwitterCircle className='hover:text-blue-900' /></a>
                    <a href="https://www.facebook.com/tejas.wavhal.9" target="_blank">< AiFillFacebook className='hover:text-blue-900' /></a>
                    <a href="https://github.com/tejas-wavhal" target="_blank">< AiFillGithub className='hover:text-blue-900' /></a>
                </div>
            </div>
        </>
    )
}
export default Introduction