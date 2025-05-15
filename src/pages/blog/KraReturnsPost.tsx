import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPostLayout } from '../../components/blog/BlogPostLayout';
import { AlertTriangle, CheckCircle, FileText, Download, Upload, CreditCard } from 'lucide-react';

export const KraReturnsPost = () => {
  return (
    <BlogPostLayout
      title="How to File KRA Returns for Your Business in Kenya (Step-by-Step Guide)"
      date="May 10, 2025"
      readTime="8 min read"
      author="Isha Dunga"
      categories={['Tax', 'Compliance', 'KRA', 'Business']}
      featuredImage="https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    >
      <p className="lead">
        Filing your KRA returns correctly is one of the most important tax obligations for any registered business in Kenya. 
        Whether you're a sole proprietor, limited company, or partnership, staying tax compliant ensures you avoid penalties 
        and maintain a healthy financial reputation.
      </p>

      <p>
        In this guide, we'll walk you through how to file KRA returns for your business, the documents you need, 
        common mistakes to avoid, and how professional tax advisory can help.
      </p>

      <h2>Why Filing KRA Returns Matters for Your Business</h2>
      
      <p>Failing to submit your KRA tax returns on time can result in:</p>
      
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertTriangle className="h-5 w-5 text-red-500" />
          </div>
          <div className="ml-3">
            <ul className="list-disc pl-5 space-y-2">
              <li>Penalties from the Kenya Revenue Authority (KRA)</li>
              <li>Ineligibility for tax compliance certificates</li>
              <li>Risk of audits or demand notices</li>
              <li>Delays in tendering or funding opportunities</li>
            </ul>
          </div>
        </div>
      </div>

      <p>
        That's why KRA tax filing in Kenya is not just a legal requirement — it's a strategic business responsibility.
      </p>

      <h2>Step-by-Step: How to File KRA Returns for a Business</h2>

      <div className="space-y-8 my-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-3 mr-4">
              <FileText className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 1: Log in to the KRA iTax Portal</h3>
              <p className="text-gray-700">
                Visit <a href="https://itax.kra.go.ke" className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">https://itax.kra.go.ke</a> and 
                log in using your business KRA PIN and password. If you don't have access, request credentials from your accountant or tax agent.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-3 mr-4">
              <FileText className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 2: Choose the Right Return Type</h3>
              <p className="text-gray-700 mb-3">
                Depending on your business structure, choose:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Income Tax – Company (for Limited Companies)</li>
                <li>Income Tax – Partnership</li>
                <li>Income Tax – Individual (for Sole Proprietorships)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-3 mr-4">
              <FileText className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 3: Prepare Your Financial Records</h3>
              <p className="text-gray-700 mb-3">
                Ensure your management accounts or audited financials are up to date. You'll need:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Profit and loss statements</li>
                <li>Balance sheets</li>
                <li>Withholding tax data (if applicable)</li>
                <li>Payroll records (for PAYE returns)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-3 mr-4">
              <Download className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 4: Download and Fill the Excel Return Template</h3>
              <p className="text-gray-700">
                KRA provides downloadable Excel sheets to fill out based on your return type. Fill out your financial details and validate using the macro tool.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-3 mr-4">
              <Upload className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 5: Upload and File</h3>
              <p className="text-gray-700">
                Once validated, upload the return on the iTax portal. You will receive an acknowledgment receipt once the return is successfully submitted.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-3 mr-4">
              <CreditCard className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 6: Make Payments (if applicable)</h3>
              <p className="text-gray-700">
                If your return results in a tax payable, generate a payment slip via iTax and pay via KRA's designated banks or mobile payment options.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>Common Mistakes to Avoid</h2>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Filing without proper supporting documents</li>
          <li>Using personal PIN instead of business PIN</li>
          <li>Missing VAT or PAYE submissions</li>
          <li>Uploading a corrupted or unvalidated return file</li>
        </ul>
      </div>

      <h2>Need Help with Tax Compliance in Kenya?</h2>
      
      <p>
        At Ecovest Consultants Ltd, we offer expert tax advisory and filing services to businesses across Kenya. 
        From helping you understand your tax obligations to ensuring your KRA returns are filed accurately and on time — we've got you covered.
      </p>

      <div className="bg-green-50 p-6 rounded-lg border border-green-100 my-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Tax Services Include:</h3>
        <ul className="space-y-2">
          {[
            'Annual tax filing',
            'KRA iTax compliance',
            'Tax health checks',
            'Advisory on PAYE, VAT, and Withholding Tax',
            'Tax Representative services for foreign firms'
          ].map((service, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>Conclusion</h2>
      
      <p>
        Filing your KRA returns correctly doesn't have to be stressful. With proper guidance, accurate records, 
        and a professional tax partner, you can stay compliant and focus on growing your business.
      </p>

      <div className="bg-blue-50 p-6 rounded-lg text-center my-8">
        <p className="text-lg font-medium text-gray-900 mb-4">
          Need help with your tax returns? Contact Ecovest today for a consultation.
        </p>
        <Link
          to="/services/tax-legal"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
        >
          Explore Our Tax Services
        </Link>
      </div>
    </BlogPostLayout>
  );
};
