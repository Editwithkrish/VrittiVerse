import React from 'react';
import { Users, Briefcase, Palette, Zap, Target, Trophy, Code, Megaphone, Brain, HandshakeIcon } from 'lucide-react';

const serviceCategories = [
  {
    title: "For Creators",
    icon: Users,
    description: "Elevate your personal brand and reach new heights",
    services: [
      { text: "Access to Exclusive AI Model", icon: Brain },
      { text: "Community Support & Growth", icon: Users },
      { text: "Brand Collaboration Opportunities", icon: HandshakeIcon }
    ]
  },
  {
    title: "For Brands",
    icon: Briefcase,
    description: "Connect with your audience authentically",
    services: [
      { text: "Custom Creator Filtering", icon: Target },
      { text: "Online PR Support", icon: Megaphone },
      { text: "Direct Community Engagement", icon: Trophy }
    ]
  },
  {
    title: "For Creatives",
    icon: Palette,
    description: "Master the tools of digital creation",
    services: [
      { text: "Industry Software Training", icon: Code },
      { text: "Direct Creator Access", icon: Zap },
      { text: "Skill Development Program", icon: Brain }
    ]
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Tailored Solutions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive services designed to meet the unique needs of creators, brands, and creative professionals
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {serviceCategories.map((category) => (
            <div key={category.title} 
                 className="bg-gray-800 rounded-xl p-8 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 border border-gray-700">
              <category.icon className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
              <p className="text-gray-400 mb-6">{category.description}</p>
              <ul className="space-y-4">
                {category.services.map((service) => (
                  <li key={service.text} className="flex items-center gap-3 text-gray-300">
                    <service.icon className="w-5 h-5 text-purple-400" />
                    {service.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}