import React from "react";
import Header from "../../components/Header";
import { IoIosArrowForward } from "react-icons/io";
 import ContactSection1 from "./ContactSection1";

const Contact=()=>{
    return <div>
    <Header/>
    <section className="h-[400px] flex items-center justify-center bg-gradient-radial from-green-100 via-blue-200 to-white">
      <div className="text-center">
      <h1 className="text-5xl font-bold text-black mb-4 tracking-[5px]">CONTACT</h1>
       <p className="text-2xl text-black flex text-center mx-[40px] font-mono">HOME <IoIosArrowForward style={{fontSize:"33px", color:"indigo"}}/><span style={{color:"indigo"}}>CONTACT</span></p>
      </div>
       
    </section>
    <ContactSection1/>
    </div>
}

export default Contact;