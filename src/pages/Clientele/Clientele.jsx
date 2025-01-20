import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { GirlTyping } from "../../assets/export";
import LT from '../../assets/LT.png'
import YT from '../../assets/YT.png'
const Clientele = () => {
  const yt = [
    {
      name: "Rezdar Bakri",
      subheading: "Subscriber : 210k",
      logo: "data:image/jpeg;base64,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",
    },

    {
      name: "Matthew Beem",

      subheading:
        "Localized Matthew Beem's content for Indian audiences by dubbing his videos from English to Hindi, ensuring wider engagement.",
      logo: "https://www.famousbirthdays.com/headshots/matthew-beem-3.jpg",

      subheading: "Subscriber : 6.55M",
      logo: "https://pbs.twimg.com/profile_images/1218370375198765056/KySQ7fGK_400x400.jpg",
    },
    {
      name: "Topper Guild",
      subheading: "Subscriber : 55M",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGFYKTeDAQnPRyxGoAdNrjbUCkR9bPHowJ9A&s",
    },
    {
      name: "Jordan Matter",
      subheading: "Subscriber : 27.5M",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNkmasoHBXCm_qw5OAPBPWVS5kou0Fdzf2DQ&s",
    },
    {
      name: "Alan Chikin",
      subheading: "Subscriber : 74.5M",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidO7v_ZCkFtFLKfWeiI18IBrmseCuBsi3jl8HRRhVGi7JYxZQ1ruT6eD6DK5jIsub1FI&usqp=CAU",
    },
  ];



  const logo = [
    {
      logo: "Companies/BE MULTILINGUAL.png", // Add the logo URL
    },
    {
      logo: "Companies/BROWN COLLAB.png", // Add the logo URL
    },
    {
      logo: "Companies/CRYSTAL HUES.png", // Add the logo URL
    },
    {
      logo: "Companies/DEEPTUNE.png", // Add the logo URL
    },
    {
      logo: "Companies/DISCOVERY EDUCATION.png", // Add the logo URL
    },
    {
      logo: "Companies/DS GROUP.png", // Add the logo URL
    },
    {
      logo: "Companies/EIGHT NETWORK.png", // Add the logo URL
    },
    {
      logo: "Companies/GLOBAL ESPORTS.png", // Add the logo URL
    },
    {
      logo: "Companies/IREL.png", // Add the logo URL
    },
    {
      logo: "Companies/KUKU FM.png", // Add the logo URL
    },
    {
      logo: "Companies/KUKU TV.png", // Add the logo URL
    },
    {
      logo: "Companies/L&T FINANCE.png", // Add the logo URL
    },
    {
      logo: "Companies/POCKET FM.png", // Add the logo URL
    },
    {
      logo: "Companies/SAICORD.png", // Add the logo URL
    },
    {
      logo: "Companies/SHARECHAT MOJ.png", // Add the logo URL
    },
    {
      logo: "Companies/SSCCA .png", // Add the logo URL
    },
    {
      logo: "Companies/SUPPLY 6.png", // Add the logo URL
    },
    {
      logo: "Companies/THE MAD VIRUS.png", // Add the logo URL
    },
    {
      logo: "Companies/TURNO.png", // Add the logo URL
    },
    {
      logo: "Companies/UNISCHOLARS.png", // Add the logo URL
    },
    {
      logo: "Companies/XPR NETWORK.png", // Add the logo URL
    },
    {
      logo: "Companies/UPREX MEDIA STUDIO.png", // Add the logo URL
    },
    {
      logo: LT, // Add the logo URL
    },
    {
      logo: YT, // Add the logo URL
    },
  ];

  return (
    <div>
      <section className="h-[400px] flex items-center justify-center bg-gradient-radial from-green-100 via-blue-200 to-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-black mb-4 tracking-[5px]">
            CLIENTELE
          </h1>
          <p className="text-2xl text-black flex text-center mx-[40px] font-mono">
            HOME{" "}
            <IoIosArrowForward style={{ fontSize: "33px", color: "indigo" }} />
            <span style={{ color: "indigo" }}>CLIENTELE</span>
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-[20px] font-bold font-helvetica p-2 mx-auto text-center mt-5">
         
Trusted by Leading Brands Since 2014

        </h2>
        <p className="text-[14px] sm:text-[16px] max-w-full sm:max-w-[400px] md:max-w-3xl text-gray-800 leading-6 md:leading-7 z-10 text-center mx-auto px-4">
        Since 2014, TrendsUp Media has been delivering top-tier localization, dubbing, and translation services across various industries. From YouTube creators and eLearning platforms to global brands and entertainment networks, we’ve helped over 170+ brands reach new audiences with 3500+ projects delivered successfully. What you see here is just a glimpse of our recent work.
        </p>
        <div className="border-[#666ae5] border-2 md:max-w-6xl mx-auto my-12"></div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 md:px-6 mb-10">
        {logo.map(({ logo }) => (
          <div className="flex justify-center items-center">
            <img
              src={logo}
              alt=""
              className="w-full h-auto md:h-40 md:w-40 object-cover rounded-xl"
            />
          </div>
        ))}
      </section>
      <div className="min-h-screen bg-gray-100">
        {/* Main Content Section */}
        <main className="py-12 px-6 md:px-12 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-6">
            What We've Did For Our Client's
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-900 space-y-4">
              <li>Discovery Education : Doubled the impact of Discovery Education's e-learning materials by dubbing 300+ hours of contentb  from English to Spanish, empowering learners globally.</li>
              <li>
              Kuku FM : Create immersive Hindi audio drama shows for Kuku FM, helping them grow their audience and generate millions of views across India.
              </li>
              <li>Pocket FM : Assisted Pocket FM in entering the U.S. market by localizing their popular shows from Hindi to English, boosting their reach and impact.</li>
              <li>
              Eight Network : Partnered with Eight Network to produce Hindi audiobooks, delivering captivating stories to listeners across India.
              </li>
              <li>Turno : Localized Turno's video content by adapting their North Indian language videos for broader regional audiences, ensuring cultural relevance.</li>
              <li>
              DS Group : Designed a Rajasthani advertisement for DS Group's Ksheer Ghee, bringing a regional touch to their brand communications.
              </li>
              <li>Saicord : Doubled the content reach of Saicord by dubbing 500+ videos in 7+ languages, making their content accessible to a global audience.</li>
              <li>SSCCA (Seeds of Peace): Enabled SSCCA to launch an e-learning course in Hindi, making educational content accessible to a broader Indian audience.</li>
              <li>Sharechat MOJ : Localized 2 mini-series for Sharechat MOJ, translating from English to Hindi & Tamil and Chinese to Hindi, increasing their audience engagement.</li>
              <li>UniScholars : Doubled the impact of UniScholars' campaigns by dubbing their commercial video from Hindi to Telugu, broadening their regional.</li>
              <li>UpREX Media : Localized content for UpREX Media by dubbing for YouTubers, expanding their global content reach through multi-language support.</li>
              <li>Kuku TV : Helped Kuku TV expand its library by dubbing numerous series from various languages, engaging diverse audiences.</li>
              <li>Crystal Hues : Collaborated with Crystal Hues on multiple projects, delivering high-quality dubbing and localization that resonates with international audiences.</li>
              <li>Magic EdTech : Partnered with Magic EdTech to bring e-learning content to new regions, helping them expand their global footprint.</li>
              <li>Brown Collab : Supported Brown Collab by dubbing for YouTubers, adapting their content for better engagement with Indian audiences.</li>
              <li>Deeptune : Worked with Deeptune to dub a wide array of YouTube videos, enhancing accessibility and audience growth across regions.</li>
              <li>Be Multilingual : Partnered with Be Multilingual to bring top-tier dubbing services to YouTubers, expanding their reach across linguistic barriers.</li>
              <li>The Mad Virus : Created an impactful advertisement for The Mad Virus, localizing it to resonate with a wider audience across India.</li>
              <li>Supply6 : Developed a powerful advertisement for Supply6, ensuring their message connected with diverse audiences through high-quality localization.</li>
              <li>L&T FinanceIVR : Voice-over services provided in over 12 languages for IVR systems.</li>
              <li>IREL : We delivered high-quality Hindi and Tamil dubbing services for a documentary-style explainer video created by IREL, a government enterprise, ensuring clear communication and cultural relevance for their audience.</li>
              <li>Global Esports : We successfully localized a global esports advertisement for a leading gaming company by dubbing it from English into six regional languages: Marathi, Bengali, Kannada, Telugu, Tamil, and Malayalam, ensuring a seamless connection with diverse audiences.</li>
              <li>XPro Network : We translated and dubbed the XPronetwork explainer video advertisement into Hindi, delivering a polished and culturally resonant final product.</li>
            </ul>
          </div>
        </main>
      </div>
    

      <h2 className="text-[20px] font-bold font-helvetica p-2 mx-auto text-center my-5">
        Creators We’ve Helped Reach Global Audiences
      </h2>
      <section className="grid grid-cols-2 md:grid-cols-5 relative overflow-hidden md:max-w-6xl items-center justify-center mx-auto px-3 gap-x-3 gap-y-10 mb-10">
        {yt.map(({ logo, name, subheading }, index) => (
          <div
            key={name}
            className={`flex flex-col justify-center items-center animate-scrolll whitespace-nowrap transition duration-300 p-3 h-64 rounded-2xl overflow-hidden text-center ${
              index === yt.length - 1 ? "col-span-2 md:col-span-1" : ""
            }`}
          >
            <img src={logo} alt={name} className="h-29 w-20 rounded-xl" />
            <h1 className="text-lg md:text-2xl text-center font-medium my-2">
              {name}
            </h1>
            <p className="text-[14px] sm:text-[16px] font-helvetica">
              {subheading}
            </p>
          </div>
        ))}
      </section>

      <h2 className="text-[20px] font-bold mb-20 font-helvetica p-2 mx-auto text-center my-5">
        What if I told you I’ve Worked with 35+ Youtube creators over the world?
      </h2>

      <section
        id="form"
        className="bg-[#F0F0FB] py-12 px-4 flex flex-col lg:flex-row justify-evenly items-center "
      >
        {/* Left Section */}
        <div className="left-section mb-12 lg:mb-0 lg:max-w-[50%]">
          {/* Heading */}
          <div className=" ">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 ">
              What Do You Want to Achieve with Your Content?
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Do you want to expand into new markets, improve audience
              engagement, or localize your content for a global audience?
              TrendsUp Media has the expertise to help you do just that. Whether
              you need high-quality dubbing, translation, or localization, our
              team is ready to assist you in reaching your target market with
              culturally sensitive, compelling content.
            </p>

            <button className="h-[40px] px-2 bg-[#4CA4FF] rounded-[5px] flex justify-center items-center transition-all hover:bg-[#666AE5] mt-3">
              <p className="text-[15px] text-[#FFFFFF] font-semibold font-helvetica">
                <a href="https://calendly.com/trendsupmedia/strategy_session">
                  Book Your Free Call
                </a>
                {/* <a href="tel:+919057296732">Book Your Free Call</a> */}
              </p>
            </button>
          </div>
        </div>
        <img
          src="https://a.slack-edge.com/9c84081/marketing/img/solutions/tech/png/billboard.png"
          alt="Digital-Services-Banner"
          className="w-full max-w-xs md:max-w-md lg:max-w-lg mt-8 mx-auto lg:mx-0"
        />
      </section>

     
    </div>
  );
};

export default Clientele;
