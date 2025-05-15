import React from 'react';
import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

export const ErrorBoundary = () => {
  const error = useRouteError();
  
  let errorMessage: string;
  let errorStatus: number | string;
  
  if (isRouteErrorResponse(error)) {
    // Error is a route error
    errorMessage = error.statusText || error.data?.message || 'Something went wrong';
    errorStatus = error.status;
  } else if (error instanceof Error) {
    // Error is a JavaScript Error object
    errorMessage = error.message;
    errorStatus = 'Error';
  } else if (typeof error === 'string') {
    // Error is a string
    errorMessage = error;
    errorStatus = 'Error';
  } else {
    // Unknown error type
    errorMessage = 'Unknown error occurred';
    errorStatus = 'Error';
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-red-600 p-6 text-white">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-16 h-16" />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {errorStatus} Error
          </h1>
        </div>
        
        <div className="p-6">
          <p className="text-gray-700 mb-6 text-center">
            {errorMessage}
          </p>
          
          <div className="flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              <Home className="mr-2 w-5 h-5" />
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
