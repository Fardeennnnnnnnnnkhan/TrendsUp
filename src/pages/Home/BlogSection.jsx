import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: 'The Power of Localization in a Globalized World',
      date: 'August 25, 2023',
      author: 'Alice Johnson',
      category: 'Technology',
      tags: ['Localization' , 'Business'],
      description:
        'In today’s interconnected world, reaching global audiences isn’t just an option—it’s a necessity. However, language and cultural differences often act as barriers. That’s where localization plays a crucial role, transforming content into something that resonates with local audiences while preserving its original message. At TrendsUp Media, we specialize in breaking these barriers to help businesses connect authentically with diverse markets. ',
      content:
        "Breaking through language and cultural barriers is crucial for businesses seeking to expand globally in today’s interconnected world. While reaching international audiences has become a necessity, the challenges posed by differing languages and cultural nuances can hinder meaningful connections. Localization offers a powerful solution, transforming content so it resonates deeply with local audiences while preserving the original intent and message. TrendsUp Media specializes in helping businesses overcome these obstacles, enabling them to connect authentically with diverse markets. By tailoring content to align with the cultural values and preferences of specific audiences, localization ensures relevance, making your message more relatable and impactful. This cultural adaptation not only fosters trust and loyalty but also enhances engagement by creating a personalized experience that feels designed for the audience. Moreover, tailored messaging drives action, significantly improving conversion rates through clicks, subscriptions, and purchases. With expertise in over 80 languages and services like dubbing, subtitling, and transcreation, TrendsUp Media ensures your content speaks directly to local markets. Whether you’re launching a campaign or expanding your video content library, we provide the tools and expertise to help your brand succeed on a global stage. Ready to take your content to the next level? Partner with TrendsUp Media to unlock your brand’s full potential and connect with the world like never before.",
      image:
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      likes: 102,
      comments: 15,
      views: 1203,
      readingTime: '5 min',
    },
    {
      id: 2,
      title: ' Why Dubbing is Crucial for Global Content Success',
      date: 'September 10, 2023',
      author: 'John Doe',
      category: 'Health & Wellness',
      tags: ['Dubbing'],
      description:
        'In today’s video-centric world, dubbing is an indispensable tool for businesses and creators looking to engage international audiences. By providing improved accessibility for non-native speakers, fostering emotional connections through native voice artists, and ensuring consistency across platforms, dubbing enhances the impact of global content. At TrendsUp Media, we specialize in professional dubbing services that combine advanced technology with expert voice talent, ensuring seamless lip-sync and authenticity. Whether it’s helping brands like Pocket FM or Discovery Education, we make content universally relatable.',
      content:
        'As video content continues to dominate the digital landscape, dubbing has become a vital element for reaching and engaging international audiences. It enhances accessibility by allowing non-native speakers to enjoy and understand content in their preferred language, breaking down linguistic barriers and broadening your reach. Unlike subtitles, professional dubbing creates an emotional connection by using native-speaking voice artists who convey the nuances, tone, and emotions of the original content, making it more relatable to diverse audiences. Moreover, dubbing ensures consistency across platforms, maintaining the flow and continuity of visual storytelling without distraction. At TrendsUp Media, we take pride in delivering high-quality dubbing services that combine advanced technology with expert voice talent. From casting the perfect voice to achieving precise lip-sync accuracy, we manage every aspect of the dubbing process with precision and care. Our work with renowned brands like Pocket FM and Discovery Education demonstrates how effective dubbing can help localize content for diverse markets, enabling businesses to connect authentically with audiences worldwide. If you’re looking to make your content universally relatable, TrendsUp Media is your trusted partner for professional dubbing solutions.',
      image:
        'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      likes: 240,
      comments: 35,
      views: 2205,
      readingTime: '7 min',
    },
    {
      id: 3,
      title: 'How TrendsUp Media Simplifies Content Localization',
      date: 'October 1, 2023',
      author: 'Sarah Williams',
      category: 'Travel',
      tags: ['Trendsup'],
      description:
        'TrendsUp Media simplifies content localization by offering a comprehensive range of services, including translation, transcreation, dubbing, subtitling, and audio production. With over a decade of experience and expertise in 80+ languages, we ensure that your content resonates with diverse audiences while maintaining high quality. Trusted by leading brands like Kuku FM and DS Group, TrendsUp Media is your one-stop solution for seamless content localization.',
      content:
        'Expanding into new markets can be challenging, but TrendsUp Media makes content localization simple and efficient. We provide a wide range of services tailored to meet the diverse needs of businesses looking to scale globally. From translation and transcreation to dubbing, voiceover, subtitling, and audio production, we ensure that your content remains culturally relevant and accessible. With over a decade of experience and expertise in 80+ languages, we deliver high-quality solutions that maintain the authenticity of your message across different markets. Trusted by leading brands like Kuku FM and DS Group, TrendsUp Media is dedicated to helping businesses connect with global audiences seamlessly. Whether it’s enhancing accessibility or creating engaging audio-visual content, our team ensures that your content reaches its fullest potential in every language and region.',
      image:
        'https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      likes: 180,
      comments: 22,
      views: 1500,
      readingTime: '6 min',
    },
   

  ];

  return (
    <section className="bg-gray-100 mt-12 py-12">
      {/* Section Header */}
      <div className="text-center mb-10">
        <motion.h2
          className="text-4xl font-bold text-[#454EFF]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Latest Blogs
        </motion.h2>
        <motion.p
          className="text-lg text-gray-800 mt-2 font-medium"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Stay updated with the latest news and blogs of our company
        </motion.p>
      </div>

      {/* Blogs Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Blog Image */}
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Blog Content */}
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {blog.title}
              </h3>
              <p className="text-gray-700 mb-4">{blog.description}</p>
              <Link
                to={`/blog/${blog.id}`}
                state={blog} // Pass blog data here
                className="inline-block text-blue-500 hover:text-blue-600 font-semibold transition-colors"
              >
                Read More &rarr;
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

