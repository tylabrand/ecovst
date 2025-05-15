import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPostLayout } from '../../components/blog/BlogPostLayout';
import { Users, TrendingUp, BarChart, Brain, Target, CheckCircle, Lightbulb } from 'lucide-react';

export const CorporateTrainingPost = () => {
  const trainingPrograms = [
    {
      title: "Leadership Development",
      icon: <Users className="h-8 w-8 text-blue-700" />,
      description: "Equip managers and team leaders with essential leadership skills to drive team performance and organizational success.",
      keyTopics: [
        "Effective communication and delegation",
        "Team motivation and engagement",
        "Conflict resolution and problem-solving",
        "Strategic thinking and decision-making",
        "Emotional intelligence in leadership"
      ],
      idealFor: "Mid-level managers, team leaders, and high-potential employees being groomed for leadership roles."
    },
    {
      title: "Financial Management for Non-Finance Managers",
      icon: <BarChart className="h-8 w-8 text-blue-700" />,
      description: "Help non-financial managers understand key financial concepts to make better business decisions and manage budgets effectively.",
      keyTopics: [
        "Understanding financial statements",
        "Budget preparation and management",
        "Cost analysis and control",
        "Investment decision-making",
        "Financial performance indicators"
      ],
      idealFor: "Department heads, project managers, and operational managers without formal financial training."
    },
    {
      title: "Sales and Customer Service Excellence",
      icon: <TrendingUp className="h-8 w-8 text-blue-700" />,
      description: "Enhance your team's ability to attract, serve, and retain customers through improved sales and service techniques.",
      keyTopics: [
        "Customer needs assessment",
        "Consultative selling approaches",
        "Handling objections and closing techniques",
        "Customer experience management",
        "Building long-term client relationships"
      ],
      idealFor: "Sales teams, customer service representatives, and client-facing staff."
    },
    {
      title: "Digital Skills and Technology Adoption",
      icon: <Lightbulb className="h-8 w-8 text-blue-700" />,
      description: "Bridge the digital skills gap and help your team leverage technology for improved productivity and innovation.",
      keyTopics: [
        "Digital productivity tools and collaboration platforms",
        "Data analysis and visualization basics",
        "Digital marketing fundamentals",
        "Cybersecurity awareness",
        "Emerging technologies relevant to your industry"
      ],
      idealFor: "Employees across all departments needing to enhance their digital literacy and technology skills."
    },
    {
      title: "Strategic Planning and Execution",
      icon: <Target className="h-8 w-8 text-blue-700" />,
      description: "Develop your management team's ability to create and implement effective strategic plans that drive business growth.",
      keyTopics: [
        "Strategic analysis and planning methodologies",
        "Goal setting and KPI development",
        "Resource allocation and prioritization",
        "Strategy implementation and change management",
        "Performance monitoring and adaptation"
      ],
      idealFor: "Senior managers, department heads, and business owners responsible for organizational strategy."
    },
    {
      title: "Business Communication and Presentation Skills",
      icon: <Brain className="h-8 w-8 text-blue-700" />,
      description: "Enhance your team's ability to communicate effectively, both internally and with external stakeholders.",
      keyTopics: [
        "Effective business writing",
        "Persuasive presentation techniques",
        "Meeting facilitation and management",
        "Negotiation and influence skills",
        "Cross-cultural communication"
      ],
      idealFor: "Professionals at all levels who need to communicate effectively in business contexts."
    }
  ];

  const trainingBenefits = [
    {
      title: "Increased Productivity",
      description: "Well-trained employees work more efficiently and make fewer mistakes, directly impacting your bottom line."
    },
    {
      title: "Improved Employee Retention",
      description: "Investing in employee development demonstrates your commitment to their growth, increasing loyalty and reducing turnover."
    },
    {
      title: "Enhanced Innovation",
      description: "Training exposes employees to new ideas and approaches, fostering innovation and creative problem-solving."
    },
    {
      title: "Better Customer Service",
      description: "Trained employees provide superior customer experiences, leading to higher satisfaction and repeat business."
    },
    {
      title: "Stronger Leadership Pipeline",
      description: "Developing internal talent creates a pool of qualified candidates for future leadership positions."
    },
    {
      title: "Competitive Advantage",
      description: "A skilled workforce helps your business adapt to market changes and outperform competitors."
    }
  ];

  return (
    <BlogPostLayout
      title="Essential Corporate Training Programs for Kenyan SMEs"
      date="March 30, 2025"
      readTime="11 min read"
      author="Isha Dunga"
      categories={['Corporate Training', 'SMEs', 'Professional Development', 'Business Growth']}
      featuredImage="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    >
      <p className="lead">
        In today's rapidly evolving business landscape, investing in employee training and development is no longer 
        a luxury—it's a strategic necessity for Kenyan SMEs looking to grow, compete, and thrive.
      </p>

      <p>
        While large corporations have long recognized the value of comprehensive training programs, many small and 
        medium enterprises in Kenya are now realizing that targeted professional development is one of the most 
        effective ways to enhance performance, retain talent, and drive business growth.
      </p>

      <h2>Why Corporate Training Matters for Kenyan SMEs</h2>
      
      <p>
        The business environment in Kenya is becoming increasingly competitive and complex. SMEs face unique challenges 
        including limited resources, skills gaps, and the need to adapt quickly to market changes. Effective corporate 
        training addresses these challenges by:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {trainingBenefits.map((benefit, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-2">{benefit.title}</h3>
            <p className="text-gray-700 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>

      <p>
        According to a recent survey of Kenyan businesses, companies that invest in regular employee training report 
        up to 24% higher productivity and 59% better employee retention compared to those that don't prioritize 
        professional development.
      </p>

      <h2>6 Essential Training Programs for Kenyan SMEs</h2>
      
      <p>
        Based on our experience working with hundreds of Kenyan SMEs, we've identified six training programs that 
        deliver the highest return on investment for businesses across various industries:
      </p>

      <div className="space-y-8 my-8">
        {trainingPrograms.map((program, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              {program.icon}
              <h3 className="text-xl font-semibold text-gray-900 ml-3">{program.title}</h3>
            </div>
            
            <p className="text-gray-700 mb-4">{program.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Key Topics:</h4>
                <ul className="space-y-1">
                  {program.keyTopics.map((topic, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Ideal For:</h4>
                <p className="text-gray-700">{program.idealFor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Implementing Effective Training in Your SME</h2>
      
      <p>
        While the benefits of training are clear, many SMEs struggle with implementation. Here's a framework for 
        developing an effective training program for your business:
      </p>

      <ol className="list-decimal pl-5 space-y-4 my-6 text-gray-700">
        <li>
          <strong>Assess Your Needs:</strong> Identify specific skills gaps and development needs through employee 
          surveys, performance reviews, and business objectives analysis.
        </li>
        <li>
          <strong>Set Clear Objectives:</strong> Define what success looks like for each training initiative with 
          specific, measurable outcomes.
        </li>
        <li>
          <strong>Choose the Right Format:</strong> Select training methods that fit your budget, schedule, and 
          learning objectives (workshops, online courses, coaching, etc.).
        </li>
        <li>
          <strong>Develop a Schedule:</strong> Create a training calendar that minimizes disruption to business 
          operations while ensuring consistent development opportunities.
        </li>
        <li>
          <strong>Measure Results:</strong> Evaluate the effectiveness of training through post-training assessments, 
          performance improvements, and business impact metrics.
        </li>
      </ol>

      <h2>Training Formats for Different Needs and Budgets</h2>
      
      <div className="overflow-x-auto my-8">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">Format</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">Best For</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">Advantages</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">Considerations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4 border-b font-medium">In-person Workshops</td>
              <td className="py-3 px-4 border-b">Interactive skills development, team building</td>
              <td className="py-3 px-4 border-b">High engagement, immediate feedback, networking</td>
              <td className="py-3 px-4 border-b">Higher cost, scheduling challenges</td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b font-medium">Online Courses</td>
              <td className="py-3 px-4 border-b">Knowledge acquisition, self-paced learning</td>
              <td className="py-3 px-4 border-b">Cost-effective, flexible scheduling, scalable</td>
              <td className="py-3 px-4 border-b">Less interactive, requires self-discipline</td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b font-medium">Coaching/Mentoring</td>
              <td className="py-3 px-4 border-b">Leadership development, personalized growth</td>
              <td className="py-3 px-4 border-b">Tailored to individual needs, builds relationships</td>
              <td className="py-3 px-4 border-b">Time-intensive, limited scalability</td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b font-medium">Blended Learning</td>
              <td className="py-3 px-4 border-b">Comprehensive skill development programs</td>
              <td className="py-3 px-4 border-b">Combines benefits of multiple formats</td>
              <td className="py-3 px-4 border-b">More complex to design and implement</td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b font-medium">On-the-job Training</td>
              <td className="py-3 px-4 border-b">Practical skills application, new employee onboarding</td>
              <td className="py-3 px-4 border-b">Directly relevant, minimal disruption to work</td>
              <td className="py-3 px-4 border-b">Quality depends on trainer, less structured</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Overcoming Common Training Challenges for SMEs</h2>
      
      <div className="space-y-4 my-6">
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Limited Budget</h3>
          <p className="text-gray-700">
            <strong>Solution:</strong> Start with high-impact, targeted training in critical areas. Consider group 
            training, train-the-trainer approaches, and free or low-cost resources like industry webinars and 
            government-sponsored programs.
          </p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Time Constraints</h3>
          <p className="text-gray-700">
            <strong>Solution:</strong> Implement microlearning (short, focused training sessions), lunch-and-learn 
            programs, and blended learning approaches that combine in-person and self-paced elements.
          </p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Measuring ROI</h3>
          <p className="text-gray-700">
            <strong>Solution:</strong> Establish clear metrics before training begins, focusing on both learning 
            outcomes (skills acquired) and business impact (productivity improvements, error reduction, etc.).
          </p>
        </div>
      </div>

      <h2>How Ecovest's Corporate Training Programs Can Help Your SME</h2>
      
      <p>
        At Ecovest Consultants Ltd, we understand the unique training needs and constraints of Kenyan SMEs. 
        Our corporate training programs are specifically designed to deliver maximum impact with practical, 
        relevant content that addresses real business challenges.
      </p>

      <div className="bg-green-50 p-6 rounded-lg border border-green-100 my-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Corporate Training Approach:</h3>
        <ul className="space-y-2">
          {[
            'Customized programs tailored to your specific business needs and industry context',
            'Practical, action-oriented content focused on immediate application',
            'Flexible delivery formats including in-person workshops, virtual training, and blended learning',
            'Experienced trainers with real-world business expertise in the Kenyan market',
            'Post-training support and implementation assistance',
            'Measurable outcomes and ROI tracking'
          ].map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>Conclusion</h2>
      
      <p>
        In today's knowledge-based economy, your people are your greatest competitive advantage. Investing in 
        their development through strategic corporate training is one of the most effective ways to enhance 
        performance, drive innovation, and achieve sustainable business growth.
      </p>
      
      <p>
        For Kenyan SMEs looking to thrive in an increasingly competitive marketplace, implementing the right 
        training programs isn't just about skills development—it's about building organizational capability 
        and resilience for long-term success.
      </p>

      <div className="bg-blue-50 p-6 rounded-lg text-center my-8">
        <p className="text-lg font-medium text-gray-900 mb-4">
          Ready to transform your team's capabilities with professional corporate training?
        </p>
        <Link
          to="/services/corporate-training"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
        >
          Explore Our Corporate Training Programs
        </Link>
      </div>
    </BlogPostLayout>
  );
};
