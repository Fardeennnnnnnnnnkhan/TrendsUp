import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BlogDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state; // Access the state

  if (!blog) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-700">Blog not found. Please go back to the blogs page.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-16 py-12 px-6 max-w-4xl">
    {/* Blog Title */}
    <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center leading-tight">
      {blog.title}
    </h1>

    {/* Blog Image */}
    <div className="relative mb-12">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-72 sm:h-96 object-cover rounded-lg shadow-md"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
    </div>

    {/* Blog Metadata */}
    <div className="flex flex-wrap justify-center gap-8 text-gray-600 text-sm mb-10">
      <div>
        <span className="font-semibold">Author: </span>
        {blog.author || 'Unknown'}
      </div>
      <div>
        <span className="font-semibold">Published: </span>
        {blog.date || 'Unknown Date'}
      </div>
      <div>
        <span className="font-semibold">Category: </span>
        {blog.category || 'Uncategorized'}
      </div>
      <div>
        <span className="font-semibold">Reading Time: </span>
        {blog.readingTime || 'Unknown'}
      </div>
    </div>

    {/* Blog Content */}
    <div className="text-gray-800 text-lg leading-relaxed">
      <p className="mb-6">{blog.description || 'No description available.'}</p>
      <p className="mb-6">{blog.content}</p>
    </div>

    {/* Blog Stats */}
    <div className="flex justify-between items-center mt-12 text-gray-600">
      <div className="flex space-x-6 text-sm">
        <p>
          <span className="font-semibold">Likes:</span> {blog.likes || 0}
        </p>
        <p>
          <span className="font-semibold">Comments:</span> {blog.comments || 0}
        </p>
        <p>
          <span className="font-semibold">Views:</span> {blog.views || 0}
        </p>
      </div>
    </div>

    {/* Tags */}
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Tags</h2>
      <div className="flex flex-wrap gap-3">
        {blog.tags && blog.tags.length > 0 ? (
          blog.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))
        ) : (
          <p className="text-gray-500">No tags available.</p>
        )}
      </div>
    </div>

    {/* Social Media and Navigation */}
    <div className="flex justify-between items-center mt-12">
      <div className="flex space-x-4">
        <a
          href="#"
          className="text-gray-500 hover:text-blue-600 transition-colors"
          title="Share on Facebook"
        >
          <i className="fab fa-facebook fa-lg"></i>
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-blue-600 transition-colors"
          title="Share on Twitter"
        >
          <i className="fab fa-twitter fa-lg"></i>
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-blue-600 transition-colors"
          title="Share on LinkedIn"
        >
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Go Back
      </button>
    </div>
  </div>
  );
};

export default BlogDetails;