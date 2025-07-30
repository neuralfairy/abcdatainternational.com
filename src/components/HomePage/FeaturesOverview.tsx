import React from 'react';
import { Globe, Phone, Zap, Shield, BarChart3, Users, Clock, Headphones } from 'lucide-react';

const FeaturesOverview = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect to 190+ countries with premium voice quality and local presence.',
      highlight: '190+ Countries'
    },
    {
      icon: Phone,
      title: 'Cloud Telephony',
      description: 'Advanced cloud-based phone systems with intelligent call routing.',
      highlight: 'Smart Routing'
    },
    {
      icon: Zap,
      title: 'Instant Scaling',
      description: 'Scale your operations up or down instantly without hardware constraints.',
      highlight: 'Auto-Scale'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption and compliance.',
      highlight: 'SOC 2 Certified'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Comprehensive insights and reporting for data-driven decisions.',
      highlight: 'Live Dashboards'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Unified communication platform for seamless team coordination.',
      highlight: 'Unified Comms'
    },
    {
      icon: Clock,
      title: '99.9% Uptime',
      description: 'Reliable service with redundant infrastructure and failover systems.',
      highlight: 'Always On'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Expert technical support available around the clock worldwide.',
      highlight: 'Global Support'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-800 rounded-full text-sm font-medium mb-4">
            <Zap className="h-4 w-4 mr-2" />
            iGCT Core Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              Global Communication
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive iGCT (Global Cloud Telephony) platform provides all the tools 
            and features your business needs to communicate effectively across the globe.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-sky-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <span className="text-xs font-medium text-sky-600 bg-sky-50 px-2 py-1 rounded-full">
                    {feature.highlight}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="https://salescentri.com/solutions/use-case-navigator/demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore All Features
            </a>
            <a
              href="https://salescentri.com/get-started/book-demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-sky-300 hover:text-sky-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;