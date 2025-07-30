import React from 'react';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

const BlogPage = () => {
  const featuredPost = {
    title: 'The Future of Global Cloud Telephony: Trends for 2025',
    excerpt: 'Discover the latest trends shaping the future of business communications, from AI-powered routing to advanced analytics.',
    author: 'Sarah Chen',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'Industry Insights',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800'
  };

  const blogPosts = [
    {
      title: 'How to Reduce International Calling Costs by 70%',
      excerpt: 'Learn proven strategies to significantly reduce your international communication expenses while improving call quality.',
      author: 'Michael Rodriguez',
      date: 'January 12, 2025',
      readTime: '6 min read',
      category: 'Cost Optimization',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Setting Up Global Call Routing: Best Practices',
      excerpt: 'A comprehensive guide to implementing intelligent call routing for optimal customer experience across different time zones.',
      author: 'Emily Thompson',
      date: 'January 10, 2025',
      readTime: '10 min read',
      category: 'Technical Guide',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Cloud Telephony Security: What You Need to Know',
      excerpt: 'Understanding the security features and best practices for protecting your business communications in the cloud.',
      author: 'David Park',
      date: 'January 8, 2025',
      readTime: '7 min read',
      category: 'Security',
      image: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Scaling Your Sales Team with iGCT: A Case Study',
      excerpt: 'How TechCorp scaled from 50 to 500 sales representatives while maintaining call quality and reducing costs.',
      author: 'Sarah Chen',
      date: 'January 5, 2025',
      readTime: '9 min read',
      category: 'Case Study',
      image: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Integration Guide: Connecting iGCT with Your CRM',
      excerpt: 'Step-by-step instructions for integrating our cloud telephony platform with popular CRM systems.',
      author: 'Michael Rodriguez',
      date: 'January 3, 2025',
      readTime: '12 min read',
      category: 'Integration',
      image: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Why Remote Teams Choose Cloud Telephony',
      excerpt: 'Exploring the benefits of cloud-based communication solutions for distributed and remote teams.',
      author: 'Emily Thompson',
      date: 'December 30, 2024',
      readTime: '5 min read',
      category: 'Remote Work',
      image: 'https://images.pexels.com/photos/3183156/pexels-photo-3183156.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const categories = [
    'All Posts',
    'Industry Insights',
    'Technical Guide',
    'Cost Optimization',
    'Security',
    'Case Study',
    'Integration',
    'Remote Work'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-800 rounded-full text-sm font-medium mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              Blog & Resources
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Insights & Expertise
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                in Global Communications
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay ahead with the latest trends, best practices, and expert insights 
              in cloud telephony and global business communications.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-full">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-6 space-x-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <a
                  href="https://salescentri.com/resources/whitepapers-ebooks"
                  className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold transition-colors duration-200"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-sky-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-sky-50 hover:text-sky-600 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-sky-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-sky-600 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight hover:text-sky-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <a
                      href="https://salescentri.com/resources/whitepapers-ebooks"
                      className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium text-sm transition-colors duration-200"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <a
              href="https://salescentri.com/resources/whitepapers-ebooks"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated with iGCT Insights
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Get the latest articles, guides, and industry insights delivered to your inbox monthly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-sky-300 text-gray-900"
            />
            <a
              href="https://salescentri.com/resources/whitepapers-ebooks"
              className="px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;