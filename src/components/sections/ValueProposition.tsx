import React from 'react';
import { CheckCircle } from 'lucide-react';

export const ValueProposition = () => {
  const benefits = [
    {
      title: 'Maximized Tax Efficiency',
      description: 'Our strategic tax planning helps minimize tax liability while ensuring full compliance with regulatory requirements.'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Stay ahead of changing regulations with our comprehensive compliance services to avoid penalties and legal issues.'
    },
    {
      title: 'Strategic Business Growth',
      description: 'Leverage our financial expertise to make informed decisions that drive sustainable growth and profitability.'
    },
    {
      title: 'Financial Clarity',
      description: 'Gain clear insights into your financial position with accurate reporting and expert financial analysis.'
    }
  ];

  return (
    <section id="value-proposition" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Expert Financial Solutions for Your Business
          </h2>
          <p className="text-lg text-gray-700">
            We provide comprehensive services designed to optimize your finances, ensure compliance, and support your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-4 text-blue-700">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};