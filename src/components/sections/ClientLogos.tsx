import React from 'react';

export const ClientLogos = () => {
  // In a real implementation, these would be actual client logos
  const clients = [
    {
      name: 'Company A',
      logo: 'https://images.pexels.com/photos/5186869/pexels-photo-5186869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Company B',
      logo: 'https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Company C',
      logo: 'https://images.pexels.com/photos/5911860/pexels-photo-5911860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Company D',
      logo: 'https://images.pexels.com/photos/8088549/pexels-photo-8088549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Company E',
      logo: 'https://images.pexels.com/photos/6432055/pexels-photo-6432055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Company F',
      logo: 'https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Leading Businesses
          </h2>
          <p className="text-lg text-gray-700">
            Join the many satisfied clients who rely on our expertise.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="p-4 flex justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="h-12 md:h-16 object-contain"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#case-studies"
            className="text-blue-700 font-medium hover:text-blue-800 transition-colors"
          >
            View Our Case Studies →
          </a>
        </div>
      </div>
    </section>
  );
};