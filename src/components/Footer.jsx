import { NavLink } from "react-router-dom";
import {
  FaRegClock,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaUserCircle,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../assets/logo_footer.png";

const Footer = () => {
  const handleCall = () => {
    window.location.href = 'tel:+919057296732'; // Replace with the phone number
  }

  return (
    <footer className="bg-[#666AE5] px-6 py-10 md:px-12 lg:px-16">
      {/* Main Footer Content */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-0 border-b border-solid border-[#ffffff] pb-10">
        {/* Logo and Description */}
        <div className="flex flex-col gap-4 lg:w-1/4">
          <img src={Logo} alt="Logo" className="h-16 w-52 relative" />
          <p className="text-[14px] text-white max-w-sm">
            TrendsUp Media is all about helping businesses and creators reach a
            global audience by working with more than 80+ languages, accents,
            and dialects around the globe.
          </p>
          {/* Social Icons with Names */}
          <div className="flex gap-4 mt-4">
            {/* Instagram */}
            <a
              href=" https://www.instagram.com/trendsupmedia/profilecard/?igsh=MWt4d3dqazA5c3dscQ==
"
              className="flex items-center gap-2 text-white hover:text-gray-200"
            >
              <FaInstagram className="h-5 w-5" />
             
            </a>

            {/* Facebook */}
            <a
              href=" https://www.facebook.com/trendsupmedia?mibextid=LQQJ4d
"
              className="flex items-center gap-2 text-white hover:text-gray-200"
            >
              <FaFacebook className="h-5 w-5" />
             
            </a>

      

            {/* LinkedIn (Company) */}
            <a
              href=" https://www.linkedin.com/company/trendsup-media/
"
              className="flex items-center gap-2 text-white hover:text-gray-200"
            >
              <FaLinkedin className="h-5 w-5" />
            
            </a>

            {/* YouTube */}
            <a
              href=" https://youtube.com/@trendsupmedia?si=CbWgB1IITQti3EGK "
              className="flex items-center gap-2 text-white hover:text-gray-200"
            >
              <FaYoutube className="h-5 w-5" />
              
            </a>
          </div>
        </div>

        <div className="flex gap-16 ">
          {/* Navigation Links */}
          <div className="flex flex-col gap-4 ">
            <h4 className="text-lg font-semibold text-white">Navigation</h4>
            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                className="text-sm        hover:text-black hover:font-bold text-white"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-sm   hover:text-black hover:font-bold text-white"
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className="text-sm   hover:text-black hover:font-bold text-white"
              >
                Services
              </NavLink>
              <NavLink
                to="/language"
                className="text-sm   hover:text-black hover:font-bold text-white"
              >
                Languages
              </NavLink>
              <NavLink
                to="/clientele"
                className="text-sm     hover:text-black hover:font-bold text-white"
              >
                 Clientele
              </NavLink>
              <NavLink
                to="/work-with-us"
                className="text-sm   hover:text-black hover:font-bold text-white"
              >
             Work with us 
              </NavLink>
             
              <NavLink
                to="/contact"
                className="text-sm     hover:text-black hover:font-bold text-white"
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 ">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="flex flex-col  gap-2">
              <NavLink
                to="/contact"
                className="text-sm   hover:text-black hover:font-bold text-white"
              >
                Contact Us
              </NavLink>
              <NavLink
                to="https://drive.google.com/file/d/1EPfHWPUCSl-zSYmNT_c3Cg8sfxnMqUVc/view?usp=sharing "
                className="text-sm     hover:text-black hover:font-bold text-white"
              >
                Privacy & Policy
              </NavLink>
              <NavLink
                to="https://drive.google.com/file/d/1aY0of_6aRQ3b55LBAV7WARb6yEQQHnEo/view?usp=sharing "
                className="text-sm   hover:text-black hover:font-bold text-white"
              >
               Terms & Conditions
              </NavLink>
          
            </div>
          </div>
        </div>
        {/* Work Hours */}
        {/* Office Hours and Contact Info */}
        <div className="flex flex-col gap-2 lg:w-1/4">
          <h4 className="text-lg font-semibold text-white">Office Hours</h4>
          <p className="text-sm text-white flex items-center gap-2">
            <FaRegClock className="h-5 w-5 md:h-6 md:w-6" /> Mon - Sat, 10 AM to
            6 PM
          </p>

          <h4 className="text-lg font-semibold text-white">Business Address</h4>
          <p className="text-sm text-white flex items-center gap-2">
            <FaMapMarkerAlt size={"2em"} /> Second Floor, D-82 JS Plaza,
            Janpath, Shyam Nagar, Jaipur, Rajasthan, India 302019
          </p>

          <p 
      onClick={handleCall}
      className="text-sm text-white flex items-center gap-2" 
      style={{ cursor: 'pointer' }}
    >
      <FaUserCircle className="h-5 w-5 md:h-6 md:w-6" /> +919057296732
    </p>


          <p className="text-sm text-white flex items-center gap-2">
            <FaRegEnvelope className=" w-5 md:h-6 md:w-6" />{" "}
            <a href="mailto:contact@trendsupmedia.com">contact@trendsupmedia.com</a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-center py-4 mt-4 space-y-2 lg:space-y-0">
  <p className="text-sm text-white text-center lg:text-left">
    Copyright &copy; 2025 TrendsUp Media | All Rights Reserved
  </p>
  <a href="#"className="text-sm text-white text-center lg:text-right"> Design & Developed by Webexcep 😊</a>
 
</div>

    </footer>
  );
};

export default Footer;
