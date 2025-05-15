import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, BarChart, Briefcase, Building, ClipboardCheck, Calculator, Users, CreditCard } from 'lucide-react';

export const ServicesOverview = () => {
  const services = [
    {
      title: 'Accounting & Bookkeeping',
      icon: <Calculator className="w-12 h-12 text-blue-700" />,
      description: 'We provide outsourced Accounting and Bookkeeping services tailored for businesses of all sizes.',
      path: '/services/accounting-bookkeeping',
      items: ['Monthly management accounts', 'Bank reconciliations', 'Financial statements', 'Statutory returns']
    },
    {
      title: 'Tax & Legal',
      icon: <FileText className="w-12 h-12 text-blue-700" />,
      description: 'We help businesses in Kenya navigate the complexities of tax compliance and legal obligations.',
      path: '/services/tax-legal',
      items: ['Tax compliance', 'Tax planning', 'KRA representation', 'Legal advisory']
    },
    {
      title: 'Corporate Training',
      icon: <Users className="w-12 h-12 text-blue-700" />,
      description: 'Customized corporate training programs aimed at strengthening organizational performance.',
      path: '/services/corporate-training',
      items: ['Leadership development', 'Strategic planning', 'Finance for non-finance managers', 'Team building']
    },
    {
      title: 'Business Advisory',
      icon: <Briefcase className="w-12 h-12 text-blue-700" />,
      description: 'Strategic planning and financial modeling to guide your business toward sustainable growth.',
      path: '/services/business-advisory',
      items: ['Strategic planning', 'Financial modeling', 'Business restructuring', 'Performance improvement']
    },
    {
      title: 'Business Development',
      icon: <BarChart className="w-12 h-12 text-blue-700" />,
      description: 'Comprehensive business development services to help your company grow and expand.',
      path: '/services/business-development',
      items: ['Market analysis', 'Growth strategies', 'Business expansion', 'Partnership development']
    },
    {
      title: 'Company Registration',
      icon: <Building className="w-12 h-12 text-blue-700" />,
      description: 'Complete company formation and licensing services to get your business legally established.',
      path: '/services/company-registration',
      items: ['Company formation', 'Business licensing', 'Regulatory approvals', 'Legal documentation']
    },
    {
      title: 'Business Set-Up',
      icon: <ClipboardCheck className="w-12 h-12 text-blue-700" />,
      description: 'End-to-end business setup services to help you launch your operations smoothly.',
      path: '/services/business-setup',
      items: ['Business planning', 'Office setup', 'Systems implementation', 'Operational procedures']
    },
    {
      title: 'Payroll Services',
      icon: <CreditCard className="w-12 h-12 text-blue-700" />,
      description: 'Comprehensive payroll management services to ensure accurate and timely payments.',
      path: '/services/payroll-services',
      items: ['Payroll processing', 'Statutory compliance', 'Employee benefits', 'Payroll reporting']
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
          {services.slice(0, 6).map((service, index) => (
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
              <Link
                to={service.path}
                className="inline-block mt-6 text-blue-700 font-medium hover:text-blue-800 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};