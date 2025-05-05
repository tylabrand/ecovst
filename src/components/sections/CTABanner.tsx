import React from 'react';

export const CTABanner = () => {
  return (
    <section className="py-16 bg-blue-700 text-white relative overflow-hidden">
      {/* Background triangles */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-600 rotate-45 -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-800 rotate-45 translate-x-20 translate-y-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Business? Let's Talk.
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Transform your financial operations and set your business on the path to success.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-medium text-lg transition duration-300"
          >
            Book Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};