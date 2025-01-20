import React, { useState } from "react";

const ServicesSection1 = () => {
  const [specialityData, setSpecialityData] = useState([
    {
      banner:
        "https://askproject.net/foices/wp-content/uploads/sites/91/2022/07/icon2_6.png",
      title: "Dubbing",
      description:
        "We replace the original voices in your videos with professional voice actors who are native speakers of the target language.",
      link: "",
    },
    {
      banner:
        "https://askproject.net/foices/wp-content/uploads/sites/91/2022/07/icon2_2.png",
      title: "Voiceover",
      description:
        "Our voiceover artists deliver clear, engaging voice tracks that complement your visuals perfectly.",
      link: "",
    },
    {
      banner:
        "https://askproject.net/foices/wp-content/uploads/sites/91/2022/07/icon2_3.png",
      title: "Subtitling",
      description:
        "Our subtitling services make your videos accessible to a wider audience, including those who are deaf or hard of hearing, or who speak different languages.",
      link: "",
    },
    {
      banner:
        "https://askproject.net/foices/wp-content/uploads/sites/91/2022/07/icon2_1.png",
      title: "Localization",
      description:
        " We adapt your text, visuals, and even audio to align with the cultural norms, humor, and preferences of your target audience.",
      link: "",
    },
    {
      banner:
        "https://askproject.net/foices/wp-content/uploads/sites/91/2022/07/icon2_4.png",
      title: "Translation",
      description:
        "Translation is the foundation, converting words from one language to another. Transcreation takes it a step further.",
      link: "",
    },
    {
      banner:
        "https://askproject.net/foices/wp-content/uploads/sites/91/2022/07/icon2_7.png",
      title: "Audio Production",
      description:
        " Our audio engineers work magic behind the scenes to enhance the overall quality of your audio.",
      link: "",
    },
  ]);

  return (
    <div className="pl-[70px] pt-[70px] pb-[50px] bg-[#14133B] flex justify-between items-center gap-[20px]">
      <div className="flex flex-col gap-[10px] relative">
        <h1 className="absolute right-[35px] lg:left-[-10px] top-[-70px] lg:top-[-100px] text-[80px] lg:text-[150px] text-[#23297a] font-medium uppercase z-0 opacity-45">
          Services
        </h1>

        <h2 className="max-w-[750px] text-[30px] mr-4 lg:mr-1 lg:text-[40px] mt-[42px] text-[#ffffff] font-semibold font-helvetica tracking-wide leading-snug uppercase z-10">
          AI Can’t Capture The Emotions, Timing & Cultural Sensitivity That We
          Promise You!
        </h2>
        <p className="text-[20px] max-w-[650px]  text-white leading-2 z-10">
          To bring that Real human touch, TrendsUp Media works with handpicked
          artists from across the globe to make your content resonate.
        </p>
      </div>
    </div>
  );
};

export default ServicesSection1;
