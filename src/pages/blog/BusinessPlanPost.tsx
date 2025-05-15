import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPostLayout } from '../../components/blog/BlogPostLayout';
import { FileText, TrendingUp, Users, DollarSign, Target, AlertTriangle, CheckCircle, X } from 'lucide-react';

export const BusinessPlanPost = () => {
  const businessPlanSections = [
    {
      title: "Executive Summary",
      icon: <FileText className="h-8 w-8 text-blue-700" />,
      description: "A compelling overview of your entire business plan that captures attention and generates interest.",
      keyElements: [
        "Business concept and value proposition",
        "Market opportunity and target customers",
        "Competitive advantage and unique selling points",
        "Business model and revenue streams",
        "Financial highlights and funding requirements",
        "Management team strengths"
      ],
      investorFocus: "This is often the only section investors read completely—make it count. It should stand alone while enticing readers to explore the full plan."
    },
    {
      title: "Company Description",
      icon: <FileText className="h-8 w-8 text-blue-700" />,
      description: "A detailed explanation of your business, its structure, and its goals.",
      keyElements: [
        "Company history and background",
        "Mission, vision, and values",
        "Business structure and ownership",
        "Current stage of development",
        "Short and long-term objectives",
        "Legal structure and compliance status"
      ],
      investorFocus: "Investors look for clarity of purpose and a compelling story. Demonstrate that you understand your business identity and direction."
    },
    {
      title: "Market Analysis",
      icon: <TrendingUp className="h-8 w-8 text-blue-700" />,
      description: "Evidence-based research on your industry, market size, trends, and target customers.",
      keyElements: [
        "Industry overview and market size",
        "Target market segmentation",
        "Customer needs, behaviors, and demographics",
        "Market trends and growth projections",
        "Regulatory environment",
        "Barriers to entry and opportunities"
      ],
      investorFocus: "Investors want proof that you understand your market thoroughly. Use data, not assumptions, and cite credible sources."
    },
    {
      title: "Competitive Analysis",
      icon: <Users className="h-8 w-8 text-blue-700" />,
      description: "An honest assessment of competitors and your competitive advantage.",
      keyElements: [
        "Direct and indirect competitors",
        "Competitor strengths and weaknesses",
        "Your competitive advantages",
        "Market positioning strategy",
        "Barriers to competition",
        "Response to competitive threats"
      ],
      investorFocus: "Investors expect a realistic view of the competitive landscape. Acknowledging strong competitors shows business maturity."
    },
    {
      title: "Products and Services",
      icon: <FileText className="h-8 w-8 text-blue-700" />,
      description: "Detailed description of your offerings, their benefits, and development status.",
      keyElements: [
        "Product/service descriptions",
        "Value proposition and customer benefits",
        "Intellectual property status",
        "Development stage and roadmap",
        "Pricing strategy",
        "Future product/service plans"
      ],
      investorFocus: "Investors look for clear differentiation and scalability. Emphasize unique features and benefits that address market needs."
    },
    {
      title: "Marketing and Sales Strategy",
      icon: <Target className="h-8 w-8 text-blue-700" />,
      description: "Your plan for reaching customers and generating revenue.",
      keyElements: [
        "Marketing objectives and strategies",
        "Customer acquisition channels",
        "Sales process and cycle",
        "Pricing and positioning strategy",
        "Marketing budget and ROI projections",
        "Key partnerships and distribution channels"
      ],
      investorFocus: "Investors want to see realistic customer acquisition strategies with clear costs and conversion metrics."
    },
    {
      title: "Financial Projections",
      icon: <DollarSign className="h-8 w-8 text-blue-700" />,
      description: "Detailed financial forecasts showing growth potential and profitability.",
      keyElements: [
        "Income statements (3-5 year projections)",
        "Cash flow statements",
        "Balance sheets",
        "Break-even analysis",
        "Key assumptions behind projections",
        "Sensitivity analysis (best/worst case scenarios)"
      ],
      investorFocus: "This is the most scrutinized section. Ensure projections are realistic, well-researched, and include detailed assumptions."
    }
  ];

  const commonMistakes = [
    {
      mistake: "Unrealistic Financial Projections",
      solution: "Base projections on industry benchmarks, market research, and conservative growth assumptions. Include detailed notes explaining your methodology."
    },
    {
      mistake: "Inadequate Market Research",
      solution: "Conduct thorough primary and secondary research. Use credible sources and include specific market data rather than general statements."
    },
    {
      mistake: "Underestimating Competition",
      solution: "Research all direct and indirect competitors. Acknowledge their strengths while clearly articulating your competitive advantage."
    },
    {
      mistake: "Weak Executive Summary",
      solution: "Craft a compelling, concise summary that captures the essence of your business opportunity and makes investors want to read more."
    },
    {
      mistake: "Lack of Clear Value Proposition",
      solution: "Clearly articulate how your product/service solves a specific problem and why customers will choose you over alternatives."
    }
  ];

  return (
    <BlogPostLayout
      title="How to Prepare a Bankable Business Plan for Investors in Kenya"
      date="March 15, 2025"
      readTime="12 min read"
      author="Isha Dunga"
      categories={['Business Planning', 'Funding', 'Entrepreneurship', 'Startups']}
      featuredImage="https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    >
      <p className="lead">
        In Kenya's competitive business landscape, a well-crafted business plan is often the difference between 
        securing investment and being overlooked. Whether you're seeking funding from banks, venture capitalists, 
        angel investors, or government programs, your business plan must be "bankable"—compelling, credible, and 
        designed to inspire confidence.
      </p>

      <p>
        This comprehensive guide will walk you through the process of creating a business plan that not only 
        articulates your vision but also addresses the specific concerns and requirements of Kenyan investors.
      </p>

      <h2>What Makes a Business Plan "Bankable"?</h2>
      
      <p>
        A bankable business plan goes beyond just describing your business idea—it demonstrates that your venture 
        is investment-worthy and capable of generating returns. Here are the key characteristics that make a 
        business plan attractive to investors in Kenya:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            What Investors Want to See
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Clear market opportunity and problem being solved</li>
            <li>• Realistic financial projections with solid assumptions</li>
            <li>• Thorough market research and competitive analysis</li>
            <li>• Capable management team with relevant experience</li>
            <li>• Scalable business model with growth potential</li>
            <li>• Well-defined customer acquisition strategy</li>
            <li>• Awareness of risks and mitigation strategies</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
            <X className="h-5 w-5 text-red-500 mr-2" />
            What Turns Investors Away
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Overly optimistic projections without justification</li>
            <li>• Vague market analysis and customer definition</li>
            <li>• Underestimating or ignoring competition</li>
            <li>• Lack of clear differentiation or competitive advantage</li>
            <li>• Insufficient detail on how funds will be used</li>
            <li>• Poor presentation and organization</li>
            <li>• Failure to address obvious risks</li>
          </ul>
        </div>
      </div>

      <h2>Essential Components of a Bankable Business Plan</h2>
      
      <p>
        While business plans can vary in format and emphasis depending on your industry and target investors, 
        certain components are essential for any bankable business plan in Kenya:
      </p>

      <div className="space-y-8 my-8">
        {businessPlanSections.map((section, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center mb-3">
              {section.icon}
              <h3 className="text-xl font-semibold text-gray-900 ml-3">{section.title}</h3>
            </div>
            
            <p className="text-gray-700 mb-4">{section.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Key Elements:</h4>
                <ul className="space-y-1">
                  {section.keyElements.map((element, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{element}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Investor Focus:</h4>
                <p className="text-gray-700">{section.investorFocus}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Tailoring Your Business Plan for Different Investors in Kenya</h2>
      
      <p>
        Different types of investors have different priorities and expectations. Here's how to tailor your 
        business plan for various funding sources in Kenya:
      </p>

      <div className="overflow-x-auto my-8">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">Investor Type</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">Key Focus Areas</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">Special Considerations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4 border-b font-medium">Banks</td>
              <td className="py-3 px-4 border-b">
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Cash flow and repayment ability</li>
                  <li>Collateral and security</li>
                  <li>Management experience</li>
                  <li>Historical financial performance</li>
                </ul>
              </td>
              <td className="py-3 px-4 border-b text-sm">
                Emphasize stability and risk mitigation. Include detailed financial history if available and clear 
                repayment plans. Address KBA lending requirements.
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b font-medium">Angel Investors</td>
              <td className="py-3 px-4 border-b">
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Founder passion and capability</li>
                  <li>Market opportunity size</li>
                  <li>Unique value proposition</li>
                  <li>Early traction indicators</li>
                </ul>
              </td>
              <td className="py-3 px-4 border-b text-sm">
                Focus on your personal story and vision. Highlight any early customer validation or market traction. 
                Be clear about how their expertise can help beyond funding.
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b font-medium">Venture Capital</td>
              <td className="py-3 px-4 border-b">
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Scalability and growth potential</li>
                  <li>Market size and opportunity</li>
                  <li>Competitive advantage</li>
                  <li>Exit strategy</li>
                </ul>
              </td>
              <td className="py-3 px-4 border-b text-sm">
                Emphasize scalability and potential for significant returns. Include clear milestones and growth 
                metrics. Research VC investment criteria and align your plan accordingly.
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b font-medium">Government Funds</td>
              <td className="py-3 px-4 border-b">
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Alignment with development goals</li>
                  <li>Job creation potential</li>
                  <li>Social impact</li>
                  <li>Compliance with requirements</li>
                </ul>
              </td>
              <td className="py-3 px-4 border-b text-sm">
                Highlight alignment with Kenya Vision 2030 or other government priorities. Emphasize job creation, 
                technology transfer, or export potential. Follow application guidelines precisely.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Common Mistakes to Avoid in Your Business Plan</h2>
      
      <div className="space-y-4 my-6">
        {commonMistakes.map((item, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <AlertTriangle className="h-5 w-5 text-red-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">{item.mistake}</h3>
                <p className="text-gray-700 mt-1">
                  <strong>Solution:</strong> {item.solution}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Financial Projections: The Heart of a Bankable Business Plan</h2>
      
      <p>
        For Kenyan investors, financial projections are often the most scrutinized section of your business plan. 
        Here's how to create credible financial forecasts:
      </p>

      <ol className="list-decimal pl-5 space-y-3 my-6 text-gray-700">
        <li>
          <strong>Start with realistic assumptions:</strong> Base your projections on industry benchmarks, market 
          research, and historical data (if available). Document all assumptions clearly.
        </li>
        <li>
          <strong>Prepare multiple scenarios:</strong> Include base case, optimistic, and conservative projections 
          to demonstrate that you've considered different outcomes.
        </li>
        <li>
          <strong>Be detailed in year one:</strong> Provide monthly projections for the first year, quarterly for 
          year two, and annual projections for years 3-5.
        </li>
        <li>
          <strong>Include all financial statements:</strong> Prepare income statements, cash flow projections, and 
          balance sheets that align with each other.
        </li>
        <li>
          <strong>Show your funding needs clearly:</strong> Specify how much funding you need, what it will be used 
          for, and how it will impact your business growth.
        </li>
        <li>
          <strong>Include key financial metrics:</strong> Calculate important ratios and metrics like gross margin, 
          net profit margin, customer acquisition cost, and return on investment.
        </li>
      </ol>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-yellow-800">Pro Tip</h3>
            <p className="text-yellow-700 mt-2">
              In the Kenyan context, be sure to account for factors like inflation, exchange rate fluctuations, 
              seasonal business cycles, and regulatory changes that might impact your financial projections.
            </p>
          </div>
        </div>
      </div>

      <h2>How Ecovest Can Help with Your Business Plan</h2>
      
      <p>
        At Ecovest Consultants Ltd, we specialize in helping Kenyan entrepreneurs and SMEs develop bankable 
        business plans that attract investment. Our team of experienced business advisors understands what 
        local and international investors look for and can help you create a compelling case for funding.
      </p>

      <div className="bg-green-50 p-6 rounded-lg border border-green-100 my-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Business Plan Services Include:</h3>
        <ul className="space-y-2">
          {[
            'Comprehensive market research and analysis',
            'Financial modeling and projections',
            'Business strategy development',
            'Competitive analysis',
            'Investment pitch preparation',
            'Business plan review and refinement',
            'Investor presentation coaching'
          ].map((service, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>Conclusion</h2>
      
      <p>
        A bankable business plan is more than just a document—it's a roadmap for your business and a powerful 
        tool for securing the funding you need to grow. By focusing on what matters to investors, backing your 
        claims with solid research, and presenting your vision clearly and professionally, you can significantly 
        increase your chances of success in Kenya's competitive funding landscape.
      </p>
      
      <p>
        Remember that your business plan should evolve as your business grows and market conditions change. 
        Regularly reviewing and updating your plan ensures it remains relevant and continues to guide your 
        business decisions.
      </p>

      <div className="bg-blue-50 p-6 rounded-lg text-center my-8">
        <p className="text-lg font-medium text-gray-900 mb-4">
          Need help creating a bankable business plan for your Kenyan business?
        </p>
        <Link
          to="/services/business-advisory"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
        >
          Explore Our Business Advisory Services
        </Link>
      </div>
    </BlogPostLayout>
  );
};
