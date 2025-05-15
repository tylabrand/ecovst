import React from 'react';
import { ServicePageLayout } from '../../components/layout/ServicePageLayout';
import { ClipboardCheck, Home, Settings, FileText } from 'lucide-react';

export const BusinessSetupPage = () => {
  return (
    <ServicePageLayout
      title="Business Set-Up Services"
      description="End-to-end business setup services to help you launch your operations smoothly."
      breadcrumbs={[
        { label: 'Services', path: '/services' },
        { label: 'Business Set-Up', path: '/services/business-setup', isActive: true }
      ]}
      bgImage="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      currentServicePath="/services/business-setup"
    >
      <div className="prose prose-lg max-w-none">
        <p className="lead text-xl text-gray-700 mb-8">
          Our business setup services provide comprehensive support to help you establish and operationalize your business efficiently, from planning to implementation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <ClipboardCheck className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Planning</h3>
            <p className="text-gray-700">
              Development of comprehensive business plans, including market analysis, financial projections, and operational strategies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <Home className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Setup</h3>
            <p className="text-gray-700">
              Assistance with office location selection, lease negotiations, space planning, and facility setup.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <Settings className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Systems Implementation</h3>
            <p className="text-gray-700">
              Selection and implementation of essential business systems, including accounting, CRM, and operational software.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <FileText className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Operational Procedures</h3>
            <p className="text-gray-700">
              Development of standard operating procedures, policies, and workflows to ensure efficient business operations.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Comprehensive Business Setup Support</h2>
        
        <p className="mb-4">
          Setting up a new business involves numerous tasks and considerations beyond the legal registration process. Our business setup services provide end-to-end support to help you establish a solid operational foundation for your business.
        </p>
        
        <p className="mb-4">
          We work closely with you to understand your business vision, goals, and requirements, then develop a tailored setup plan that addresses all aspects of establishing your business operations.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Our Business Setup Services Include:</h3>
        
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Business model development and validation</li>
          <li>Market entry strategy</li>
          <li>Business plan preparation</li>
          <li>Financial planning and budgeting</li>
          <li>Office location selection and setup</li>
          <li>IT infrastructure planning and implementation</li>
          <li>Business systems selection and setup</li>
          <li>Operational procedures and policies</li>
          <li>Recruitment and HR setup</li>
          <li>Vendor and supplier identification</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Business Setup Process</h2>
        
        <p className="mb-4">
          We follow a structured approach to business setup, ensuring that all essential elements are addressed in a logical sequence.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Setup Process:</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Initial Consultation:</strong> Understanding your business concept and requirements</li>
            <li><strong>Planning:</strong> Developing a comprehensive setup plan with timelines</li>
            <li><strong>Legal Establishment:</strong> Handling registration and compliance requirements</li>
            <li><strong>Physical Setup:</strong> Office location, facilities, and infrastructure</li>
            <li><strong>Systems Implementation:</strong> Setting up essential business systems</li>
            <li><strong>Operational Framework:</strong> Developing procedures, policies, and workflows</li>
            <li><strong>Resource Acquisition:</strong> Staffing, equipment, and supplier relationships</li>
            <li><strong>Launch Support:</strong> Assistance during the initial operational phase</li>
          </ol>
        </div>

        <p className="text-lg font-medium text-gray-900 mb-4">
          Partner with Ecovest Consultants to ensure a smooth and efficient business setup process, allowing you to focus on building your customer base and growing your business.
        </p>
      </div>
    </ServicePageLayout>
  );
};
