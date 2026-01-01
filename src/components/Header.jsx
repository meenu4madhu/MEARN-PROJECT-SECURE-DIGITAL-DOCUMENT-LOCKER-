import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";

function Header() {
  const [menubar,setMenubar]=useState(false)
  return (
    
    <>
    <div className="grid grid-cols-3 p-1 bg-white mb-0 ">
     <div className="flex col-span-1 items-center mt-2 md:ml-5">
  <Link to="/">
    <img
      className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20"
      src="./sddl-logo.png"
      alt="logo"
    />
  </Link>

  <span className="text-lg sm:text-xl md:text-2xl font-bold text-violet-700 ml-2">
    SecureDoc
  </span>
</div>

      <div className='col-span-1'></div>
      <div className="hidden md:flex col-span-1  items-center gap-5 mt-2 mb-0 justify-center mr-5">
      <a href="#home" className=" text-violet-700 text-xl font-bold hover:text-blue-400">Home</a>
      <a href="#services" className=" text-violet-700 text-xl font-bold hover:text-blue-400">Services</a>
      <a href="#features" className=" text-violet-700 text-xl font-bold hover:text-blue-400">Features</a>
      <a href="#security" className=" text-violet-700 text-xl font-bold hover:text-blue-400">Security</a>
      <Link
        to="/register"
        className="bg-violet-700 font-bold  text-white px-4 py-2 rounded-lg hover:bg-blue-800"
      >
    Sign Up
  </Link>
  </div>
  {/* menu bar */}
  <div className="md:hidden text-blue text-3xl mr-5 ms-15 cursor-pointer">
    <FaBars onClick={() => setMenubar(!menubar)} className="text-violet-700 md:mt-10 mt-4"/>
  </div>
    </div>
    {/* responsive menu */}
    {menubar && (
          <div className="md:hidden flex flex-col items-center gap-4 mt-1 bg-blue-600 p-4 rounded-b-full">
            <a href="#home" className="text-green-200 text-xl font-bold">Home</a>
            <a href="#services" className="text-green-200 text-xl font-bold">Services</a>
            <a href="#features" className="text-green-200 text-xl font-bold">Features</a>
            <a href="#security" className="text-green-200 text-xl font-bold">Security</a>
            <Link
              to="/register"
              className="bg-blue-800 font-bold text-green-200 px-4 py-2 rounded-full"
            >
              Sign Up
            </Link>
          </div>
        )}
    </>
  )
}

export default Header