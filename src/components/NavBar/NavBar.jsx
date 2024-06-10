// import { Link } from "react-router-dom";
// import * as userService from "../../utilities/users-service";
// import "./NavBar.css";

// // had to jettison the search bar and category pages for now, but keeping the code for future reference

// export default function NavBar({ user, setUser }) {

//   function handleLogOut() {
//     userService.logOut();
//     setUser(null);
//   }

//   return (
//     <nav id="navbar" className="navbar">

//       <div>
//         <Link to="/shop">Shop</Link>
//         &nbsp; | &nbsp; 
//         <Link to="/about">About</Link>
//         &nbsp; | &nbsp;
//         <Link to="/contact">Contact</Link>
//         {user ? (
//           <>
//             &nbsp; | &nbsp;
//             <Link to="/profile">My Profile</Link>
//             &nbsp; | &nbsp;
//             <Link className="logout" to="" onClick={handleLogOut}>Log Out</Link>
//             <div className="nav-welcome">
//               <p>Welcome, {user.username}!</p>
//             </div>
//           </>
//         ) : (
//           <>
//             &nbsp; | &nbsp;
//             <Link to="/login">Login</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }


import { Fragment, useState } from 'react'
import * as userService from '../../utilities/users-service'
import Logo from '../../assets/Logo_cropped.png'
import TypeLogo from '../TypeLogo/TypeLogo'
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'


const navigation = {
  pages: [
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar( { user, setUser }) {
  const [open, setOpen] = useState(false)

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      
      <Transition show={open}>
        <Dialog className="relative z-40 lg:hidden" onClose={setOpen}>
          <TransitionChild
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 z-40 flex">
            <TransitionChild
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <div className="-m-2 space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root px-4 py-6">
                      <a href={page.href} className="m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                {user ? (
              <>
              &nbsp; | &nbsp;
            <Link to="/profile">My Profile</Link>
            &nbsp; | &nbsp;
            <Link className="logout" to="" onClick={handleLogOut}>Log Out</Link>
            <div className="nav-welcome">
              <p>Welcome, {user.username}!</p>
            </div>
            </>
                ) : (
                  <>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a href="/login" className="-m-2 block p-2 font-medium text-gray-900">
                      Log in
                    </a>
                  </div>
                </div>
                </>
                )}
                </DialogPanel>
            </TransitionChild>
            </div>
            </Dialog>
            </Transition>

      <header className="relative bg-white">
        <p className="mt-0 flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          The Pintern's on break
          <br />
          & The shop is closed! 🔐
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className= "pb-4 border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0 pr-6 pt-4">
                <a 
                className='flex items-center'
                href="/shop">
                  <span className="sr-only">The Pintern</span>
                  <img
                    className="h-12 md:w-auto"
                    src={Logo}
                    alt=""
                  />
                <div className="items-center justify-center pl-4 pb-4 ">
                <TypeLogo/>
                </div>
                </a>
              </div>


              {/* Flyout menus */}

              <div className="mt-12 ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {navigation.pages.map((page) => (
                    <a
                    key={page.name}
                    href={page.href}
                    className="hidden sm:flex items-center text-sm font-medium px-8 text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a href="login" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Log in
                  </a>
                  </div>
                </div>
              </div>
            </div>
        </nav>
      </header>
    </div>
  )
}
