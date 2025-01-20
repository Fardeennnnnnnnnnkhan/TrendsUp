import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { SiComma } from "react-icons/si";

const reviews = [
  {
    id: 1,
    name: 'Svetlana Dvoeglazova',
    designation: 'Project Manager',
    image: 'https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png-1.jpg',
    reviewHeading: 'Exceptional Collaboration!',
    review: 'A+++++ I highly recommend Trends Up Media as a professional manager! They are always in touch, and we are always on the same page. We did a huge dubbing project together, and I am proud that I know them.',
  },
  {
    id: 2,
    name: 'Ankit Hotta',
    designation: 'Producer',
    image: 'https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png-1.jpg',
    reviewHeading: 'Highly Professional!',
    review: 'I had the pleasure of collaborating with Trends Up Media on several projects. They consistently demonstrated exceptional project management skills, ensuring that tasks were completed efficiently and within established deadlines.',
  },
  {
    id: 3,
    name: 'Carmen Mazariegos',
    designation: 'Content Specialist',
    image: 'https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png-1.jpg',
    reviewHeading: 'Supportive Team!',
    review: 'Although there were challenges regarding the project, Trends Up Media always made an effort so that in the end we could feel supported and helped. That was something I liked about working with them.',
  },
  {
    id: 4,
    name: 'Thevin Gajaweera',
    designation: 'Audio Engineer',
    image: 'https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png-1.jpg',
    reviewHeading: 'Reliable Partner!',
    review: 'Worked alongside Trends Up Media for about a little over a year now. They had the talent and work ethic to get any dubbing project done.',
  },
  {
    id: 5,
    name: 'Suyash Singh',
    designation: 'Creative Director',
    image: 'https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png-1.jpg',
    reviewHeading: 'Fun and Professional!',
    review: 'They are super fun to work with. They understand the brief and deliver the content on time!',
  },
  {
    name: ' Prasanna ',
    reviewHeading: ' Professional Company!',
    review: 'Trends Up Media  is a very professional voiceover artist company, took all the details and created wonderful results. They cooperated well and worked on the project with utmost professionalism. I can recommend him for Hindi Dubbing Projects, Thanks once again will get back to you for future projects.',
  },
  {
    name: 'Anil Khatik ',
    reviewHeading: 'Good Service !',
    review: 'Very good service with polite nature. They provided revisions with no question asked. Very great service with a reasonable price. I Strongly recommended them for any dubbing voice over work.',
  },
  
  {
    name: 'Snow Globe Tv',
    reviewHeading: ' Professional Work !',
    review: 'Very easy to work with. Exceeded time expectations also. The syncing they did for the dialogue I provided was excellent and worked very well for dubbing. Their communication was also extremely professional and helpful. Will be using again for many services in the future.',
  },
  
  {
    name: 'Rezdar Bakri',
    reviewHeading: 'Amazon Work!',
    review: 'Amazing work! The speed, the quality, the accuracy of the dub is PERFECT.Trendsup Media even brought in a team to make sure we had all the voices covered! This is the third project we do together and MORE TO COME.',
  },
];


const ClientReview = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handlePrev = () => {
    setCurrentReviewIndex(
      currentReviewIndex === 0 ? reviews.length - 1 : currentReviewIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentReviewIndex(
      currentReviewIndex === reviews.length - 1 ? 0 : currentReviewIndex + 1
    );
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <section className="bg-gray-50 py-8 sm:py-12">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="relative p-6 bg-white shadow-lg rounded-lg">
          {/* Review Heading */}
          <p className="text-4xl sm:text-5xl text-blue-500 mb-6 italic font-extrabold flex items-center space-x-2">
            <SiComma style={{ transform: 'rotate(180deg)', fontSize: '32px' }} />
            <span>{currentReview.reviewHeading}</span>
          </p>

          {/* Review Text */}
          <p className="text-lg sm:text-xl text-gray-800 mb-6">
            {currentReview.review}
          </p>

          {/* Client Info */}
          <div className="absolute bottom-4 left-4 flex items-center space-x-4 space-y-2">
           
            <div>
              <p className="text-base ml-2 mb-3 sm:text-lg font-semibold">
                {currentReview.name}
              </p>
             
            </div>
          </div>


  
          {/* Carousel Buttons */}
          <div className="flex w-full  justify-end gap-2">
            <button
              onClick={handlePrev}
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
