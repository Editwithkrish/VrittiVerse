import React from 'react';
import PricingCard from './PricingCard';
import GradientText from '../common/GradientText';

const plans = [
  {
    title: "Starter",
    price: "$499",
    description: "Perfect for emerging creators and small brands",
    features: [
      { text: "Social Media Strategy", included: true },
      { text: "Content Calendar", included: true },
      { text: "Monthly Analytics", included: true },
      { text: "Community Management", included: false },
      { text: "Brand Partnerships", included: false },
      { text: "24/7 Priority Support", included: false }
    ]
  },
  {
    title: "Professional",
    price: "$999",
    description: "Ideal for growing creators and established brands",
    features: [
      { text: "Social Media Strategy", included: true },
      { text: "Content Calendar", included: true },
      { text: "Monthly Analytics", included: true },
      { text: "Community Management", included: true },
      { text: "Brand Partnerships", included: true },
      { text: "24/7 Priority Support", included: false }
    ],
    popular: true
  },
  {
    title: "Enterprise",
    price: "$1,999",
    description: "For large creators and professional brands",
    features: [
      { text: "Social Media Strategy", included: true },
      { text: "Content Calendar", included: true },
      { text: "Monthly Analytics", included: true },
      { text: "Community Management", included: true },
      { text: "Brand Partnerships", included: true },
      { text: "24/7 Priority Support", included: true }
    ]
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <GradientText>Pricing Plans</GradientText>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan to accelerate your digital growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}