import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-400 mb-4">
              Ecovest Consultants Limited is a Kenyan-based firm specializing in finance, property, and business consulting services since 2016.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/#products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/accounting-bookkeeping" className="text-gray-400 hover:text-white transition-colors">Accounting & Bookkeeping</Link></li>
              <li><Link to="/services/tax-legal" className="text-gray-400 hover:text-white transition-colors">Tax & Legal</Link></li>
              <li><Link to="/services/corporate-training" className="text-gray-400 hover:text-white transition-colors">Corporate Training</Link></li>
              <li><Link to="/services/business-advisory" className="text-gray-400 hover:text-white transition-colors">Business Advisory</Link></li>
              <li><Link to="/services/business-development" className="text-gray-400 hover:text-white transition-colors">Business Development</Link></li>
              <li><Link to="/services/company-registration" className="text-gray-400 hover:text-white transition-colors">Company Registration</Link></li>
              <li><Link to="/services/business-setup" className="text-gray-400 hover:text-white transition-colors">Business Set-Up</Link></li>
              <li><Link to="/services/payroll-services" className="text-gray-400 hover:text-white transition-colors">Payroll Services</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                <span className="text-gray-400">+254 20 2000276 / 0720047212</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                <span className="text-gray-400">info@ecovestconsultants.co.ke</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                <span className="text-gray-400">Nairobi, Kenya</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                <span className="text-gray-400">Monday–Friday, 9:00 AM–4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="max-w-md mx-auto lg:mx-0">
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none text-gray-900"
              />
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-r-md transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© {currentYear} Ecovest Consultants Limited. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};