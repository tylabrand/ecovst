import React from 'react';
import { ServicePageLayout } from '../../components/layout/ServicePageLayout';
import { FileText, Shield, TrendingDown, Building } from 'lucide-react';

export const TaxLegalPage = () => {
  return (
    <ServicePageLayout
      title="Tax & Legal Services"
      description="We help businesses in Kenya navigate the complexities of tax compliance and legal obligations."
      breadcrumbs={[
        { label: 'Services', path: '/services' },
        { label: 'Tax & Legal', path: '/services/tax-legal', isActive: true }
      ]}
      bgImage="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      currentServicePath="/services/tax-legal"
    >
      <div className="prose prose-lg max-w-none">
        <p className="lead text-xl text-gray-700 mb-8">
          Our tax consultants offer strategic tax planning and advisory services that minimize liabilities while ensuring compliance with KRA regulations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <FileText className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Annual Tax Compliance</h3>
            <p className="text-gray-700">
              Comprehensive tax return preparation and filing services to ensure you meet all statutory deadlines.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <Shield className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tax Health Checks</h3>
            <p className="text-gray-700">
              Thorough review of your tax position to identify risks and opportunities for optimization.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <TrendingDown className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tax Planning Strategies</h3>
            <p className="text-gray-700">
              Strategic tax planning to minimize your tax liability while maintaining full compliance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <Building className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">KRA Representation</h3>
            <p className="text-gray-700">
              Professional representation during KRA audits, assessments, and dispute resolution.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Comprehensive Tax Services</h2>
        
        <p className="mb-4">
          Navigating Kenya's tax landscape can be challenging for businesses of all sizes. At Ecovest Consultants, we provide expert tax services designed to ensure compliance while optimizing your tax position.
        </p>
        
        <p className="mb-4">
          Our team of tax professionals stays current with the latest tax legislation and KRA requirements to provide you with accurate, timely, and strategic tax advice.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Our Tax Services Include:</h3>
        
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Annual tax compliance and filing</li>
          <li>Tax health checks and risk assessment</li>
          <li>KRA compliance support and resolution</li>
          <li>Tax planning and savings strategies</li>
          <li>Tax representative services for foreign companies</li>
          <li>VAT registration and compliance</li>
          <li>Corporate tax planning</li>
          <li>Personal income tax services</li>
          <li>Tax dispute resolution</li>
          <li>Tax due diligence</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Legal Advisory Services</h2>
        
        <p className="mb-4">
          In addition to our tax services, we provide legal advisory services to help businesses navigate regulatory requirements and legal obligations.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Our Legal Services Include:</h3>
        
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Business contract review and drafting</li>
          <li>Regulatory compliance advisory</li>
          <li>Corporate governance</li>
          <li>Legal risk assessment</li>
          <li>Employment law compliance</li>
        </ul>

        <p className="text-lg font-medium text-gray-900 mb-4">
          Whether you're facing a demand notice, additional assessment, or simply want to stay compliant—leave your taxes to the professionals.
        </p>
      </div>
    </ServicePageLayout>
  );
};
