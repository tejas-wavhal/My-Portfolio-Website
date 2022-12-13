import React from 'react'

const Contact = () => {
  return (
    <div className='pb-5 bg-gradient-to-br from-purple-300 to-pink-200  dark:bg-gradient-to-br dark:from-purple-900 dark:to-pink-900' id='Contact'>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className='text-center my-3 font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-500 text-4xl dark:from-purple-500 dark:to-pink-400 '>CONTACT ME</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-300" style={{ fontFamily: 'kalam,cursive' }}>I make assure that your information is safe</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="">
              <form action="https://formspree.io/f/myyvrnvy" method='POST' className='flex flex-wrap -m-2'>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600 dark:text-gray-300">Name</label>
                    <input type="name" name="Name" autoComplete='off' required className="w-full bg-gray-500 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-gray-300">Email</label>
                    <input type="email" name="Email" autoComplete='off' required className="w-full bg-gray-500 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600 dark:text-gray-300">Message</label>
                    <textarea name="Message" autoComplete='off' required className="w-full bg-gray-500 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  </div>
                </div>
                <div className="py-10 w-full">
                  <div className="flex justify-center ">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" type='submit' value="send">
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Send Message
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact