import React from 'react';
import { CheckCircle } from 'lucide-react';

export const FeaturedProducts = () => {
  const products = [
    {
      name: 'EcoTax Pro',
      description: 'A comprehensive tax planning and compliance software solution for businesses of all sizes.',
      image: 'https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Automated tax calculations',
        'Real-time compliance updates',
        'Built-in KRA integration',
        'Customizable reporting'
      ]
    },
    {
      name: 'Business Formation Package',
      description: 'A complete solution for new business registration, including all necessary legal documentation and filings.',
      image: 'https://images.pexels.com/photos/6893988/pexels-photo-6893988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Company name reservation',
        'Registration with relevant authorities',
        'Tax ID acquisition',
        'Initial compliance setup'
      ]
    },
    {
      name: 'Financial Analytics Dashboard',
      description: 'Real-time financial monitoring and analytics platform providing actionable business insights.',
      image: 'https://images.pexels.com/photos/5483073/pexels-photo-5483073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Real-time cash flow tracking',
        'Customizable KPI monitoring',
        'Trend analysis and forecasting',
        'Mobile-friendly interface'
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Featured Products
          </h2>
          <p className="text-lg text-gray-700">
            Explore our proprietary solutions designed to streamline your financial management and business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact"
                  className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-medium transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};