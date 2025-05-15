import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full text-blue-700 mb-6">
            <Search className="w-12 h-12" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            <Home className="mr-2 w-5 h-5" />
            Return to Home
          </Link>
          
          <Link
            to="/services"
            className="inline-flex items-center justify-center bg-white border border-blue-700 text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </div>
  );
};
