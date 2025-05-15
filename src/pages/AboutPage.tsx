import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { CheckCircle, Users, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
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
      name: 'Jane Mwangi',
      position: 'Finance Director',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Jane manages our financial operations, ensuring sound financial strategies for both our firm and our clients.'
    },
    {
      name: 'David Ochieng',
      position: 'Tax Consultant',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'David specializes in tax advisory, helping clients navigate complex tax regulations and optimize their tax positions.'
    }
  ];

  const coreValues = [
    'Integrity', 'Excellence', 'Innovation', 'Client Focus', 'Teamwork', 'Accountability'
  ];

  const milestones = [
    {
      year: '2016',
      title: 'Company Founded',
      description: 'Ecovest Consultants was established as a small financial advisory firm in Nairobi.'
    },
    {
      year: '2018',
      title: 'Official Incorporation',
      description: 'The company was officially incorporated and expanded its service offerings.'
    },
    {
      year: '2020',
      title: 'Service Expansion',
      description: 'Added new service lines including corporate training and business development.'
    },
    {
      year: '2022',
      title: 'Regional Expansion',
      description: 'Expanded operations to serve clients across multiple counties in Kenya.'
    },
    {
      year: '2024',
      title: 'Digital Transformation',
      description: 'Launched digital platforms to enhance service delivery and client experience.'
    }
  ];

  return (
    <>
      <PageHeader 
        title="About Ecovest Consultants" 
        description="Learn about our company, our mission, and the team behind our success."
        breadcrumbs={[
          { label: 'About Us', path: '/about', isActive: true }
        ]}
        bgImage="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Company Overview */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2016 and incorporated in 2018, Ecovest Consultants Limited has established itself as a trusted provider of financial and business consulting services throughout Kenya. Our journey began with a simple mission: to help businesses navigate financial complexities and achieve sustainable growth.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Over the years, we have expanded our service offerings to meet the evolving needs of our clients, while maintaining our commitment to excellence and integrity in everything we do. Today, we serve a diverse clientele ranging from startups and SMEs to established corporations and public sector organizations.
            </p>
            <p className="text-lg text-gray-700">
              What sets us apart is our personalized approach to client service, our deep understanding of the local business environment, and our unwavering dedication to delivering results that exceed expectations.
            </p>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="mb-4 text-blue-700">
                <Target className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-700">
                Engage, transform, and implement wealth creation ideology through innovative financial solutions and expert business advisory services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="mb-4 text-blue-700">
                <Award className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To be the pace setters in finance innovation and wealth creation in Africa, empowering businesses to achieve sustainable growth and prosperity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="mb-4 text-blue-700">
                <CheckCircle className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Our Values</h3>
              <div className="flex flex-wrap gap-2">
                {coreValues.map((value, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Company Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-700"></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-2">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-700">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Spacer */}
                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Leadership Team</h2>
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

          {/* CTA Section */}
          <div className="mt-20 bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Work With Us?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Discover how our expertise can help your business thrive. Contact us today to schedule a consultation with our team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/services"
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-md font-medium transition-colors"
              >
                Explore Our Services
              </Link>
              <Link
                to="/#contact"
                className="bg-white border border-blue-700 text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
