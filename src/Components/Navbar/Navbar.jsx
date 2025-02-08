import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="bg-black border-red-200 dark:bg-red-900 fixed right-0 left-0 top-0 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <NavLink to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-5xl font-semibold whitespace-nowrap dark:text-white text-red-600 ms-20">NETFLIX</span>
    </NavLink>
    <button datacollapsetoggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-red-500 rounded-lg md:hidden hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200 dark:text-red-400 dark:hover:bg-red-700 dark:focus:ring-red-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block bg-transparent md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-red-800 md:dark:bg-red-900 dark:border-red-700">
      <li>
          <NavLink to='' className="block py-2 text-3xl px-3 text-white rounded-sm hover:bg-red-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-red-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</NavLink>
        </li>
        <li>
          <NavLink to='movies' className="block text-3xl  py-2 px-3 text-white rounded-sm hover:bg-red-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-red-700 dark:hover:text-white md:dark:hover:bg-transparent">Movies</NavLink>
        </li>
        <li>
          <NavLink to='tv' className="block text-3xl mr-10 py-2 px-3 text-white rounded-sm hover:bg-red-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-red-700 dark:hover:text-white md:dark:hover:bg-transparent">TV</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>




    </>
  )
}
