import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";
const MoblileNav = ({toggleMenu,isOpen}) => {
  return (
       <div className={`absolute w-full  py-10 top-16 ${isOpen ? "-right-full":"right-0"} bg-white transition-all md:hidden z-[999]`}>
        <div className="flex flex-col items-center gap-[10px] px-5" onClick={toggleMenu}>
          <NavLink
            to="/"
            className=" py-1  text-left rounded-md font-semibold flex items-center justify-between w-full border-[1px] border-purple-400 hover:bg-purple-500 hover:text-white px-5"
          >
            <span>Home</span> <MdKeyboardArrowRight />
          </NavLink>
          <NavLink
            to="/about"
            className="py-1  text-left rounded-md font-semibold flex items-center justify-between w-full border-[1px] border-purple-400 hover:bg-purple-500 hover:text-white px-5"
          >
            <span>About</span> <MdKeyboardArrowRight />
          </NavLink>
          <NavLink
            to="/services"
            className="py-1  text-left rounded-md font-semibold flex items-center justify-between w-full border-[1px] border-purple-400 hover:bg-purple-500 hover:text-white px-5"
          >
            <span>Services</span> <MdKeyboardArrowRight />
          </NavLink>
          <NavLink
            to="/language"
            className="py-1  text-left rounded-md font-semibold flex items-center justify-between w-full border-[1px] border-purple-400 hover:bg-purple-500 hover:text-white px-5"
          >
            <span>Languages</span> <MdKeyboardArrowRight />
          </NavLink>
          <NavLink
            to="/work-with-us"
            className="py-1  text-left rounded-md font-semibold flex items-center justify-between w-full border-[1px] border-purple-400 hover:bg-purple-500 hover:text-white px-5"
          >
            <span>Work With Us</span> <MdKeyboardArrowRight />
          </NavLink>
          <NavLink
            to="/clientele"
            className="py-1  text-left rounded-md font-semibold flex items-center justify-between w-full border-[1px] border-purple-400 hover:bg-purple-500 hover:text-white px-5"
          >
            <span> Clientele</span> <MdKeyboardArrowRight />
          </NavLink>
          <NavLink
            to="/contact"
            className="py-1  text-left rounded-md font-semibold flex items-center justify-between w-full border-[1px] border-purple-400 hover:bg-purple-500 hover:text-white px-5"
          >
            <span>Contact</span> <MdKeyboardArrowRight />
          </NavLink>
          <NavLink to="mailto:contact@trendsupmedia.com">
            <button className="h-[50px] w-[170px] bg-[#4CA4FF] rounded-[5px] flex justify-center items-center transition-all hover:bg-[#666AE5]">
              <p className="text-[15px] text-[#FFFFFF] font-semibold font-helvetica">
                Let's Talk
              </p>
            </button>
          </NavLink>
        </div>
      </div>
  )
}

export default MoblileNav
