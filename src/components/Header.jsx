import { Link, NavLink } from "react-router-dom";

import logo from "../assets/logo1_trendsup.png";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import MoblileNav from "./MoblileNav";
const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed w-full h-fit py-2 px-5 flex items-center justify-between top-0 bg-white z-50">
      <div>
  <Link to="/">
    <img src={logo} alt="Logo" className="h-[50px] w-[166px]" />
  </Link>
</div>

      <button className="md:hidden " onClick={toggleMenu}>
        {isOpen ? <AiOutlineMenu size={40} /> : <IoMdClose size={40} />}
      </button>
      {/* destop  */}
      <div className="w-[70%] lg:w-[67%] hidden md:block ">
        <div className="flex justify-between gap-5">
          <div className="flex items-center gap-[25px]">
            <NavLink
              to="/"
              className="text-[#333D29] hover:text-[#666AE5] text-[15px] font-semibold cursor-pointer"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-[#333D29] hover:text-[#666AE5] text-[15px] font-semibold cursor-pointer"
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className="text-[#333D29] hover:text-[#666AE5] text-[15px] font-semibold cursor-pointer"
            >
              Services
            </NavLink>
            <NavLink
              to="/language"
              className="text-[#333D29] hover:text-[#666AE5] text-[15px] font-semibold cursor-pointer"
            >
              Languages
            </NavLink>
            <NavLink
              to="/clientele"
              className="text-[#333D29] hover:text-[#666AE5] text-[15px] font-semibold cursor-pointer"
            >
              Clientele
            </NavLink>
            <NavLink
              to="/work-with-us"
              className="text-[#333D29] hover:text-[#666AE5] text-nowrap text-[15px] font-semibold cursor-pointer"
            >
              Work with us
            </NavLink>
            <NavLink
              to="/contact"
              className="text-[#333D29] hover:text-[#666AE5] text-[15px] font-semibold cursor-pointer"
            >
              Contact
            </NavLink>
            <NavLink
              to="/blog"
              className="text-[#333D29] hover:text-[#666AE5] text-[15px] font-semibold cursor-pointer"
            >
              Blog
            </NavLink>
          </div>

          <button className="h-[40px] w-[160px] bg-[#4CA4FF] rounded-[5px] flex justify-center items-center transition-all hover:bg-[#666AE5]">
            <Link
              to="mailto:contact@trendsupmedia.com"
              className="text-[15px] text-[#FFFFFF] font-semibold font-helvetica"
            >
              Let's Talk
            </Link>
          </button>
        </div>
      </div>
      {/* mobile */}

      <MoblileNav toggleMenu={toggleMenu} isOpen={isOpen} />
    </div>
  );
};

export default Header;
