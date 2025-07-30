import React from 'react';
import { Globe, Phone, Shield, BarChart3, Zap, Users, Clock, Headphones, Cloud, Settings } from 'lucide-react';

const FeaturesPage = () => {
  const coreFeatures = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect to 190+ countries with premium voice quality and local presence numbers.',
      features: ['Local phone numbers in 190+ countries', 'Premium voice quality', 'Toll-free numbers', 'International call routing']
    },
    {
      icon: Phone,
      title: 'Smart Call Routing',
      description: 'Intelligent call distribution with advanced routing algorithms and failover systems.',
      features: ['AI-powered call routing', 'Geographic routing', 'Time-based routing', 'Load balancing']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud-based telephony with enterprise-grade reliability and performance.',
      features: ['Auto-scaling capacity', 'Global data centers', 'CDN-optimized delivery', 'API-first architecture']
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Comprehensive insights and reporting for data-driven communication decisions.',
      features: ['Live call dashboards', 'Performance metrics', 'Custom reports', 'Data export tools']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption and compliance certifications.',
      features: ['End-to-end encryption', 'SOC 2 compliance', 'GDPR compliant', 'Access controls']
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Seamless integration with your existing CRM, helpdesk, and business applications.',
      features: ['CRM integration', 'API webhooks', 'Single sign-on (SSO)', 'Third-party connectors']
    }
  ];

  const advancedFeatures = [
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Unified communication tools for seamless team coordination.',
      highlights: ['Team chat', 'Video conferencing', 'File sharing', 'Presence indicators']
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring with 99.9% uptime SLA guarantee.',
      highlights: ['Real-time monitoring', 'Automatic failover', 'Health checks', 'Alert systems']
    },
    {
      icon: Headphones,
      title: 'Global Support',
      description: 'Expert technical support available around the clock worldwide.',
      highlights: ['24/7 live support', 'Multi-language support', 'Dedicated account manager', 'Training resources']
    },
    {
      icon: Zap,
      title: 'Instant Provisioning',
      description: 'Get started in minutes with instant account setup and configuration.',
      highlights: ['Quick setup', 'Auto-configuration', 'Bulk provisioning', 'Self-service portal']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-800 rounded-full text-sm font-medium mb-4">
              <Zap className="h-4 w-4 mr-2" />
              iGCT Platform Features
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                Global Communication
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the comprehensive suite of features that make iGCT the leading 
              choice for businesses scaling their global communications.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">190+</div>
              <div className="text-gray-600">Countries Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">24/7</div>
              <div className="text-gray-600">Global Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">5000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Platform Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build, manage, and scale your global communications infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-sky-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl text-white">
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take your communications to the next level with our advanced features and capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advancedFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-sky-200 hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{feature.description}</p>
                <div className="space-y-1">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="text-xs text-sky-600 font-medium">
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo CTA */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            See iGCT Features in Action
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Experience our platform firsthand with an interactive demo tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://salescentri.com/solutions/use-case-navigator/demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              Launch Interactive Demo
            </a>
            <a
              href="https://salescentri.com/get-started/book-demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-sky-600 text-white font-semibold rounded-xl border border-sky-400 hover:bg-sky-700 transition-colors duration-200"
            >
              Schedule Live Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;