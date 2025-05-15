import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/ui/PageHeader';
import { Calendar, Clock, Search, Tag, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'How to File KRA Returns for Your Business in Kenya (Step-by-Step Guide)',
      excerpt: 'Filing your KRA returns correctly is one of the most important tax obligations for any registered business in Kenya. Learn how to navigate the process.',
      image: 'https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'May 10, 2025',
      readTime: '8 min read',
      author: 'Isha Dunga',
      categories: ['Tax', 'Compliance', 'KRA', 'Business'],
      slug: 'how-to-file-kra-returns-kenya'
    },
    {
      id: 2,
      title: 'Top Accounting Software for Small Businesses in Kenya (2025 Guide)',
      excerpt: 'For small businesses in Kenya, choosing the right accounting software can be the difference between spending hours on manual bookkeeping and having a streamlined financial management system.',
      image: 'https://images.pexels.com/photos/7681731/pexels-photo-7681731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'April 25, 2025',
      readTime: '10 min read',
      author: 'Jane Mwangi',
      categories: ['Accounting', 'Small Business', 'Technology', 'Bookkeeping'],
      slug: 'accounting-software-small-businesses-kenya'
    },
    {
      id: 3,
      title: 'Benefits of Registering a Limited Liability Company in Kenya',
      excerpt: 'For entrepreneurs and business owners in Kenya, choosing the right business structure is a critical decision that impacts everything from daily operations to long-term growth potential.',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'April 15, 2025',
      readTime: '9 min read',
      author: 'David Ochieng',
      categories: ['Business Registration', 'Legal', 'Entrepreneurship', 'Startups'],
      slug: 'benefits-registering-limited-liability-company-kenya'
    },
    {
      id: 4,
      title: 'Essential Corporate Training Programs for Kenyan SMEs',
      excerpt: 'In today\'s rapidly evolving business landscape, investing in employee training and development is no longer a luxury—it\'s a strategic necessity for Kenyan SMEs looking to grow, compete, and thrive.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'March 30, 2025',
      readTime: '11 min read',
      author: 'Isha Dunga',
      categories: ['Corporate Training', 'SMEs', 'Professional Development', 'Business Growth'],
      slug: 'corporate-training-programs-kenyan-smes'
    },
    {
      id: 5,
      title: 'How to Prepare a Bankable Business Plan for Investors in Kenya',
      excerpt: 'In Kenya\'s competitive business landscape, a well-crafted business plan is often the difference between securing investment and being overlooked.',
      image: 'https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'March 15, 2025',
      readTime: '12 min read',
      author: 'Isha Dunga',
      categories: ['Business Planning', 'Funding', 'Entrepreneurship', 'Startups'],
      slug: 'bankable-business-plan-investors-kenya'
    },
    {
      id: 6,
      title: 'Effective Cash Flow Management for Businesses',
      excerpt: 'Strategies and best practices for managing your business cash flow to ensure financial stability and growth.',
      image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'February 28, 2025',
      readTime: '6 min read',
      author: 'Jane Mwangi',
      categories: ['Financial Management', 'Cash Flow'],
      slug: ''
    }
  ];

  // Extract all unique categories
  const allCategories = Array.from(
    new Set(blogPosts.flatMap(post => post.categories))
  ).sort();

  // Filter posts based on search query and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === null ||
      post.categories.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  // Pagination
  const postsPerPage = 4;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Handle category selection
  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
    setCurrentPage(1);
  };

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  return (
    <>
      <PageHeader
        title="Blog & Insights"
        description="Stay updated with the latest news, insights, and expert advice on business, finance, and more."
        breadcrumbs={[
          { label: 'Blog', path: '/blog', isActive: true }
        ]}
        bgImage="https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              {/* Search Box */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Search</h3>
                <form onSubmit={handleSearch}>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-700"
                    >
                      <Search className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {allCategories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => handleCategoryClick(category)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-700 text-white'
                          : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <div key={index} className="flex items-start">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-md mr-3"
                      />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 hover:text-blue-700 transition-colors">
                          <Link to={post.slug ? `/blog/${post.slug}` : `#`}>{post.title}</Link>
                        </h4>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              {/* Filter Info */}
              {(searchQuery || selectedCategory) && (
                <div className="mb-6 p-4 bg-blue-50 rounded-md">
                  <div className="flex items-center justify-between">
                    <div>
                      {searchQuery && (
                        <p className="text-gray-700">
                          Search results for: <span className="font-medium">{searchQuery}</span>
                        </p>
                      )}
                      {selectedCategory && (
                        <p className="text-gray-700">
                          Category: <span className="font-medium">{selectedCategory}</span>
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory(null);
                      }}
                      className="text-blue-700 hover:text-blue-800 text-sm font-medium"
                    >
                      Clear Filters
                    </button>
                  </div>
                </div>
              )}

              {/* Blog Posts Grid */}
              {currentPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {currentPosts.map((post, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-transform duration-300 hover:transform hover:-translate-y-2"
                    >
                      <div className="h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.categories.map((category, catIndex) => (
                            <span
                              key={catIndex}
                              className="inline-flex items-center text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded-full"
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {category}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-700 transition-colors">
                          <Link to={post.slug ? `/blog/${post.slug}` : `#`}>{post.title}</Link>
                        </h3>
                        <p className="text-gray-700 mb-4">{post.excerpt}</p>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <div className="flex items-center mr-4">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">By {post.author}</span>
                          <Link
                            to={post.slug ? `/blog/${post.slug}` : `#`}
                            className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors"
                          >
                            Read More <ArrowRight className="ml-1 w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <p className="text-lg text-gray-700 mb-4">No posts found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory(null);
                    }}
                    className="text-blue-700 hover:text-blue-800 font-medium"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2">
                  <button
                    onClick={() => paginate(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-md ${
                      currentPage === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-blue-700 hover:bg-blue-50'
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className={`w-8 h-8 rounded-md ${
                        currentPage === index + 1
                          ? 'bg-blue-700 text-white'
                          : 'text-gray-700 hover:bg-blue-50'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-md ${
                      currentPage === totalPages
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-blue-700 hover:bg-blue-50'
                    }`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
