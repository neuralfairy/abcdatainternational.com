import React from 'react';
import { Star, Quote, Building, Users, TrendingUp } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TechGlobal Inc.',
      industry: 'Technology',
      content: 'iGCT transformed our global communications. We reduced costs by 40% while improving call quality across 25 countries. The platform is incredibly reliable.',
      rating: 5,
      metrics: { improvement: '40% cost reduction', satisfaction: '99% uptime' }
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP Operations',
      company: 'ScaleCore Solutions',
      industry: 'Professional Services',
      content: 'The scalability is phenomenal. We went from 50 to 500 users in months without any infrastructure headaches. Support team is world-class.',
      rating: 5,
      metrics: { improvement: '10x scaling', satisfaction: '24/7 support' }
    },
    {
      name: 'Emily Thompson',
      role: 'Head of Sales',
      company: 'Global Dynamics',
      industry: 'Manufacturing',
      content: 'Our international sales team productivity increased by 35% with iGCT. The call analytics and CRM integration are game-changers for our business.',
      rating: 5,
      metrics: { improvement: '35% productivity', satisfaction: 'Full CRM sync' }
    }
  ];

  const caseStudies = [
    {
      company: 'Enterprise Corp',
      industry: 'Financial Services',
      employees: '2,500+',
      improvement: '50% Cost Reduction',
      timeframe: '6 months',
      icon: Building
    },
    {
      company: 'Global Retail',
      industry: 'E-commerce',
      employees: '1,200+',
      improvement: '3x Call Volume',
      timeframe: '3 months',
      icon: Users
    },
    {
      company: 'TechStart Inc',
      industry: 'Technology',
      employees: '800+',
      improvement: '99.9% Uptime',
      timeframe: '12 months',
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-800 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4 mr-2" />
            Customer Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Loved by Businesses
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              Around the World
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how companies are transforming their communications and achieving 
            remarkable results with our iGCT platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-sky-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="h-8 w-8 text-sky-400" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-sky-50 rounded-lg">
                <div className="text-center">
                  <div className="text-sm font-semibold text-sky-600">
                    {testimonial.metrics.improvement}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-sky-600">
                    {testimonial.metrics.satisfaction}
                  </div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-sky-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Measurable Results Across Industries
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-sky-200 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-sky-100 rounded-lg mb-4">
                  <study.icon className="h-6 w-6 text-sky-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{study.company}</h4>
                <p className="text-sm text-gray-600 mb-3">{study.industry} • {study.employees} employees</p>
                <div className="text-lg font-bold text-sky-600 mb-1">{study.improvement}</div>
                <div className="text-sm text-gray-500">in {study.timeframe}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-6">
              See how iGCT can transform your business communications with a personalized demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://salescentri.com/resources/case-studies"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-sky-300 text-sky-600 font-semibold rounded-lg hover:bg-sky-50 transition-colors duration-200"
              >
                View Case Studies
              </a>
              <a
                href="https://salescentri.com/get-started/book-demo"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-200"
              >
                Get Your Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;