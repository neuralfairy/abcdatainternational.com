import React from 'react';
import { ArrowRight, Phone, Calendar, Download, Zap } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-600 to-blue-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Main CTA */}
          <div className="mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4 mr-2" />
              Start Your iGCT Journey Today
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="block text-sky-200">
                Global Communications?
              </span>
            </h2>
            
            <p className="text-xl text-sky-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Join thousands of businesses worldwide who have already discovered the power 
              of iGCT. Start your free trial today and experience the difference.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a
                href="https://salescentri.com/get-started/free-trial"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <a
                href="https://salescentri.com/get-started/book-demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 text-white font-bold rounded-xl border-2 border-sky-400 hover:bg-sky-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Demo
              </a>
            </div>
          </div>

          {/* Secondary CTAs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Phone className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Speak with Expert</h3>
              <p className="text-sky-100 text-sm mb-4">
                Get personalized guidance from our iGCT specialists
              </p>
              <a
                href="https://salescentri.com/contact/sales-inquiry"
                className="text-white hover:text-sky-200 font-medium text-sm transition-colors duration-200"
              >
                Contact Sales →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Download className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Download Guide</h3>
              <p className="text-sky-100 text-sm mb-4">
                Complete guide to cloud telephony transformation
              </p>
              <a
                href="https://salescentri.com/resources/whitepapers-ebooks"
                className="text-white hover:text-sky-200 font-medium text-sm transition-colors duration-200"
              >
                Get Free Guide →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Zap className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">See It Live</h3>
              <p className="text-sky-100 text-sm mb-4">
                Interactive demo of our iGCT platform in action
              </p>
              <a
                href="https://salescentri.com/solutions/use-case-navigator/demo"
                className="text-white hover:text-sky-200 font-medium text-sm transition-colors duration-200"
              >
                Launch Demo →
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sky-100">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">No Setup Fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Cancel Anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">99.9% Uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;