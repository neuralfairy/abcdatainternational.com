import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search, Phone, Mail } from 'lucide-react';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const faqCategories = [
    {
      title: 'Getting Started',
      faqs: [
        {
          question: 'What is iGCT (Global Cloud Telephony)?',
          answer: 'iGCT (Global Cloud Telephony) is our comprehensive cloud-based communication platform that enables businesses to make and receive calls globally through the internet. It eliminates the need for traditional phone hardware and provides advanced features like intelligent call routing, analytics, and CRM integration.'
        },
        {
          question: 'How quickly can I get started with iGCT?',
          answer: 'You can be up and running in minutes! Our platform offers instant provisioning, which means you can sign up, configure your settings, and start making calls immediately. For more complex setups, our team can help you migrate from your existing system in 24-48 hours.'
        },
        {
          question: 'Do I need special hardware to use iGCT?',
          answer: 'No special hardware is required. iGCT works with your existing devices including computers, smartphones, tablets, and IP phones. You can make calls through our web app, mobile app, or integrate with your existing business applications.'
        },
        {
          question: 'What countries are covered by iGCT?',
          answer: 'iGCT provides coverage in 190+ countries worldwide. We offer local phone numbers, toll-free numbers, and premium call quality in all supported regions. Our global infrastructure ensures reliable service no matter where your business operates.'
        }
      ]
    },
    {
      title: 'Pricing & Plans',
      faqs: [
        {
          question: 'How does iGCT pricing work?',
          answer: 'Our pricing is transparent and scalable. We offer three main plans: Starter ($49/user/month), Professional ($149/user/month), and Enterprise (custom pricing). Each plan includes a base amount of calling minutes, and additional minutes are charged at competitive rates.'
        },
        {
          question: 'Are there any setup fees or long-term contracts?',
          answer: 'No, we believe in transparent pricing. There are no setup fees, no hidden costs, and no long-term contracts required. You can upgrade, downgrade, or cancel your plan at any time without penalties.'
        },
        {
          question: 'What happens if I exceed my minute limit?',
          answer: 'If you exceed your plan\'s included minutes, additional minutes are charged at our standard rates (starting at $0.05/minute). You\'ll receive notifications as you approach your limit, and you can upgrade your plan or purchase additional minute packages at any time.'
        },
        {
          question: 'Do you offer discounts for annual billing?',
          answer: 'Yes! When you choose annual billing, you save 20% compared to monthly billing. For example, our Professional plan costs $119/user/month when billed annually instead of $149/month when billed monthly.'
        }
      ]
    },
    {
      title: 'Features & Functionality',
      faqs: [
        {
          question: 'What advanced features does iGCT include?',
          answer: 'iGCT includes intelligent call routing, real-time analytics, team collaboration tools, CRM integration, call recording, IVR systems, conference calling, mobile apps, API access, and much more. The specific features available depend on your plan level.'
        },
        {
          question: 'Can I integrate iGCT with my existing CRM?',
          answer: 'Absolutely! iGCT integrates with popular CRM systems including Salesforce, HubSpot, Pipedrive, and many others. We also provide APIs and webhooks for custom integrations with your specific business applications.'
        },
        {
          question: 'How does call quality compare to traditional phone systems?',
          answer: 'iGCT delivers superior call quality using advanced codecs and our global network infrastructure. We maintain 99.9% uptime and provide crystal-clear voice quality that often exceeds traditional phone systems, especially for international calls.'
        },
        {
          question: 'Can I port my existing phone numbers to iGCT?',
          answer: 'Yes, you can port most existing phone numbers to iGCT. Our support team will guide you through the number porting process, which typically takes 1-3 business days for local numbers and up to 2 weeks for some international numbers.'
        }
      ]
    },
    {
      title: 'Technical Support',
      faqs: [
        {
          question: 'What kind of support do you provide?',
          answer: 'We offer 24/7 global support through multiple channels including live chat, email, phone, and support tickets. Our Professional and Enterprise plans include priority support with faster response times and dedicated account managers.'
        },
        {
          question: 'How reliable is the iGCT platform?',
          answer: 'iGCT maintains a 99.9% uptime SLA backed by our globally distributed infrastructure. We have redundant systems, automatic failover capabilities, and continuous monitoring to ensure maximum reliability for your business communications.'
        },
        {
          question: 'What security measures does iGCT implement?',
          answer: 'Security is our top priority. iGCT implements end-to-end encryption, SOC 2 Type II compliance, GDPR compliance, regular security audits, access controls, and secure data centers. All communications are encrypted in transit and at rest.'
        },
        {
          question: 'Do you provide training for new users?',
          answer: 'Yes! We provide comprehensive training resources including video tutorials, documentation, webinars, and one-on-one training sessions. Enterprise customers receive dedicated onboarding and training support from our customer success team.'
        }
      ]
    }
  ];

  const toggleExpanded = (categoryIndex: number, faqIndex: number) => {
    const id = categoryIndex * 100 + faqIndex;
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const isExpanded = (categoryIndex: number, faqIndex: number) => {
    const id = categoryIndex * 100 + faqIndex;
    return expandedItems.includes(id);
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-800 rounded-full text-sm font-medium mb-4">
              <HelpCircle className="h-4 w-4 mr-2" />
              Frequently Asked Questions
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get Answers to Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                iGCT Questions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to the most common questions about our Global Cloud Telephony platform, 
              pricing, features, and support options.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No results found</h3>
              <p className="text-gray-500">Try adjusting your search terms or browse all categories below.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
                    {category.title}
                  </h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <div
                        key={faqIndex}
                        className="bg-white border border-gray-200 rounded-xl hover:border-sky-200 transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleExpanded(categoryIndex, faqIndex)}
                          className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors duration-200"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          {isExpanded(categoryIndex, faqIndex) ? (
                            <ChevronUp className="h-5 w-5 text-sky-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        {isExpanded(categoryIndex, faqIndex) && (
                          <div className="px-6 pb-6">
                            <div className="pt-4 border-t border-gray-100">
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our support team is here to help you 24/7 with any questions about iGCT.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="https://salescentri.com/contact/support-request/live-chat"
              className="flex items-center justify-center px-6 py-4 bg-white border border-gray-200 rounded-xl hover:border-sky-300 hover:shadow-lg transition-all duration-300"
            >
              <Phone className="h-5 w-5 text-sky-600 mr-3" />
              <div className="text-left">
                <div className="font-semibold text-gray-900">Live Chat</div>
                <div className="text-sm text-gray-600">Get instant answers</div>
              </div>
            </a>
            
            <a
              href="https://salescentri.com/contact/support-request"
              className="flex items-center justify-center px-6 py-4 bg-white border border-gray-200 rounded-xl hover:border-sky-300 hover:shadow-lg transition-all duration-300"
            >
              <Mail className="h-5 w-5 text-sky-600 mr-3" />
              <div className="text-left">
                <div className="font-semibold text-gray-900">Email Support</div>
                <div className="text-sm text-gray-600">Detailed assistance</div>
              </div>
            </a>
          </div>

          <div className="mt-8">
            <a
              href="https://salescentri.com/get-started/book-demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqCategories.flatMap(category =>
              category.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            )
          })
        }}
      />
    </div>
  );
};

export default FAQPage;