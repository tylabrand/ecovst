import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { PageHeader } from '../ui/PageHeader';

interface BlogPostLayoutProps {
  title: string;
  date: string;
  readTime: string;
  author: string;
  categories: string[];
  children: React.ReactNode;
  featuredImage?: string;
}

export const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({
  title,
  date,
  readTime,
  author,
  categories,
  children,
  featuredImage = 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}) => {
  // Sample related posts - in a real app, these would be dynamically generated
  const relatedPosts = [
    {
      title: 'How to File KRA Returns for Your Business in Kenya',
      image: 'https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'May 10, 2025',
      slug: 'how-to-file-kra-returns-kenya'
    },
    {
      title: 'Top Accounting Software for Small Businesses in Kenya',
      image: 'https://images.pexels.com/photos/7681731/pexels-photo-7681731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'April 25, 2025',
      slug: 'accounting-software-small-businesses-kenya'
    },
    {
      title: 'Benefits of Registering a Limited Liability Company in Kenya',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'April 15, 2025',
      slug: 'benefits-registering-limited-liability-company-kenya'
    }
  ];

  return (
    <>
      <PageHeader
        title={title}
        breadcrumbs={[
          { label: 'Blog', path: '/blog' },
          { label: title, path: '#', isActive: true }
        ]}
        bgImage={featuredImage}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Post Meta */}
              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-8">
                <div className="flex items-center mr-6 mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{date}</span>
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{readTime}</span>
                </div>
                <div className="mb-2">
                  <span className="mr-1">By</span>
                  <span className="font-medium text-gray-700">{author}</span>
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    to={`/blog?category=${category}`}
                    className="inline-flex items-center text-sm font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {category}
                  </Link>
                ))}
              </div>

              {/* Post Content */}
              <div className="prose prose-lg max-w-none mb-12">
                {children}
              </div>

              {/* Share Links */}
              <div className="border-t border-b border-gray-200 py-6 mb-12">
                <div className="flex flex-wrap items-center">
                  <span className="font-medium text-gray-700 mr-4 mb-2">Share this article:</span>
                  <div className="flex space-x-2 mb-2">
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <button
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                      aria-label="Copy link"
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Link copied to clipboard!');
                      }}
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Back to Blog */}
              <div className="mb-12">
                <Link
                  to="/blog"
                  className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Blog
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author Box */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">About the Author</h3>
                <div className="flex items-center mb-4">
                  <img
                    src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt={author}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{author}</h4>
                    <p className="text-sm text-gray-600">Tax Consultant</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  An experienced tax consultant with over 10 years of experience helping businesses navigate the complexities of tax compliance in Kenya.
                </p>
              </div>

              {/* Related Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((post, index) => (
                    <div key={index} className="flex items-start">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-md mr-3"
                      />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 hover:text-blue-700 transition-colors">
                          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </h4>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Need Professional Help?</h3>
                <p className="text-gray-700 mb-4">
                  Our team of experts is ready to assist you with all your business needs.
                </p>
                <Link
                  to="/contact"
                  className="inline-block w-full bg-blue-700 hover:bg-blue-800 text-white text-center px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
