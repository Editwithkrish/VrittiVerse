import React from 'react';
import { Users, Briefcase, Palette, Zap, Target, Trophy, Code, Megaphone, Brain, HandshakeIcon } from 'lucide-react';
import ServiceCard from './ServiceCard';
import GradientText from '../common/GradientText';

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
        <div className="text-center mb-16 fade-in-animation">
          <h2 className="text-4xl font-bold text-white mb-4">
            <GradientText>Tailored Solutions</GradientText>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive services designed to meet the unique needs of creators, brands, and creative professionals
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 stagger-animation">
          {serviceCategories.map((category) => (
            <ServiceCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}