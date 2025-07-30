import React, { useState } from 'react';
import { Check, ArrowRight, Star, Users, Phone, Globe } from 'lucide-react';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with global communications',
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        'Up to 10 users',
        '1,000 minutes included',
        'Basic call routing',
        '5 countries coverage',
        'Email support',
        'Basic analytics',
        'Mobile app access',
        'CRM integration (basic)'
      ],
      highlight: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing teams that need advanced features and global reach',
      monthlyPrice: 149,
      annualPrice: 119,
      features: [
        'Up to 100 users',
        '10,000 minutes included',
        'Advanced call routing',
        '50 countries coverage',
        'Priority support',
        'Advanced analytics',
        'Team collaboration tools',
        'Advanced CRM integration',
        'Custom phone numbers',
        'Call recording',
        'API access',
        'SSO integration'
      ],
      highlight: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solution for large organizations with custom requirements',
      monthlyPrice: null,
      annualPrice: null,
      features: [
        'Unlimited users',
        'Custom minute packages',
        'AI-powered routing',
        '190+ countries coverage',
        '24/7 dedicated support',
        'Custom analytics',
        'White-label options',
        'Enterprise integrations',
        'Dedicated infrastructure',
        'SLA guarantees',
        'Custom development',
        'Compliance certifications'
      ],
      highlight: false,
      cta: 'Contact Sales'
    }
  ];

  const addOns = [
    { name: 'Additional Minutes', description: 'Extra minutes for high-volume calling', price: '$0.05/min' },
    { name: 'Premium Support', description: '24/7 phone support with SLA', price: '$99/month' },
    { name: 'Advanced Analytics', description: 'Custom dashboards and reporting', price: '$49/month' },
    { name: 'White-label Branding', description: 'Custom branding and UI', price: '$199/month' }
  ];

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.'
    },
    {
      question: 'What happens if I exceed my minute limit?',
      answer: 'Additional minutes are charged at competitive rates. You can also upgrade to a higher plan or purchase minute add-ons.'
    },
    {
      question: 'Do you offer custom pricing for large enterprises?',
      answer: 'Yes, we offer custom pricing and packages for enterprises with specific requirements. Contact our sales team for a quote.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for any of our plans. You can get started immediately after signing up.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-800 rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4 mr-2" />
              Transparent Pricing
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                Pricing Plans
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your business. All plans include our core features 
              with no hidden fees or long-term commitments.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-16">
            <div className="flex items-center bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  billingCycle === 'annual'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Annual
                <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 transition-all duration-300 ${
                  plan.highlight
                    ? 'border-sky-500 shadow-xl scale-105'
                    : 'border-gray-200 hover:border-sky-300 hover:shadow-lg'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      {plan.monthlyPrice ? (
                        <>
                          <div className="text-5xl font-bold text-gray-900">
                            ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                          </div>
                          <div className="text-gray-600">
                            per user / {billingCycle === 'monthly' ? 'month' : 'month (billed annually)'}
                          </div>
                          {billingCycle === 'annual' && (
                            <div className="text-green-600 text-sm font-medium mt-1">
                              Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          <div className="text-3xl font-bold text-gray-900">Custom</div>
                          <div className="text-gray-600">Contact us for pricing</div>
                        </>
                      )}
                    </div>

                    <a
                      href={
                        plan.cta === 'Contact Sales'
                          ? 'https://salescentri.com/contact/sales-inquiry'
                          : 'https://salescentri.com/get-started/free-trial'
                      }
                      className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        plan.highlight
                          ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700 shadow-lg hover:shadow-xl'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Features included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
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

      {/* Add-ons */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Add-ons & Extensions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your plan with additional features and services tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addOn, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-sky-200 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{addOn.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{addOn.description}</p>
                <div className="text-lg font-bold text-sky-600">{addOn.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Have questions about our pricing? We have answers.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a
              href="https://salescentri.com/contact/sales-inquiry"
              className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold"
            >
              Contact our sales team
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Join thousands of businesses already using iGCT to transform their communications.
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

export default PricingPage;