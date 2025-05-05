import React from 'react';
import { FileText, BarChart, Briefcase, Building, ClipboardCheck } from 'lucide-react';

export const ServicesOverview = () => {
  const services = [
    {
      title: 'Tax Services',
      icon: <FileText className="w-12 h-12 text-blue-700" />,
      description: 'Comprehensive tax services including advisory, compliance, and representation to optimize your tax position.',
      items: ['Tax Advisory', 'Tax Compliance', 'Tax Representation', 'Tax Planning']
    },
    {
      title: 'Audit & Assurance',
      icon: <BarChart className="w-12 h-12 text-blue-700" />,
      description: 'Independent verification of financial statements and risk assessment to ensure accuracy and compliance.',
      items: ['Financial Audits', 'Risk Assessments', 'Compliance Audits', 'Internal Control Reviews']
    },
    {
      title: 'Business Advisory',
      icon: <Briefcase className="w-12 h-12 text-blue-700" />,
      description: 'Strategic planning and financial modeling to guide your business toward sustainable growth and profitability.',
      items: ['Strategic Planning', 'Financial Modeling', 'Business Restructuring', 'Performance Improvement']
    },
    {
      title: 'Business Registration',
      icon: <Building className="w-12 h-12 text-blue-700" />,
      description: 'Complete company formation and licensing services to get your business legally established and operational.',
      items: ['Company Formation', 'Business Licensing', 'Regulatory Approvals', 'Legal Documentation']
    },
    {
      title: 'Compliance Services',
      icon: <ClipboardCheck className="w-12 h-12 text-blue-700" />,
      description: 'Regulatory filings and KRA returns handled efficiently to maintain your compliance status and avoid penalties.',
      items: ['Regulatory Filings', 'KRA Returns', 'Statutory Compliance', 'Compliance Monitoring']
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-700">
            We offer a comprehensive range of financial and business consulting services tailored to meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              id={service.title.toLowerCase().replace(/\s+/g, '-') + '-services'}
              className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-700">
                    <span className="mr-2 text-blue-700">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a 
                href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}-services`}
                className="inline-block mt-6 text-blue-700 font-medium hover:text-blue-800 transition-colors"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};