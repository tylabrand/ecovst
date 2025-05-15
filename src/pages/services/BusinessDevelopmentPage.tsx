import React from 'react';
import { ServicePageLayout } from '../../components/layout/ServicePageLayout';
import { BarChart, Search, Expand, Handshake } from 'lucide-react';

export const BusinessDevelopmentPage = () => {
  return (
    <ServicePageLayout
      title="Business Development Services"
      description="Comprehensive business development services to help your company grow and expand."
      breadcrumbs={[
        { label: 'Services', path: '/services' },
        { label: 'Business Development', path: '/services/business-development', isActive: true }
      ]}
      bgImage="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      currentServicePath="/services/business-development"
    >
      <div className="prose prose-lg max-w-none">
        <p className="lead text-xl text-gray-700 mb-8">
          Our business development services are designed to identify growth opportunities, develop strategic partnerships, and expand your market presence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <Search className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Analysis</h3>
            <p className="text-gray-700">
              Comprehensive market research to identify opportunities, trends, and competitive positioning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <BarChart className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Strategies</h3>
            <p className="text-gray-700">
              Develop and implement effective strategies to accelerate business growth and increase market share.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <Expand className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Expansion</h3>
            <p className="text-gray-700">
              Support for expanding into new markets, product lines, or customer segments to drive revenue growth.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <Handshake className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Partnership Development</h3>
            <p className="text-gray-700">
              Identify and establish strategic partnerships and alliances to enhance your business capabilities.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accelerate Your Business Growth</h2>
        
        <p className="mb-4">
          In today's competitive business landscape, having a strategic approach to business development is essential for sustainable growth. Our business development services are designed to help you identify and capitalize on opportunities that drive revenue and expand your market presence.
        </p>
        
        <p className="mb-4">
          We work closely with your team to understand your business objectives, market position, and growth aspirations. Based on this understanding, we develop tailored strategies and action plans to help you achieve your goals.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Our Business Development Services Include:</h3>
        
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Market research and analysis</li>
          <li>Competitive intelligence</li>
          <li>Growth strategy development</li>
          <li>New market entry planning</li>
          <li>Product/service diversification</li>
          <li>Strategic partnership identification</li>
          <li>Business networking and relationship building</li>
          <li>Sales strategy optimization</li>
          <li>Customer acquisition planning</li>
          <li>Revenue stream diversification</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Business Development Approach</h2>
        
        <p className="mb-4">
          We take a systematic and data-driven approach to business development, ensuring that all strategies and initiatives are aligned with your overall business objectives and market realities.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Development Process:</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Situation Analysis:</strong> Comprehensive assessment of your current business position</li>
            <li><strong>Opportunity Identification:</strong> Research and analysis to identify growth opportunities</li>
            <li><strong>Strategy Formulation:</strong> Development of tailored growth strategies</li>
            <li><strong>Implementation Planning:</strong> Creation of detailed action plans with clear milestones</li>
            <li><strong>Execution Support:</strong> Guidance and assistance during implementation</li>
            <li><strong>Performance Monitoring:</strong> Tracking progress and making necessary adjustments</li>
          </ol>
        </div>

        <p className="text-lg font-medium text-gray-900 mb-4">
          Partner with Ecovest Consultants to unlock your business's growth potential and achieve sustainable expansion in your target markets.
        </p>
      </div>
    </ServicePageLayout>
  );
};
