import { createBrowserRouter, RouteObject } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { AccountingBookkeepingPage } from './pages/services/AccountingBookkeepingPage';
import { TaxLegalPage } from './pages/services/TaxLegalPage';
import { CorporateTrainingPage } from './pages/services/CorporateTrainingPage';
import { BusinessAdvisoryPage } from './pages/services/BusinessAdvisoryPage';
import { BusinessDevelopmentPage } from './pages/services/BusinessDevelopmentPage';
import { CompanyRegistrationPage } from './pages/services/CompanyRegistrationPage';
import { BusinessSetupPage } from './pages/services/BusinessSetupPage';
import { PayrollServicesPage } from './pages/services/PayrollServicesPage';
import { ServicesPage } from './pages/services/ServicesPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ErrorBoundary } from './components/error/ErrorBoundary';

// Blog Posts
import { KraReturnsPost } from './pages/blog/KraReturnsPost';
import { AccountingSoftwarePost } from './pages/blog/AccountingSoftwarePost';
import { LlcRegistrationPost } from './pages/blog/LlcRegistrationPost';
import { CorporateTrainingPost } from './pages/blog/CorporateTrainingPost';
import { BusinessPlanPost } from './pages/blog/BusinessPlanPost';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'blog',
        element: <BlogPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'blog/how-to-file-kra-returns-kenya',
        element: <KraReturnsPost />,
      },
      {
        path: 'blog/accounting-software-small-businesses-kenya',
        element: <AccountingSoftwarePost />,
      },
      {
        path: 'blog/benefits-registering-limited-liability-company-kenya',
        element: <LlcRegistrationPost />,
      },
      {
        path: 'blog/corporate-training-programs-kenyan-smes',
        element: <CorporateTrainingPost />,
      },
      {
        path: 'blog/bankable-business-plan-investors-kenya',
        element: <BusinessPlanPost />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'services/accounting-bookkeeping',
        element: <AccountingBookkeepingPage />,
      },
      {
        path: 'services/tax-legal',
        element: <TaxLegalPage />,
      },
      {
        path: 'services/corporate-training',
        element: <CorporateTrainingPage />,
      },
      {
        path: 'services/business-advisory',
        element: <BusinessAdvisoryPage />,
      },
      {
        path: 'services/business-development',
        element: <BusinessDevelopmentPage />,
      },
      {
        path: 'services/company-registration',
        element: <CompanyRegistrationPage />,
      },
      {
        path: 'services/business-setup',
        element: <BusinessSetupPage />,
      },
      {
        path: 'services/payroll-services',
        element: <PayrollServicesPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
