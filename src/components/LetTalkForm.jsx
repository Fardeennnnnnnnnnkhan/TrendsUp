import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    sourceLanguage: "",
    targetLanguages: "",
    projectDescription: "",
    durationVolume: "",
    fileLink: "",
    deadline: "",
    budget: "",
    consent: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please agree to the privacy policy.");
      return;
    }

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      sourceLanguage: formData.sourceLanguage,
      targetLanguages: formData.targetLanguages,
      projectDescription: formData.projectDescription,
      durationVolume: formData.durationVolume,
      fileLink: formData.fileLink,
      deadline: formData.deadline,
      budget: formData.budget,
    };

    emailjs
      .send(
        "service_9sjehe8",
        "template_sp9nzne",
        templateParams,
        "P7mhCIvD0tWPb6dhp"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your request has been sent successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen py-10 px-4 flex items-center justify-center">
      <div className="bg-white rounded-lg bg-gradient-to-br from-blue-100 to-blue-400 shadow-lg max-w-4xl w-full p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">
          Get a Free Quote Today!
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Tell us about your project, and we’ll provide a tailored solution for your needs.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} className="w-full p-4 border rounded-lg" required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="w-full p-4 border rounded-lg" required />
          <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} className="w-full p-4 border rounded-lg" />
          <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleInputChange} className="w-full p-4 border rounded-lg" />
          <input type="text" name="sourceLanguage" placeholder="Source Language" value={formData.sourceLanguage} onChange={handleInputChange} className="w-full p-4 border rounded-lg" />
          <input type="text" name="targetLanguages" placeholder="Target Languages" value={formData.targetLanguages} onChange={handleInputChange} className="w-full p-4 border rounded-lg" />
          <textarea name="projectDescription" placeholder="Project Description" value={formData.projectDescription} onChange={handleInputChange} className="w-full p-4 border rounded-lg" rows="4" required />
          <input type="text" name="durationVolume" placeholder="Duration/Volume" value={formData.durationVolume} onChange={handleInputChange} className="w-full p-4 border rounded-lg" />
          <input type="url" name="fileLink" placeholder="File Link (Google Drive, Dropbox)" value={formData.fileLink} onChange={handleInputChange} className="w-full p-4 border rounded-lg" />
          <input type="date" name="deadline" value={formData.deadline} onChange={handleInputChange} className="w-full p-4 border rounded-lg" />
          <input type="text" name="budget" placeholder="Budget" value={formData.budget} onChange={handleInputChange} className="w-full p-4 border rounded-lg" />
          
          <div className="flex items-center">
            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleInputChange} className="mr-2" />
            <label>I agree to the <a href="#privacy-policy" className="text-blue-500 underline">privacy policy</a>.</label>
          </div>

          <div className="flex justify-center items-center">
            <button type="submit" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all">
              Request a Free Quote
            </button>
          </div>
        </form>
      </div>
    </div>

    
  );
};

export default ContactUsForm;
