import React from 'react';

export const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Isha Dunga',
      position: 'Founder & Managing Director',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'With over 15 years of experience in financial consulting, Isha leads our firm with expertise and vision.'
    },
    {
      name: 'Eng. Elvis Otieno',
      position: 'Construction Manager',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Elvis oversees all construction-related projects, bringing technical expertise and innovation to our property services.'
    },
    {
      name: 'Austine Okeyo',
      position: 'Business Development, Finance Department',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Austine drives our business growth strategies and manages our comprehensive financial services portfolio.'
    },
    {
      name: 'Agnes Nyawira',
      position: 'Team Member',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Agnes provides valuable support across multiple service areas, ensuring client satisfaction and quality delivery.'
    }
  ];

  const coreValues = [
    'Honesty', 'Accountability', 'Commitment', 'Integrity', 'Transparency'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Ecovest Consultants
          </h2>
          <p className="text-lg text-gray-700">
            Founded in 2016 and incorporated in 2018, we've been providing expert financial and business services throughout Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission & Vision</h3>
            <div className="mb-8">
              <h4 className="text-xl font-medium text-blue-700 mb-2">Vision</h4>
              <p className="text-gray-700">
                To be the pace setters in finance innovation and wealth creation in Africa.
              </p>
            </div>
            <div className="mb-8">
              <h4 className="text-xl font-medium text-blue-700 mb-2">Mission</h4>
              <p className="text-gray-700">
                Engage, transform, and implement wealth creation ideology.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-blue-700 mb-2">Core Values</h4>
              <div className="flex flex-wrap gap-2">
                {coreValues.map((value, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Ecovest team meeting" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Our Leadership Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-blue-700 font-medium mb-3">{member.position}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};