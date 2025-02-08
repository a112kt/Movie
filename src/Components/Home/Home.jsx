import React, { useEffect, useRef } from 'react'
import style from "./Home.module.css"
import myImg from './.././../assets/EG-en-20250203-TRIFECTA-perspective_20afdd37-a0fb-4788-9b86-1dafe3afd147_large.jpg'

export default function Home() {


  return (
    <>
    <div className={style.home}>
   <div className={style.layer}>
    <div className="text-center justify-content-center text-5xl  align-items-center text-white  ">
    
     <h1 className='text-4xl font-black text-white-900 dark:text-white'>Welcom to our Movies site ❤️ </h1>
     <p className='text-2xl font-black mt-5 text-white-900 dark:text-white' >⭐ Nice to See you ⭐</p>
  <div className="mt-16">
  <form className="max-w-md mx-auto mt-8">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Contact</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-800" placeholder="Ask us..." required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Contact</button>
    </div>
</form>

  </div>
    </div>
   </div>
    
    </div>
    
    
    </>
  )
}
