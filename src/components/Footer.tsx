import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Phone, Mail, MapPin, Shield, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-2 rounded-lg">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">AbcDataInternational</h3>
                <p className="text-sm text-sky-400">Global Cloud Telephony</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering businesses worldwide with cutting-edge iGCT (Global Cloud Telephony) solutions 
              that scale your outreach and drive growth.
            </p>
            <div className="flex space-x-4">
              <Shield className="h-5 w-5 text-sky-400" />
              <Award className="h-5 w-5 text-sky-400" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">Pricing</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">About Us</Link></li>
              <li><a href="https://salescentri.com/resources/case-studies" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">Case Studies</a></li>
              <li><a href="https://salescentri.com/docs/user-guide" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">Documentation</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="https://salescentri.com/solutions/psa-suite" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">PSA Suite</a></li>
              <li><a href="https://salescentri.com/platforms/lead-management/voice-ai-agent" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">Voice AI Agent</a></li>
              <li><a href="https://salescentri.com/solutions/by-use-case/sdr-teams" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">SDR Teams</a></li>
              <li><a href="https://salescentri.com/solutions/by-industry/it" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">IT Industry</a></li>
              <li><a href="https://salescentri.com/solutions/use-case-navigator" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">Use Cases</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-sky-400" />
                <span className="text-gray-300 text-sm">Henderson, Nevada</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-sky-400" />
                <a href="https://salescentri.com/contact" className="text-gray-300 hover:text-sky-400 text-sm transition-colors duration-200">
                  Get Support
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-sky-400" />
                <a href="https://salescentri.com/contact/sales-inquiry" className="text-gray-300 hover:text-sky-400 text-sm transition-colors duration-200">
                  Sales Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm text-gray-400">
              <a href="https://salescentri.com/trust/security-privacy" className="hover:text-sky-400 transition-colors duration-200">Privacy Policy</a>
              <a href="https://salescentri.com/trust/compliance-certifications" className="hover:text-sky-400 transition-colors duration-200">Terms of Service</a>
              <a href="https://salescentri.com/trust/security-privacy" className="hover:text-sky-400 transition-colors duration-200">Security</a>
              <a href="https://salescentri.com/trust/compliance-certifications" className="hover:text-sky-400 transition-colors duration-200">Certifications</a>
            </div>
            <div className="text-sm text-gray-400 text-center md:text-right">
              <p>&copy; 2025 AbcDataInternational Solutions. All rights reserved.</p>
              <p className="mt-1">
                <a 
                  href="https://salescentri.com?utm_source=AbcDataInternational.com&utm_medium=footer&utm_campaign=partner_network" 
                  className="hover:text-sky-400 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Powered by Sales Intelligence Platform
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;