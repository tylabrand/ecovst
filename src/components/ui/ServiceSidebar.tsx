import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceLink {
  name: string;
  path: string;
  isActive?: boolean;
}

interface ServiceSidebarProps {
  services: ServiceLink[];
  title?: string;
}

export const ServiceSidebar: React.FC<ServiceSidebarProps> = ({ 
  services, 
  title = "Our Services" 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index}>
            <Link
              to={service.path}
              className={`block py-2 px-3 rounded-md transition-colors ${
                service.isActive 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-700'
              }`}
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8 p-4 bg-blue-50 rounded-md">
        <h4 className="text-lg font-medium text-blue-700 mb-2">Need Help?</h4>
        <p className="text-gray-700 mb-3">Contact our team for personalized assistance with your business needs.</p>
        <Link
          to="/contact"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md font-medium text-sm transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};
