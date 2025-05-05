import React from 'react';
import { Calendar, Clock } from 'lucide-react';

export const LatestBlogPosts = () => {
  const blogPosts = [
    {
      title: 'Understanding the New Tax Regulations for Kenyan Businesses',
      excerpt: 'A comprehensive guide to the latest tax changes and how they might impact your business operations.',
      image: 'https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'May 15, 2025',
      readTime: '8 min read',
      author: 'Isha Dunga'
    },
    {
      title: 'The Benefits of Regular Financial Audits for Growing Companies',
      excerpt: 'Discover how implementing regular audit practices can strengthen your business finances and prevent costly errors.',
      image: 'https://images.pexels.com/photos/7681731/pexels-photo-7681731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'May 3, 2025',
      readTime: '6 min read',
      author: 'Austine Okeyo'
    },
    {
      title: 'Navigating Business Registration: A Step-by-Step Guide',
      excerpt: 'Everything you need to know about registering your business in Kenya, from paperwork to timelines.',
      image: 'https://images.pexels.com/photos/6893988/pexels-photo-6893988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'April 28, 2025',
      readTime: '10 min read',
      author: 'Agnes Nyawira'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-700">
            Stay updated with the latest financial and business insights from our expert team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 transition-transform duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">By {post.author}</span>
                  <a 
                    href="#"
                    className="text-blue-700 font-medium hover:text-blue-800 transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#"
            className="inline-block border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-md font-medium transition duration-300"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};