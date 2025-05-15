import React, { useState } from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { Phone, Mail, MapPin, Clock, ArrowRight, ArrowLeft, Calendar, CheckCircle, User, Briefcase, FileText, MessageSquare } from 'lucide-react';

export const ContactPage = () => {
  // State for multi-step form
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    serviceInterest: '',
    message: '',
    preferredContact: 'email',
    howDidYouHear: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  // Go to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go to previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Check if current step is valid
  const isStepValid = () => {
    if (step === 1) {
      return formData.firstName && formData.lastName && formData.email && formData.phone;
    } else if (step === 2) {
      return formData.company && formData.industry && formData.serviceInterest;
    }
    return true;
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      industry: '',
      serviceInterest: '',
      message: '',
      preferredContact: 'email',
      howDidYouHear: '',
    });
    setStep(1);
    setFormSubmitted(false);
  };

  // Form steps
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Contact Method</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === 'email'}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Email</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === 'phone'}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Phone</span>
                </label>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Information</h3>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Briefcase className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">Industry *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FileText className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Industry</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Retail">Retail</option>
                  <option value="Technology">Technology</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Finance">Finance</option>
                  <option value="Education">Education</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-1">Service of Interest *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FileText className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
                  <option value="Tax & Legal">Tax & Legal</option>
                  <option value="Corporate Training">Corporate Training</option>
                  <option value="Business Advisory">Business Advisory</option>
                  <option value="Business Development">Business Development</option>
                  <option value="Company Registration">Company Registration</option>
                  <option value="Business Set-Up">Business Set-Up</option>
                  <option value="Payroll Services">Payroll Services</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FileText className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  id="howDidYouHear"
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Option</option>
                  <option value="Search Engine">Search Engine</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Referral">Referral</option>
                  <option value="Advertisement">Advertisement</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Information</h3>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <div className="relative">
                <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please provide any additional details about your inquiry..."
                ></textarea>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-md">
              <h4 className="font-medium text-gray-900 mb-2">Review Your Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}
                </div>
                <div>
                  <span className="font-medium">Email:</span> {formData.email}
                </div>
                <div>
                  <span className="font-medium">Phone:</span> {formData.phone}
                </div>
                <div>
                  <span className="font-medium">Company:</span> {formData.company}
                </div>
                <div>
                  <span className="font-medium">Industry:</span> {formData.industry}
                </div>
                <div>
                  <span className="font-medium">Service Interest:</span> {formData.serviceInterest}
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        description="Get in touch with our team for personalized assistance with your business needs."
        breadcrumbs={[
          { label: 'Contact', path: '/contact', isActive: true }
        ]}
        bgImage="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="flex justify-center mb-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <CheckCircle className="h-12 w-12 text-green-600" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-700 mb-6">
                      Your message has been submitted successfully. One of our team members will get back to you shortly.
                    </p>
                    <button
                      onClick={resetForm}
                      className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Get a Free Consultation</h2>
                    
                    {/* Progress Steps */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between">
                        {[1, 2, 3].map((stepNumber) => (
                          <div key={stepNumber} className="flex flex-col items-center">
                            <div 
                              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                step >= stepNumber ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'
                              }`}
                            >
                              {stepNumber}
                            </div>
                            <span className="text-xs mt-2 text-gray-600">
                              {stepNumber === 1 ? 'Personal' : stepNumber === 2 ? 'Business' : 'Details'}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="relative mt-2">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200"></div>
                        <div 
                          className="absolute top-0 left-0 h-1 bg-blue-700 transition-all duration-300"
                          style={{ width: `${((step - 1) / 2) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                      {renderStep()}
                      
                      <div className="mt-8 flex justify-between">
                        {step > 1 && (
                          <button
                            type="button"
                            onClick={prevStep}
                            className="inline-flex items-center bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md font-medium transition-colors"
                          >
                            <ArrowLeft className="mr-2 w-4 h-4" />
                            Back
                          </button>
                        )}
                        
                        {step < 3 ? (
                          <button
                            type="button"
                            onClick={nextStep}
                            disabled={!isStepValid()}
                            className={`ml-auto inline-flex items-center ${
                              isStepValid() 
                                ? 'bg-blue-700 hover:bg-blue-800 text-white' 
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            } px-4 py-2 rounded-md font-medium transition-colors`}
                          >
                            Next
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="ml-auto inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-medium transition-colors"
                          >
                            Submit
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Phone className="w-5 h-5 text-blue-700 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-700">+254 20 2000276 / 0720047212</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="w-5 h-5 text-blue-700 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-700">info@ecovestconsultants.co.ke</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-700 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-700">Nairobi, Kenya</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 text-blue-700 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Business Hours</p>
                      <p className="text-gray-700">Monday–Friday, 9:00 AM–4:00 PM</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Book a Call Section */}
              <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Book a Call</h3>
                <p className="text-gray-700 mb-6">
                  Schedule a call with one of our consultants at a time that works for you.
                </p>
                <button
                  onClick={() => alert('Calendar booking functionality will be implemented later!')}
                  className="inline-flex items-center w-full justify-center bg-blue-700 hover:bg-blue-800 text-white px-4 py-3 rounded-md font-medium transition-colors"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Find Us</h2>
          <div className="bg-white p-2 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743783!2d36.68258162578119!3d-1.3028617999999932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1652364518493!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ecovest Consultants Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
