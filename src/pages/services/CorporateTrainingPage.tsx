import React from 'react';
import { ServicePageLayout } from '../../components/layout/ServicePageLayout';
import { Users, Lightbulb, Target, UserPlus } from 'lucide-react';

export const CorporateTrainingPage = () => {
  return (
    <ServicePageLayout
      title="Corporate Training Programs"
      description="Through Ecovest International Leadership & Management College, we offer customized corporate training programs."
      breadcrumbs={[
        { label: 'Services', path: '/services' },
        { label: 'Corporate Training', path: '/services/corporate-training', isActive: true }
      ]}
      bgImage="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      currentServicePath="/services/corporate-training"
    >
      <div className="prose prose-lg max-w-none">
        <p className="lead text-xl text-gray-700 mb-8">
          Our training programs are aimed at strengthening organizational performance and individual leadership capacity, suitable for MSMEs, corporates, and public sector clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Management & Leadership</h3>
            <p className="text-gray-700">
              Develop effective leadership skills and management techniques to drive organizational success.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <Target className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Planning</h3>
            <p className="text-gray-700">
              Learn how to create and implement effective strategic plans that align with your business goals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <Lightbulb className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Finance for Non-Finance Managers</h3>
            <p className="text-gray-700">
              Gain essential financial knowledge to make informed business decisions regardless of your background.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-blue-700">
              <UserPlus className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Building</h3>
            <p className="text-gray-700">
              Foster collaboration, communication, and cohesion within your teams to enhance productivity.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Customized Training Solutions</h2>
        
        <p className="mb-4">
          At Ecovest International Leadership & Management College, we understand that every organization has unique training needs. Our programs are designed to be flexible and can be tailored to address your specific challenges and objectives.
        </p>
        
        <p className="mb-4">
          We employ a variety of training methodologies including workshops, case studies, role-playing, and practical exercises to ensure maximum engagement and knowledge retention.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Our Training Programs Include:</h3>
        
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Management & Leadership Development</li>
          <li>Strategic Planning & Governance</li>
          <li>Finance for Non-Finance Managers</li>
          <li>Customer Care & Communication Skills</li>
          <li>Real Estate Finance & Pension Management</li>
          <li>Team Building & Internal Controls</li>
          <li>Project Management</li>
          <li>Sales and Marketing Strategies</li>
          <li>Digital Transformation</li>
          <li>Change Management</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Training Approach</h2>
        
        <p className="mb-4">
          Our training programs are delivered by experienced professionals with extensive industry knowledge and practical expertise. We focus on creating interactive and engaging learning experiences that translate into real-world application.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Training Formats:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>In-house corporate training</li>
            <li>Public workshops and seminars</li>
            <li>Executive coaching</li>
            <li>Virtual training sessions</li>
            <li>Blended learning approaches</li>
          </ul>
        </div>

        <p className="text-lg font-medium text-gray-900 mb-4">
          We deliver results-driven training that equips your team with the skills needed to lead, perform, and adapt in today's business environment.
        </p>
      </div>
    </ServicePageLayout>
  );
};
