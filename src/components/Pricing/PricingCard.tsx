import React from 'react';
import { Check } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  popular = false
}: PricingCardProps) {
  return (
    <ScrollReveal>
      <div className={`relative bg-gray-800 rounded-xl p-8 border ${
        popular ? 'border-purple-400 shadow-xl shadow-purple-500/20' : 'border-gray-700'
      } hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover-lift`}>
        {popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </span>
          </div>
        )}
        
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-gray-400">/month</span>
        </div>
        <p className="text-gray-400 mb-6">{description}</p>
        
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className={`flex items-center gap-3 ${
              feature.included ? 'text-gray-300' : 'text-gray-500 line-through'
            }`}>
              <Check className={`w-5 h-5 ${
                feature.included ? 'text-purple-400' : 'text-gray-600'
              }`} />
              {feature.text}
            </li>
          ))}
        </ul>
        
        <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
          popular
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/30'
            : 'bg-gray-700 text-white hover:bg-gray-600'
        }`}>
          Get Started
        </button>
      </div>
    </ScrollReveal>
  );
}