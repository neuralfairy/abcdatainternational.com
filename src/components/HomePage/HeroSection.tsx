import React from 'react';
import { Phone, Globe, Zap, Users, ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-sky-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">
                <Zap className="h-4 w-4 mr-2" />
                #1 Global Cloud Telephony Solution
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Scale Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                  Global Outreach
                </span>
                with iGCT
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Empower your business with cutting-edge Global Cloud Telephony solutions. 
                Connect with customers worldwide, reduce costs by up to 70%, and scale your operations seamlessly.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <div className="bg-sky-100 p-2 rounded-lg">
                  <Globe className="h-5 w-5 text-sky-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">190+ Countries</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-sky-100 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-sky-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-sky-100 p-2 rounded-lg">
                  <Phone className="h-5 w-5 text-sky-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">24/7 Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://salescentri.com/get-started/free-trial"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <a
                href="https://salescentri.com/solutions/use-case-navigator/demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-sky-300 hover:text-sky-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-sm text-gray-500">
                <span className="font-semibold text-gray-700">5000+</span> businesses trust us
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-semibold text-gray-700">24/7</span> enterprise support
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl p-8 shadow-2xl">
              {/* Mock Dashboard */}
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">iGCT Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-sky-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-sky-600">2.4M</div>
                    <div className="text-sm text-gray-600">Calls Today</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Global Coverage</span>
                    <span className="font-medium">190 Countries</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-sky-500 to-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Live</span>
                </div>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -z-10 bottom-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;