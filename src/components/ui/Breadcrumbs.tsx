import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
  isActive?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-700"
          >
            Home
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
            {item.isActive ? (
              <span className="text-sm font-medium text-blue-700">
                {item.label}
              </span>
            ) : (
              <Link 
                to={item.path} 
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-700"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
