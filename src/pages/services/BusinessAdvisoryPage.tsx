import React from 'react';
import { ServicePageLayout } from '../../components/layout/ServicePageLayout';
import { Briefcase, LineChart, RefreshCw, TrendingUp } from 'lucide-react';

export const BusinessAdvisoryPage = () => {
  return (
    <ServicePageLayout
      title="Business Advisory Services"
      description="Strategic planning and financial modeling to guide your business toward sustainable growth and profitability."
      breadcrumbs={[
        { label: 'Services', path: '/services' },
        { label: 'Business Advisory', path: '/services/business-advisory', isActive: true }
      ]}
      bgImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      currentServicePath="/services/business-advisory"
    >
      <div className="prose prose-lg max-w-none">
        <p className="lead text-xl text-gray-700 mb-8">
          Our business advisory services provide expert guidance to help you navigate challenges, identify opportunities, and achieve your business objectives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <Briefcase className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Planning</h3>
            <p className="text-gray-700">
              Develop comprehensive business strategies aligned with your vision, mission, and long-term objectives.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <LineChart className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Modeling</h3>
            <p className="text-gray-700">
              Create detailed financial models to forecast performance, evaluate scenarios, and support decision-making.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <RefreshCw className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Restructuring</h3>
            <p className="text-gray-700">
              Optimize your organizational structure, operations, and processes to improve efficiency and profitability.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <TrendingUp className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Improvement</h3>
            <p className="text-gray-700">
              Identify and implement strategies to enhance operational efficiency, productivity, and financial performance.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Expert Business Guidance</h2>
        
        <p className="mb-4">
          In today's dynamic business environment, having access to expert advice can make the difference between success and failure. Our business advisory services provide you with the insights and guidance needed to navigate challenges and capitalize on opportunities.
        </p>
        
        <p className="mb-4">
          Our team of experienced business advisors brings a wealth of knowledge across various industries and functional areas. We work closely with you to understand your unique business needs and develop tailored solutions that drive results.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Our Business Advisory Services Include:</h3>
        
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Strategic business planning</li>
          <li>Financial analysis and modeling</li>
          <li>Business process optimization</li>
          <li>Risk assessment and management</li>
          <li>Market entry strategies</li>
          <li>Competitive analysis</li>
          <li>Business valuation</li>
          <li>Succession planning</li>
          <li>Merger and acquisition advisory</li>
          <li>Crisis management and turnaround strategies</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Approach</h2>
        
        <p className="mb-4">
          We take a collaborative approach to business advisory, working as an extension of your team to deliver practical solutions that address your specific challenges and opportunities.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Advisory Process:</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Assessment:</strong> Thorough analysis of your current business situation</li>
            <li><strong>Strategy Development:</strong> Creation of tailored strategies and action plans</li>
            <li><strong>Implementation Support:</strong> Guidance and assistance during execution</li>
            <li><strong>Monitoring & Refinement:</strong> Ongoing evaluation and adjustment of strategies</li>
          </ol>
        </div>

        <p className="text-lg font-medium text-gray-900 mb-4">
          Partner with Ecovest Consultants for expert business advisory services that drive sustainable growth and long-term success.
        </p>
      </div>
    </ServicePageLayout>
  );
};
