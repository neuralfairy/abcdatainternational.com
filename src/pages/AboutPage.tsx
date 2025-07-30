import React from 'react';
import { Users, Globe, Award, Target, Heart, Zap } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: '2019', label: 'Founded', icon: Target },
    { number: '5000+', label: 'Happy Customers', icon: Users },
    { number: '190+', label: 'Countries Served', icon: Globe },
    { number: '99.9%', label: 'Uptime Achievement', icon: Award }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision we make starts with our customers. Their success is our success, and we never lose sight of that.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible in global communications, leveraging cutting-edge technology.'
    },
    {
      icon: Users,
      title: 'Team Excellence',
      description: 'Our diverse, global team brings together the best minds in telecommunications, engineering, and customer success.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We believe in connecting the world, breaking down communication barriers for businesses everywhere.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Chief Executive Officer',
      bio: '15+ years in telecommunications and cloud infrastructure. Previously led engineering teams at major telecom providers.',
      expertise: 'Strategic Leadership, Cloud Architecture'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Former principal engineer at leading cloud platforms. Expert in scalable communication systems and AI-driven routing.',
      expertise: 'Cloud Technology, AI Systems'
    },
    {
      name: 'Emily Thompson',
      role: 'VP of Customer Success',
      bio: 'Dedicated to ensuring every customer achieves their communication goals. 12+ years in B2B customer experience.',
      expertise: 'Customer Experience, Business Growth'
    },
    {
      name: 'David Park',
      role: 'VP of Engineering',
      bio: 'Leads our world-class engineering team. Expert in distributed systems and real-time communication protocols.',
      expertise: 'Systems Engineering, Protocol Design'
    }
  ];

  const milestones = [
    { year: '2019', title: 'Company Founded', description: 'Started with a vision to democratize global communications' },
    { year: '2020', title: 'First 100 Customers', description: 'Reached our first milestone of serving 100 businesses globally' },
    { year: '2021', title: 'Series A Funding', description: 'Secured $10M to accelerate product development and expansion' },
    { year: '2022', title: 'Global Expansion', description: 'Extended coverage to 190+ countries with local presence' },
    { year: '2023', title: '1000+ Customers', description: 'Reached 1000+ enterprise customers across all industries' },
    { year: '2024', title: 'AI Integration', description: 'Launched AI-powered call routing and analytics features' },
    { year: '2025', title: '5000+ Customers', description: 'Continuing to scale and serve businesses worldwide' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-800 rounded-full text-sm font-medium mb-4">
              <Users className="h-4 w-4 mr-2" />
              About AbcDataInternational
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Connecting Businesses
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                Around the World
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to democratize global communications, making it easy for 
              businesses of all sizes to connect with customers worldwide through our 
              innovative iGCT platform.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To empower businesses worldwide with reliable, affordable, and scalable 
                  global communication solutions. We believe that geography should never 
                  be a barrier to business success.
                </p>
              </div>
              
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A world where every business, regardless of size or location, can 
                  communicate seamlessly with customers globally, driving growth and 
                  creating meaningful connections across borders.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why We Started</h3>
                <p className="text-sky-100 leading-relaxed">
                  "After seeing countless businesses struggle with expensive, complex 
                  international communication systems, we knew there had to be a better way. 
                  We founded AbcDataInternational to make global communications as simple 
                  as making a local call."
                </p>
                <div className="mt-6 pt-6 border-t border-sky-300">
                  <div className="font-semibold">- Sarah Chen, CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-sky-200 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl text-white mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced leaders driving our mission to transform global communications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-sky-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sky-600 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="text-xs text-sky-600 font-medium">{member.expertise}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://salescentri.com/company/careers"
              className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold"
            >
              Join our team
              <Users className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startup to global platform, here are the key milestones in our story.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-sky-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div className="flex-1 p-6">
                    <div className={`bg-white p-6 rounded-xl border border-gray-200 shadow-md ${
                      index % 2 === 0 ? 'ml-8 text-right' : 'mr-8 text-left'
                    }`}>
                      <div className="text-2xl font-bold text-sky-600 mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-sky-500 rounded-full border-4 border-white shadow-lg z-10 relative"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Story?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Become part of the global communications revolution and see how iGCT can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://salescentri.com/get-started/free-trial"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              Start Free Trial
            </a>
            <a
              href="https://salescentri.com/get-started/book-demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-sky-600 text-white font-semibold rounded-xl border border-sky-400 hover:bg-sky-700 transition-colors duration-200"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;