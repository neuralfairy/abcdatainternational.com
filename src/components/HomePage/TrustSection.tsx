import React from 'react';
import { Shield, Award, Users, Globe, CheckCircle } from 'lucide-react';

const TrustSection = () => {
  const certifications = [
    { name: 'SOC 2 Type II', icon: Shield },
    { name: 'ISO 27001', icon: Award },
    { name: 'GDPR Compliant', icon: CheckCircle },
    { name: 'HIPAA Ready', icon: Shield },
  ];

  const stats = [
    { number: '5000+', label: 'Enterprise Clients', icon: Users },
    { number: '190+', label: 'Countries Covered', icon: Globe },
    { number: '99.9%', label: 'Uptime SLA', icon: CheckCircle },
    { number: '24/7', label: 'Global Support', icon: Shield },
  ];

  const clientLogos = [
    'TechCorp', 'GlobalInc', 'DataSys', 'CloudTech', 'NetSolutions', 'DigitalPro'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Leading
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              Global Enterprises
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of businesses worldwide who trust our iGCT platform 
            for their critical communication needs.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl text-white mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Security & Compliance Certifications
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-sky-200 hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-sky-100 rounded-lg mb-4 group-hover:bg-sky-200 transition-colors duration-300">
                  <cert.icon className="h-6 w-6 text-sky-600" />
                </div>
                <div className="font-semibold text-gray-900 text-sm">
                  {cert.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-8">
            Trusted by industry leaders worldwide
          </h3>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-4 font-bold text-gray-700 text-center hover:opacity-100 transition-opacity duration-300"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://salescentri.com/trust/security-privacy"
            className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold transition-colors duration-200"
          >
            <Shield className="h-5 w-5 mr-2" />
            Learn about our security practices
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;