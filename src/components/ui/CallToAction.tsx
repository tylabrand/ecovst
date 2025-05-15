import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  title = "Ready to Get Started?",
  description = "Contact our team today for a free consultation and discover how we can help your business succeed.",
  buttonText = "Request Consultation",
  buttonLink = "/contact"
}) => {
  return (
    <div className="bg-blue-50 rounded-lg p-6 md:p-8 shadow-sm border border-blue-100">
      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      <Link
        to={buttonLink}
        className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
      >
        {buttonText}
        <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
    </div>
  );
};
