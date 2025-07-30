import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Users, Phone } from 'lucide-react';

const ROICalculator = () => {
  const [employees, setEmployees] = useState(50);
  const [currentCost, setCurrentCost] = useState(15000);
  const [callVolume, setCallVolume] = useState(10000);

  // Calculate savings and ROI
  const monthlySavings = Math.round(currentCost * 0.3); // 30% average savings
  const annualSavings = monthlySavings * 12;
  const roiPercentage = Math.round((annualSavings / (currentCost * 12)) * 100);
  const implementationCost = employees * 50; // $50 per employee setup cost
  const paybackMonths = Math.round(implementationCost / monthlySavings);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Calculator */}
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-2xl border border-sky-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-800 rounded-full text-sm font-medium mb-4">
                <Calculator className="h-4 w-4 mr-2" />
                ROI Calculator
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Calculate Your iGCT Savings
              </h3>
              <p className="text-gray-600">
                See how much you can save by switching to our cloud telephony solution
              </p>
            </div>

            <div className="space-y-6">
              {/* Employees Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>10</span>
                    <span className="font-medium text-sky-600">{employees}</span>
                    <span>1000+</span>
                  </div>
                </div>
              </div>

              {/* Current Cost Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Monthly Telecom Cost ($)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="500"
                    value={currentCost}
                    onChange={(e) => setCurrentCost(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>$1K</span>
                    <span className="font-medium text-sky-600">${currentCost.toLocaleString()}</span>
                    <span>$50K+</span>
                  </div>
                </div>
              </div>

              {/* Call Volume Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Call Volume
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={callVolume}
                    onChange={(e) => setCallVolume(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>1K</span>
                    <span className="font-medium text-sky-600">{callVolume.toLocaleString()}</span>
                    <span>100K+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Your Potential Savings
              </h3>
              <p className="text-gray-600 mb-8">
                Based on your inputs, here's what you could save with iGCT:
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                <div className="flex items-center mb-2">
                  <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-green-800">Monthly Savings</span>
                </div>
                <div className="text-2xl font-bold text-green-700">
                  ${monthlySavings.toLocaleString()}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center mb-2">
                  <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-blue-800">Annual Savings</span>
                </div>
                <div className="text-2xl font-bold text-blue-700">
                  ${annualSavings.toLocaleString()}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100">
                <div className="flex items-center mb-2">
                  <Calculator className="h-5 w-5 text-purple-600 mr-2" />
                  <span className="text-sm font-medium text-purple-800">ROI Percentage</span>
                </div>
                <div className="text-2xl font-bold text-purple-700">
                  {roiPercentage}%
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl border border-orange-100">
                <div className="flex items-center mb-2">
                  <TrendingUp className="h-5 w-5 text-orange-600 mr-2" />
                  <span className="text-sm font-medium text-orange-800">Payback Period</span>
                </div>
                <div className="text-2xl font-bold text-orange-700">
                  {paybackMonths} months
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-6 rounded-xl text-white">
              <h4 className="text-lg font-semibold mb-2">Ready to start saving?</h4>
              <p className="text-sky-100 mb-4">
                Get a personalized quote and see exactly how iGCT can transform your business communications.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://salescentri.com/contact/sales-inquiry/request-quote"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Get Custom Quote
                </a>
                <a
                  href="https://salescentri.com/get-started/book-demo"
                  className="inline-flex items-center justify-center px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg border border-sky-400 hover:bg-sky-700 transition-colors duration-200"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;