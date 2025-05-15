import React from 'react';
import { ServicePageLayout } from '../../components/layout/ServicePageLayout';
import { Calculator, FileCheck, BarChart, FileText } from 'lucide-react';

export const AccountingBookkeepingPage = () => {
  return (
    <ServicePageLayout
      title="Accounting & Bookkeeping Services"
      description="We provide outsourced Accounting and Bookkeeping services tailored for businesses of all sizes."
      breadcrumbs={[
        { label: 'Services', path: '/services' },
        { label: 'Accounting & Bookkeeping', path: '/services/accounting-bookkeeping', isActive: true }
      ]}
      bgImage="https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      currentServicePath="/services/accounting-bookkeeping"
    >
      <div className="prose prose-lg max-w-none">
        <p className="lead text-xl text-gray-700 mb-8">
          Our team of Certified Public Accountants ensures accurate financial reporting, cash flow management, and compliance with international and local accounting standards (GAAP, IFRS, IAS).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <Calculator className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Monthly Management Accounts</h3>
            <p className="text-gray-700">
              Regular financial reporting to help you understand your business performance and make informed decisions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <FileCheck className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Bank & M-PESA Reconciliations</h3>
            <p className="text-gray-700">
              Accurate reconciliation of all your financial accounts to ensure complete and error-free records.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <BarChart className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Periodic Financial Statements</h3>
            <p className="text-gray-700">
              Comprehensive financial statements prepared according to international standards and local requirements.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <FileText className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Statutory Returns</h3>
            <p className="text-gray-700">
              Timely preparation and filing of VAT, PAYE, NHIF, NSSF, and other statutory returns to ensure compliance.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Our Accounting Services?</h2>
        
        <p className="mb-4">
          At Ecovest Consultants, we understand that accurate financial records are the foundation of a successful business. Our accounting and bookkeeping services are designed to provide you with clear financial insights while ensuring compliance with all regulatory requirements.
        </p>
        
        <p className="mb-4">
          We work with businesses of all sizes, from startups to established enterprises, providing tailored solutions that meet your specific needs. Our team of experienced accountants stays up-to-date with the latest accounting standards and tax regulations to ensure your business remains compliant.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Our Comprehensive Accounting Services Include:</h3>
        
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Monthly management accounts</li>
          <li>Bank and M-PESA reconciliations</li>
          <li>Periodic financial statements</li>
          <li>Mpesa analysis and reporting</li>
          <li>Audit support and documentation</li>
          <li>Statutory returns (VAT, PAYE, NHIF, NSSF)</li>
          <li>Financial analysis and reporting</li>
          <li>Cash flow management</li>
          <li>Budgeting and forecasting</li>
          <li>Accounting system setup and training</li>
        </ul>

        <p className="text-lg font-medium text-gray-900 mb-4">
          Let us translate your numbers into insights so you can focus on what matters most—growing your business.
        </p>
      </div>
    </ServicePageLayout>
  );
};
