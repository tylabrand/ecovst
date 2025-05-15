import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  // Check if we're on the homepage
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  // Close dropdown when location changes
  useEffect(() => {
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    // If not on homepage, always set scrolled to true
    if (!isHomePage) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Accounting & Bookkeeping', href: '/services/accounting-bookkeeping' },
        { name: 'Tax & Legal', href: '/services/tax-legal' },
        { name: 'Corporate Training', href: '/services/corporate-training' },
        { name: 'Business Advisory', href: '/services/business-advisory' },
        { name: 'Business Development', href: '/services/business-development' },
        { name: 'Company Registration', href: '/services/company-registration' },
        { name: 'Business Set-Up', href: '/services/business-setup' },
        { name: 'Payroll Services', href: '/services/payroll-services' },
      ]
    },
    { name: 'Products', href: '/#products' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <>
                    <Link
                      to={link.href}
                      className="text-gray-800 hover:text-blue-700 font-medium flex items-center"
                      onClick={toggleServicesDropdown}
                    >
                      {link.name}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </Link>
                    <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 transition-all duration-200 ${servicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link to={link.href} className="text-gray-800 hover:text-blue-700 font-medium">
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-medium transition duration-300"
            >
              Get a Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ?
                <X className="w-6 h-6 text-gray-800" /> :
                <Menu className="w-6 h-6 text-gray-800" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-md shadow-md mt-2">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                <Link
                  to={link.href}
                  className="text-gray-800 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => {
                    if (!link.hasDropdown) setIsOpen(false);
                  }}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-4 space-y-1">
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-gray-600 hover:text-blue-700 block px-3 py-1 rounded-md text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            <div className="mt-4 px-3">
              <Link
                to="/contact"
                className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md font-medium transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};