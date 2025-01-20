import React from "react";
import Header from "../../components/Header";
import ServicesSection1 from '../services/ServicesSection1';
import ServicesSection2 from "../services/ServicesSection2";
import { IoIosArrowForward } from "react-icons/io";
import ServicesTestimonial from './ServicesTestimonial';
import SessionBooking from "./SessionBooking";



const Services=()=>{
return <>
<Header/>
<section className="h-[400px] flex items-center justify-center bg-gradient-radial from-green-100 via-blue-200 to-white">
      <div className="text-center">
      <h1 className="text-5xl font-bold text-black mb-4 tracking-[5px]">SERVICES</h1>
       <p className="text-2xl text-black flex text-center mx-[40px] font-mono">HOME <IoIosArrowForward style={{fontSize:"33px", color:"indigo"}}/><span style={{color:"indigo"}}>SERVICES</span></p>
      </div>
       
    </section>
<ServicesSection1/>
<ServicesSection2/>
<ServicesTestimonial/>
<SessionBooking/>
    
</>
}

export default Services;