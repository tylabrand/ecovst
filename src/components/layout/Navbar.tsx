import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  useEffect(() => {
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
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { 
      name: 'Services', 
      href: '#services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Tax Advisory', href: '#tax-services' },
        { name: 'Audit & Assurance', href: '#audit-services' },
        { name: 'Business Advisory', href: '#business-advisory' },
        { name: 'Business Registration', href: '#business-registration' },
        { name: 'Compliance Services', href: '#compliance-services' },
      ]
    },
    { name: 'Products', href: '#products' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
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
                    <a 
                      href={link.href} 
                      className="text-gray-800 hover:text-blue-700 font-medium flex items-center"
                      onClick={toggleServicesDropdown}
                    >
                      {link.name}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </a>
                    <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 transition-all duration-200 ${servicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                      {link.dropdownItems?.map((item) => (
                        <a 
                          key={item.name} 
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a href={link.href} className="text-gray-800 hover:text-blue-700 font-medium">
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <a 
              href="#contact"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-medium transition duration-300"
            >
              Get a Free Consultation
            </a>
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
                <a
                  href={link.href}
                  className="text-gray-800 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => {
                    if (!link.hasDropdown) setIsOpen(false);
                  }}
                >
                  {link.name}
                </a>
                {link.hasDropdown && (
                  <div className="pl-4 space-y-1">
                    {link.dropdownItems?.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-600 hover:text-blue-700 block px-3 py-1 rounded-md text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            <div className="mt-4 px-3">
              <a
                href="#contact"
                className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md font-medium transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};