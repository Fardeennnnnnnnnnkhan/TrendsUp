import React from 'react';
import StatsBox from './StatsBox';

import { NavLink } from 'react-router-dom';

const services = [
  { title: 'Dubbing', description: 'Dubbing is the process of replacing the original audio track...',to:'/services/dubbing' },
  { title: 'Voiceover', description: 'Voiceover service involves recording a voice track that is added...',to:'/services/voiceover' },
  { title: 'Localization', description: 'Localization is the process of adapting a product or content to ...',to:'/services/localization' },
  { title: 'Audio Editing', description: 'Clean up the recording, adjust levels, and add any necessary ...',to:'/services/audioedit' },
  { title: 'Translation', description: 'This is the foundation of our language services. We accurately....' ,to:'/services/translation'},
  { title: 'Transcription', description: 'This goes beyond literal translation. We creatively adapt your...' ,to:'/services/transcription'},
  { title: 'Subtitling', description: 'Subtitling is the process of displaying text on a video...',to:'/services/subtitle' },
  { title: 'Closed Captioning', description: 'Closed captions are text versions of the spoken dialogue...' ,to:'/services/closed-caption'},
  { title: 'MTPE', description: 'Machine translation post-editing (MTPE) is a service that combines the efficiency...',to:'/services/mtpe' },
  {  title: 'Proofreading', description: 'Our meticulous proofreading services ensure that your...' ,to:'/services/proofreading'},
  {  title: 'Content Writing', description: 'Our team of talented writers can craft compelling narratives, engaging scripts...' ,to:'/services/content-writing'},
  {  title: 'Audio Description', description: 'Audio description (AD) is a narration service that makes visual...',to:'/services/audiodescription' },
];

const ServicesSection2 = () => {
  return (
    <>
    <section className="bg-[#14133B] py-12" style={{paddingBottom:"200px"}}>
      <div className="container mx-auto px-6">
       

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-[#23297a] p-10 rounded-lg shadow-md text-white leading-8 hover:bg-[#4CA4FF] hover:text-white transition-colors duration-300"
            >
              <div className="text-left text-green-500 text-xl mb-2 hover:text-gray-200">{service.number}</div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase" style={{textShadow:"1px 1px #d3d3d3"}}>{service.title}</h3>
              <p className="mb-6 " >{service.description}</p>
              <button
                className="text-gray-100 font-bold hover:bg-white border-2 border-gray-300 hover:text-blue-500  hover:border-white py-1 px-4 rounded-full transition-transform transform hover:scale-105"
              >
               <NavLink to={service.to}>Learn More</NavLink> 
              </button>
            </div>
          ))}
        </div>
        
        
      </div>
      
    </section>
    <div style={{marginTop:"-100px"}}>
      <StatsBox/>
    </div>
    
   
    
   
    </>
  );
};

export default ServicesSection2;
