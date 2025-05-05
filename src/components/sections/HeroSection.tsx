import React from 'react';

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary animate-slide-right">
              Empowering Your Business with Expert Financial Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 animate-slide-right" style={{ animationDelay: '200ms' }}>
              Tailored services in tax, audit, and business advisory to drive your success.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-right" style={{ animationDelay: '400ms' }}>
              <a 
                href="#contact" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center"
              >
                Schedule a Consultation
              </a>
              <a 
                href="#services" 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center"
              >
                Explore Our Services
              </a>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-slide-left">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-105">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Business team collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20 animate-scale" style={{ animationDelay: '600ms' }}></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent rounded-full opacity-20 animate-scale" style={{ animationDelay: '800ms' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#value-proposition" className="text-primary transition-colors duration-300 hover:text-accent">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};