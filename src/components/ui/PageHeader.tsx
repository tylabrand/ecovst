import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';

interface BreadcrumbItem {
  label: string;
  path: string;
  isActive?: boolean;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  description, 
  breadcrumbs,
  bgImage = 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}) => {
  return (
    <div 
      className="relative py-16 md:py-24 bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})` 
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white inline-block px-4 py-2 rounded-md mb-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        {description && (
          <p className="text-xl text-gray-200 max-w-3xl">{description}</p>
        )}
      </div>
    </div>
  );
};
