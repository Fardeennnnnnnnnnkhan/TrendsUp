import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { GirlTyping } from "../../assets/export";
import LetTalkForm from "../../components/LetTalkForm";

const ContactSection1 = () => {
  const handleCall = () => {
    window.location.href = "tel:+919057296732"; // Replace with the phone number
  };
  return (
    <>
    <section className="flex flex-col lg:flex-row items-center justify-between py-12 px-6 lg:px-24">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <img
          src={GirlTyping}
          alt="Contact Us"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-1/2 lg:pl-12">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <h2 className="text-xl font-bold ">We’re all ears</h2>
        <p className="mb-6 text-gray-600">
          Share your vision and goals with us. Just 30 minutes on Zoom - with a
          coffee, or your favorite drink in hand. 😊
        </p>

        <ul className="space-y-4">
          {/* Address */}
          <li className="flex items-center text-gray-700">
            <FaMapMarkerAlt className="text-xl text-blue-500 mr-3" />
            Second Floor, D-82 JS Plaza, Janpath, Shyam Nagar, Jaipur,
            Rajasthan, India 302019
          </li>

          {/* Email */}
          <li className="flex items-center text-gray-700">
            <FaEnvelope className="text-xl text-blue-500 mr-3" />
            <a href="mailto:contact@trendsupmedia.com">
              contact@trendsupmedia.com
            </a>
          </li>

          {/* Phone */}
          <li
            onClick={handleCall}
            className="flex items-center text-gray-700"
            style={{ cursor: "pointer" }}
          >
            <FaPhone className="text-xl text-blue-500 mr-3" />
            <a href="tel:+919057296732">+919057296732</a>
          </li>
        </ul>
        <button className="mt-4 h-[40px] sm:h-[45px] md:h-[50px] w-[120px] sm:w-[150px] md:w-[170px] bg-[#4CA4FF] rounded-[5px] flex justify-center items-center transition-all hover:bg-[#666AE5]">
          <p className="text-[13px] sm:text-[14px] md:text-[15px] text-white font-semibold font-helvetica">
          <a href="https://calendly.com/trendsupmedia/strategy_session"> Book My Free Call</a>
          </p>
        </button>
        <h2 className="text-xl font-bold my-4 ">You'll hear back from us within 24 hours.</h2>
      </div>
     
    </section>
    <LetTalkForm />
   
   
    </>
  );
};

export default ContactSection1;
