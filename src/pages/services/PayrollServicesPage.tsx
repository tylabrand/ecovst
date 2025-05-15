import React from 'react';
import { ServicePageLayout } from '../../components/layout/ServicePageLayout';
import { CreditCard, FileCheck, BarChart, Shield } from 'lucide-react';

export const PayrollServicesPage = () => {
  return (
    <ServicePageLayout
      title="Payroll Services"
      description="Comprehensive payroll management services to ensure accurate and timely payments while maintaining compliance."
      breadcrumbs={[
        { label: 'Services', path: '/services' },
        { label: 'Payroll Services', path: '/services/payroll-services', isActive: true }
      ]}
      bgImage="https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      currentServicePath="/services/payroll-services"
    >
      <div className="prose prose-lg max-w-none">
        <p className="lead text-xl text-gray-700 mb-8">
          Our payroll services provide end-to-end management of your employee compensation process, ensuring accuracy, compliance, and efficiency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <CreditCard className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Payroll Processing</h3>
            <p className="text-gray-700">
              Accurate calculation and processing of employee salaries, wages, bonuses, and deductions on a regular schedule.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <FileCheck className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Statutory Compliance</h3>
            <p className="text-gray-700">
              Management of PAYE, NSSF, NHIF, and other statutory deductions and filings to ensure full compliance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <BarChart className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Payroll Reporting</h3>
            <p className="text-gray-700">
              Comprehensive payroll reports including summaries, tax reports, and custom reports for management purposes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <Shield className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Employee Benefits</h3>
            <p className="text-gray-700">
              Administration of employee benefits including health insurance, retirement plans, and other compensation elements.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Reliable Payroll Management</h2>
        
        <p className="mb-4">
          Payroll management is a critical business function that requires accuracy, timeliness, and compliance with various regulations. Our payroll services are designed to take this burden off your shoulders, allowing you to focus on your core business activities.
        </p>
        
        <p className="mb-4">
          We use advanced payroll systems and follow strict processes to ensure that your employees are paid correctly and on time, while all statutory requirements are met. Our team stays updated with the latest changes in tax laws and employment regulations to ensure ongoing compliance.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Our Payroll Services Include:</h3>
        
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Monthly payroll processing</li>
          <li>Calculation of salaries, wages, and benefits</li>
          <li>Processing of bonuses, commissions, and allowances</li>
          <li>Management of deductions and withholdings</li>
          <li>PAYE calculations and returns</li>
          <li>NSSF and NHIF contributions and returns</li>
          <li>Generation and distribution of pay slips</li>
          <li>Bank payment processing</li>
          <li>Payroll reconciliation</li>
          <li>Year-end processing and P9 forms</li>
          <li>Payroll audits and compliance reviews</li>
          <li>Employee benefits administration</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits of Outsourcing Payroll</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Why outsource your payroll to us?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cost Efficiency:</strong> Reduce the need for in-house payroll staff and systems</li>
            <li><strong>Time Savings:</strong> Free up your time to focus on core business activities</li>
            <li><strong>Accuracy:</strong> Minimize errors in payroll calculations and deductions</li>
            <li><strong>Compliance:</strong> Stay updated with changing tax laws and regulations</li>
            <li><strong>Confidentiality:</strong> Ensure sensitive payroll information is handled securely</li>
            <li><strong>Expertise:</strong> Benefit from our specialized knowledge and experience</li>
            <li><strong>Scalability:</strong> Easily adjust as your workforce grows or changes</li>
          </ul>
        </div>

        <p className="text-lg font-medium text-gray-900 mb-4">
          Trust Ecovest Consultants with your payroll management to ensure accuracy, compliance, and efficiency in this critical business function.
        </p>
      </div>
    </ServicePageLayout>
  );
};
