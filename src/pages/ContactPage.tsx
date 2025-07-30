import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, Users, Headphones } from 'lucide-react';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Sales Inquiry',
      description: 'Speak with our sales team about your communication needs',
      action: 'Call Sales',
      link: 'https://salescentri.com/contact/sales-inquiry',
      highlight: true
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant answers to your questions from our support team',
      action: 'Start Chat',
      link: 'https://salescentri.com/contact/support-request/live-chat',
      highlight: false
    },
    {
      icon: Calendar,
      title: 'Book a Demo',
      description: 'Schedule a personalized demo of our iGCT platform',
      action: 'Schedule Demo',
      link: 'https://salescentri.com/get-started/book-demo',
      highlight: false
    },
    {
      icon: Headphones,
      title: 'Technical Support',
      description: 'Get help with technical issues or platform questions',
      action: 'Get Support',
      link: 'https://salescentri.com/contact/support-request',
      highlight: false
    }
  ];

  const offices = [
    {
      city: 'Henderson',
      region: 'Nevada, USA',
      address: 'Henderson Business District',
      timezone: 'PST (UTC-8)',
      isHeadquarters: true
    },
    {
      city: 'London',
      region: 'United Kingdom',
      address: 'EMEA Operations Center',
      timezone: 'GMT (UTC+0)',
      isHeadquarters: false
    },
    {
      city: 'Singapore',
      region: 'Asia Pacific',
      address: 'APAC Operations Center',
      timezone: 'SGT (UTC+8)',
      isHeadquarters: false
    }
  ];

  const supportHours = [
    { region: 'Americas', hours: '24/7 Support Available', coverage: 'Full Coverage' },
    { region: 'EMEA', hours: '24/7 Support Available', coverage: 'Full Coverage' },
    { region: 'APAC', hours: '24/7 Support Available', coverage: 'Full Coverage' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-800 rounded-full text-sm font-medium mb-4">
              <Phone className="h-4 w-4 mr-2" />
              Get in Touch
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              We're Here to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                Help You Succeed
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you need sales support, technical assistance, or just want to learn more 
              about iGCT, our global team is ready to help you 24/7.
            </p>
          </div>

          {/* Quick Contact Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">24/7</div>
              <div className="text-gray-600">Global Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">&lt;5min</div>
              <div className="text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">190+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">99%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose How You'd Like to Connect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer multiple ways to get in touch, so you can choose what works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl border-2 transition-all duration-300 transform hover:-translate-y-2 ${
                  method.highlight
                    ? 'border-sky-500 bg-gradient-to-br from-sky-50 to-blue-50 shadow-xl'
                    : 'border-gray-200 bg-white hover:border-sky-300 hover:shadow-lg'
                }`}
              >
                {method.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Recommended
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl text-white mb-4 ${
                    method.highlight 
                      ? 'bg-gradient-to-br from-sky-500 to-blue-600' 
                      : 'bg-gradient-to-br from-sky-400 to-blue-500'
                  }`}>
                    <method.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{method.description}</p>
                  <a
                    href={method.link}
                    className={`inline-flex items-center justify-center w-full px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      method.highlight
                        ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700 shadow-lg'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    {method.action}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-xl text-gray-600">
              Prefer to reach out directly? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
            <form action="https://salescentri.com/get-started/contact" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How can we help you? *
                </label>
                <select
                  name="inquiryType"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200"
                >
                  <option value="">Select an option</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="demo">Request Demo</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200"
                  placeholder="Tell us about your communication needs or ask any questions..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Message
                  <Mail className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With offices around the world, we're always close to our customers and ready to provide local support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {offices.map((office, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  office.isHeadquarters
                    ? 'border-sky-500 bg-gradient-to-br from-sky-50 to-blue-50'
                    : 'border-gray-200 bg-white hover:border-sky-300'
                }`}
              >
                {office.isHeadquarters && (
                  <div className="inline-flex items-center px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-xs font-medium mb-4">
                    Headquarters
                  </div>
                )}
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-sky-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">{office.city}</h3>
                </div>
                <p className="text-gray-600 mb-2">{office.region}</p>
                <p className="text-gray-600 mb-4">{office.address}</p>
                <div className="flex items-center text-sm text-sky-600">
                  <Clock className="h-4 w-4 mr-2" />
                  {office.timezone}
                </div>
              </div>
            ))}
          </div>

          {/* Support Hours */}
          <div className="bg-gradient-to-br from-gray-50 to-sky-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Support Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportHours.map((support, index) => (
                <div key={index} className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">{support.region}</h4>
                  <p className="text-sky-600 font-medium mb-1">{support.hours}</p>
                  <p className="text-gray-600 text-sm">{support.coverage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gradient-to-r from-sky-5 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Our support team is standing by to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://salescentri.com/contact/support-request/live-chat"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Live Chat
            </a>
            <a
              href="https://salescentri.com/contact/support-request/submit-ticket"
              className="inline-flex items-center justify-center px-8 py-4 bg-sky-600 text-white font-semibold rounded-xl border border-sky-400 hover:bg-sky-700 transition-colors duration-200"
            >
              <Headphones className="mr-2 h-5 w-5" />
              Submit Support Ticket
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;