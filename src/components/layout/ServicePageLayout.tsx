import React from 'react';
import { PageHeader } from '../ui/PageHeader';
import { ServiceSidebar } from '../ui/ServiceSidebar';
import { CallToAction } from '../ui/CallToAction';

interface BreadcrumbItem {
  label: string;
  path: string;
  isActive?: boolean;
}

interface ServicePageLayoutProps {
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
  children: React.ReactNode;
  currentServicePath: string;
}

export const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({
  title,
  description,
  breadcrumbs,
  bgImage,
  children,
  currentServicePath
}) => {
  const services = [
    { name: 'Accounting & Bookkeeping', path: '/services/accounting-bookkeeping' },
    { name: 'Tax & Legal', path: '/services/tax-legal' },
    { name: 'Corporate Training Programs', path: '/services/corporate-training' },
    { name: 'Business Advisory', path: '/services/business-advisory' },
    { name: 'Business Development', path: '/services/business-development' },
    { name: 'Company Registration', path: '/services/company-registration' },
    { name: 'Business Set-Up', path: '/services/business-setup' },
    { name: 'Payroll Services', path: '/services/payroll-services' }
  ].map(service => ({
    ...service,
    isActive: service.path === currentServicePath
  }));

  return (
    <>
      <PageHeader 
        title={title} 
        description={description}
        breadcrumbs={breadcrumbs}
        bgImage={bgImage}
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <ServiceSidebar services={services} />
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              {children}
              <div className="mt-12">
                <CallToAction />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
