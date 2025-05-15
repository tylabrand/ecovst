import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText, BarChart, Briefcase, Building, ClipboardCheck, Calculator,
  Users, CreditCard, CheckCircle, ArrowRight, Phone
} from 'lucide-react';
import { PageHeader } from '../../components/ui/PageHeader';

export const ServicesPage = () => {
  const services = [
    {
      title: 'Accounting & Bookkeeping',
      icon: <Calculator className="w-12 h-12 text-blue-700" />,
      description: 'We provide outsourced Accounting and Bookkeeping services tailored for businesses of all sizes.',
      path: '/services/accounting-bookkeeping',
      items: ['Monthly management accounts', 'Bank and M-PESA reconciliations', 'Periodic financial statements', 'Audit support']
    },
    {
      title: 'Tax & Legal',
      icon: <FileText className="w-12 h-12 text-blue-700" />,
      description: 'We help businesses in Kenya navigate the complexities of tax compliance and legal obligations.',
      path: '/services/tax-legal',
      items: ['Annual tax compliance', 'Tax health checks', 'KRA compliance support', 'Tax planning strategies']
    },
    {
      title: 'Corporate Training Programs',
      icon: <Users className="w-12 h-12 text-blue-700" />,
      description: 'Customized corporate training programs aimed at strengthening organizational performance.',
      path: '/services/corporate-training',
      items: ['Management & Leadership', 'Strategic Planning', 'Finance for Non-Finance Managers', 'Team Building']
    },
    {
      title: 'Business Advisory',
      icon: <Briefcase className="w-12 h-12 text-blue-700" />,
      description: 'Strategic planning and financial modeling to guide your business toward sustainable growth.',
      path: '/services/business-advisory',
      items: ['Strategic Planning', 'Financial Modeling', 'Business Restructuring', 'Performance Improvement']
    },
    {
      title: 'Business Development',
      icon: <BarChart className="w-12 h-12 text-blue-700" />,
      description: 'Comprehensive business development services to help your company grow and expand.',
      path: '/services/business-development',
      items: ['Market Analysis', 'Growth Strategies', 'Business Expansion', 'Partnership Development']
    },
    {
      title: 'Company Registration',
      icon: <Building className="w-12 h-12 text-blue-700" />,
      description: 'Complete company formation and licensing services to get your business legally established.',
      path: '/services/company-registration',
      items: ['Company Formation', 'Business Licensing', 'Regulatory Approvals', 'Legal Documentation']
    },
    {
      title: 'Business Set-Up',
      icon: <ClipboardCheck className="w-12 h-12 text-blue-700" />,
      description: 'End-to-end business setup services to help you launch your operations smoothly.',
      path: '/services/business-setup',
      items: ['Business Planning', 'Office Setup', 'Systems Implementation', 'Operational Procedures']
    },
    {
      title: 'Payroll Services',
      icon: <CreditCard className="w-12 h-12 text-blue-700" />,
      description: 'Comprehensive payroll management services to ensure accurate and timely payments.',
      path: '/services/payroll-services',
      items: ['Payroll Processing', 'Statutory Compliance', 'Employee Benefits', 'Payroll Reporting']
    }
  ];

  const benefits = [
    {
      title: 'Expertise & Experience',
      description: 'Our team brings years of specialized experience across various industries and business functions.'
    },
    {
      title: 'Tailored Solutions',
      description: 'We customize our services to meet your specific business needs and objectives.'
    },
    {
      title: 'Comprehensive Approach',
      description: 'Our integrated service offerings address all aspects of your business operations.'
    },
    {
      title: 'Local Knowledge',
      description: 'Deep understanding of the Kenyan business environment, regulations, and market dynamics.'
    }
  ];

  const industries = [
    'Manufacturing & Production', 'Retail & Distribution', 'Real Estate & Construction',
    'Technology & IT', 'Healthcare & Pharmaceuticals', 'Education & Training',
    'Financial Services', 'Hospitality & Tourism', 'Agriculture & Agribusiness'
  ];

  return (
    <>
      <PageHeader
        title="Our Services"
        description="We offer a comprehensive range of professional services designed to support businesses across various industries and stages of growth."
        breadcrumbs={[
          { label: 'Services', path: '/services', isActive: true }
        ]}
        bgImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Services Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Business Solutions
            </h2>
            <p className="text-lg text-gray-700">
              At Ecovest Consultants Ltd, we offer a wide range of services to help your business grow, comply, and thrive.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
                className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100"
              >
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <span className="mr-2 text-blue-700">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.path}
                  className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors"
                >
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Quick Links Section */}
          <div className="mt-20 bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Quick Links to Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="bg-white p-4 rounded-md shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-center"
                >
                  <div className="mr-3 text-blue-700">
                    {service.icon}
                  </div>
                  <span className="font-medium">{service.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-lg text-gray-700">
              We are committed to delivering exceptional value and results for our clients through our professional services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex">
                <div className="mr-4 text-blue-700">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-700">
              Our services are tailored to meet the unique needs of businesses across various industries.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-base font-medium"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our services can help your business succeed.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-medium text-lg transition-colors"
          >
            <Phone className="mr-2 w-5 h-5" />
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
};
