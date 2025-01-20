import React, { useEffect, useState } from 'react';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const reviews = [
  {
    name: 'Svetlana Dvoeglazova',
    rating: 5,
    review: 'A+++++ I highly recommend Trends Up Media  as a professional manager! They are always in touch, and we are always on the same page. We did a huge dubbing project together and I am proud that I know them.',
  },
  {
    name: 'Ankit Hotta',
    rating: 5,
    review: 'I had the pleasure of collaborating with Trends Up Media on several projects. They consistently demonstrated exceptional project management skills, ensuring that tasks were completed efficiently and within established deadlines.',
  },
  {
    name: ' Carmen Mazariegos',
    rating: 5,
    review: 'Although there were challenges regarding the project. Trends Up Media  always made an effort so that in the end we could feel supported and helped. That was something I liked about working with them.',
  },
  {
    name: 'Thevin Gajaweera',
    rating: 5,
    review: 'Worked alongside with Trends up media for about a little over a year now. They had the talent and work ethic to get any dubbing project done.',
  },
  
  {
    name: 'Suyash Singh',
    rating: 5,
    review: 'They are super fun to work with. They  understand the brief and timely delivers the content!',
  },
  {
    name: ' Prasanna ',
    rating: 5,
    review: 'Trends Up Media  is a very professional voiceover artist company, took all the details and created wonderful results. They cooperated well and worked on the project with utmost professionalism. I can recommend him for Hindi Dubbing Projects, Thanks once again will get back to you for future projects.',
  },
  {
    name: 'Anil Khatik ',
    rating: 5,
    review: 'Very good service with polite nature. They provided revisions with no question asked. Very great service with a reasonable price. I Strongly recommended them for any dubbing voice over work.',
  },
  
  {
    name: 'Snow Globe Tv',
    rating: 5,
    review: 'Very easy to work with. Exceeded time expectations also. The syncing they did for the dialogue I provided was excellent and worked very well for dubbing. Their communication was also extremely professional and helpful. Will be using again for many services in the future.',
  },
  
  {
    name: 'Rezdar Bakri',
    rating: 5,
    review: 'Amazing work! The speed, the quality, the accuracy of the dub is PERFECT.Trendsup Media even brought in a team to make sure we had all the voices covered! This is the third project we do together and MORE TO COME.',
  },
];



const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3); 

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return reviews.length - itemsToShow;
      }
      return prevIndex - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= reviews.length - itemsToShow) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const updateItemsToShow = () => {

    console.log(window.innerWidth);
    if (window.innerWidth < 877) {
      setItemsToShow(1); // Mobile view
    } else {
      setItemsToShow(3); // Larger screens
    }
  };

  useEffect(() => {
    updateItemsToShow();

    window.addEventListener("resize", updateItemsToShow);
    return () => {
      window.removeEventListener("resize", updateItemsToShow);
    };
  }, []);

  return (
    <section className="bg-gray-100 py-12">
      {/* Section Heading */}
      <div className="text-left mb-10 ml-6 md:ml-16 lg:ml-72">
        <h1 className="text-[#454EFF] text-2xl font-semibold font-arial lg:ml-60 ">TESTIMONIALS</h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mt-8">Positive Reviews From Our Clients</h2>
      </div>

      {/* Carousel Container */}
      <div className="container mx-auto flex items-center justify-center relative px-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-10 transform -translate-x-1/2 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition md:p-4"
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Reviews Carousel */}
        <div className="flex overflow-hidden space-x-4 w-full max-w-4xl mx-6">
          {reviews.slice(currentIndex, currentIndex + itemsToShow).map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md w-full">
            
              <h3 className="text-xl font-bold text-center mb-2">{review.name}</h3>

              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((star, i) => (
                  <FaStar
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(review.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>

              <p className="text-gray-600 text-center">{review.review}</p>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-10 transform translate-x-1/2 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition md:p-4"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
