import React from 'react';
import { ServicePageLayout } from '../../components/layout/ServicePageLayout';
import { Building, FileCheck, Stamp, FileText } from 'lucide-react';

export const CompanyRegistrationPage = () => {
  return (
    <ServicePageLayout
      title="Company Registration Services"
      description="Complete company formation and licensing services to get your business legally established and operational."
      breadcrumbs={[
        { label: 'Services', path: '/services' },
        { label: 'Company Registration', path: '/services/company-registration', isActive: true }
      ]}
      bgImage="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      currentServicePath="/services/company-registration"
    >
      <div className="prose prose-lg max-w-none">
        <p className="lead text-xl text-gray-700 mb-8">
          We provide end-to-end company registration services to help you establish your business entity quickly and efficiently, ensuring compliance with all legal requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <Building className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Company Formation</h3>
            <p className="text-gray-700">
              Complete registration of your business entity with the Registrar of Companies, including name reservation and documentation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <FileCheck className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Licensing</h3>
            <p className="text-gray-700">
              Obtaining all necessary licenses and permits required for your business operations from relevant authorities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <Stamp className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Regulatory Approvals</h3>
            <p className="text-gray-700">
              Securing necessary approvals from regulatory bodies specific to your industry or business activities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <FileText className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Legal Documentation</h3>
            <p className="text-gray-700">
              Preparation of all required legal documents including memorandum and articles of association, shareholder agreements, etc.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Comprehensive Company Registration Services</h2>
        
        <p className="mb-4">
          Starting a business involves navigating complex legal and regulatory requirements. Our company registration services are designed to simplify this process, allowing you to focus on developing your business while we handle the legal formalities.
        </p>
        
        <p className="mb-4">
          We have extensive experience in registering various types of business entities in Kenya, including private limited companies, public companies, partnerships, and sole proprietorships. Our team ensures that your business is properly structured and compliant with all legal requirements.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Our Company Registration Services Include:</h3>
        
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Business name search and reservation</li>
          <li>Preparation of registration documents</li>
          <li>Filing with the Registrar of Companies</li>
          <li>Obtaining certificate of incorporation</li>
          <li>KRA PIN registration</li>
          <li>VAT registration (if applicable)</li>
          <li>NSSF and NHIF registration</li>
          <li>Business permits and licenses</li>
          <li>Industry-specific regulatory approvals</li>
          <li>Corporate secretarial services</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Business Entities We Register</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">We provide registration services for:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Private Limited Companies:</strong> Limited liability entities owned by shareholders</li>
            <li><strong>Public Limited Companies:</strong> Companies that can offer shares to the public</li>
            <li><strong>Partnerships:</strong> Business arrangements between two or more parties</li>
            <li><strong>Sole Proprietorships:</strong> Businesses owned and operated by a single individual</li>
            <li><strong>Limited Liability Partnerships (LLPs):</strong> Combining features of partnerships and companies</li>
            <li><strong>Branch Offices:</strong> For foreign companies establishing presence in Kenya</li>
            <li><strong>Non-Governmental Organizations (NGOs):</strong> Non-profit entities</li>
          </ul>
        </div>

        <p className="text-lg font-medium text-gray-900 mb-4">
          Let us handle the complexities of company registration so you can focus on building and growing your business.
        </p>
      </div>
    </ServicePageLayout>
  );
};
