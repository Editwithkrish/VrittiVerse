import React from 'react';
import { Lightbulb, Search, Users, Rocket, BarChart, Award } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';
import GradientText from '../common/GradientText';

const steps = [
  {
    icon: Lightbulb,
    title: "Discovery",
    description: "We analyze your goals, target audience, and current digital presence to create a tailored strategy."
  },
  {
    icon: Search,
    title: "Research",
    description: "Deep dive into market trends, competitor analysis, and audience behavior patterns."
  },
  {
    icon: Users,
    title: "Strategy",
    description: "Develop a comprehensive plan aligned with your objectives and audience preferences."
  },
  {
    icon: Rocket,
    title: "Implementation",
    description: "Execute the strategy with our expert team using cutting-edge tools and techniques."
  },
  {
    icon: BarChart,
    title: "Monitoring",
    description: "Track performance metrics and adjust strategies for optimal results."
  },
  {
    icon: Award,
    title: "Optimization",
    description: "Continuous improvement based on data insights and emerging trends."
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <GradientText>Our Process</GradientText>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A systematic approach to transforming your digital presence and achieving sustainable growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title}>
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover-lift hover-glow">
                <div className="relative mb-6">
                  <step.icon className="w-12 h-12 text-purple-400 float-animation" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}