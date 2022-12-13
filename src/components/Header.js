// import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Toggle from './toogle'
import { Link } from 'react-scroll'

const navigation = [
  { name: 'Home', to: 'Home', current: true },
  { name: 'About', to: 'About', current: false },
  { name: 'Portfolio', to: 'Portfolio', current: false },
  { name: 'Services', to: 'Services', current: false },
  { name: 'Contact', to: 'Contact', current: false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center sm:items-stretch  justify-evenly lg:justify-start" >
                <div className="flex flex-shrink-0 items-center">
                  <img src="https://i.postimg.cc/Z0tnHB0J/Picsart-22-12-04-18-51-21-952.jpg" className='h-10 rounded-lg' alt="logo" />
                </div>
                <div className="lg:px-10">
                  <Toggle />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        spy={true} smooth={true} offset={10} duration={500}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={classNames('bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  spy={true} smooth={true} offset={10} duration={500}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
