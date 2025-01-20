import React, { useState } from "react";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    sourceLanguage: "",
    targetLanguages: "",
    projectDescription: "",
    durationVolume: "",
    fileLink: "",
    contactMethod: "",
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
    console.log("Form Data Submitted:", formData);
    alert("Thank you for your request! Our team will get back to you shortly.");
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
          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full p-4 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Email Address */}
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-4 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Phone Number */}
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-4 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Company Name */}
          <input
            type="text"
            name="company"
            placeholder="Enter your company or organization name"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full p-4 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Project Type */}
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleInputChange}
            className="w-full p-4 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select project type</option>
            <option value="Dubbing">Dubbing</option>
            <option value="Voiceover">Voiceover</option>
            <option value="Subtitling & Closed Captioning">Subtitling & Closed Captioning</option>
            <option value="Translation & Transcreation">Translation & Transcreation</option>
            <option value="Localization">Localization</option>
            <option value="Transcription">Transcription</option>
            <option value="Audio Production">Audio Production</option>
            <option value="Creative Writing">Creative Writing</option>
            <option value="Audio Description">Audio Description</option>
            <option value="Other">Other</option>
          </select>

          {/* Source Language */}
          <input
            type="text"
            name="sourceLanguage"
            placeholder="Select source language"
            value={formData.sourceLanguage}
            onChange={handleInputChange}
            className="w-full p-4 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Target Languages */}
          <input
            type="text"
            name="targetLanguages"
            placeholder="Select target language(s)"
            value={formData.targetLanguages}
            onChange={handleInputChange}
            className="w-full p-4 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Project Description */}
          <textarea
            name="projectDescription"
            placeholder="Briefly describe your project requirements"
            value={formData.projectDescription}
            onChange={handleInputChange}
            className="w-full p-4 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            required
          />

          {/* Estimated Project Duration or Volume */}
          <input
            type="text"
            name="durationVolume"
            placeholder="E.g., 2 hours of audio or 10,000 words"
            value={formData.durationVolume}
            onChange={handleInputChange}
            className="w-full p-4 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Provide File Link */}
          <input
            type="url"
            name="fileLink"
            placeholder="Paste the link to your files (e.g., Google Drive, Dropbox)"
            value={formData.fileLink}
            onChange={handleInputChange}
            className="w-full p-4 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Preferred Contact Method */}
          <div className="flex items-center gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="contactMethod"
                value="Email"
                checked={formData.contactMethod === "Email"}
                onChange={handleInputChange}
                className="mr-2"
              />
              Email
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="contactMethod"
                value="Phone"
                checked={formData.contactMethod === "Phone"}
                onChange={handleInputChange}
                className="mr-2"
              />
              Phone
            </label>
          </div>

          {/* Deadline/Delivery Date */}
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleInputChange}
            className="w-full p-4 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Budget Range */}
          <input
            type="text"
            name="budget"
            placeholder="Enter your approximate budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="w-full p-4 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Consent */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label>
              I agree to the <a href="#privacy-policy" className="text-blue-500 underline">privacy policy</a>.
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all"
            >
              Request a Free Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
