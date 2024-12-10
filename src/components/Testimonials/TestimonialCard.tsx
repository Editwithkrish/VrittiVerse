import React from 'react';
import { Star } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  image,
  rating
}: TestimonialCardProps) {
  return (
    <ScrollReveal>
      <div className="bg-gray-800 rounded-xl p-8 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 border border-gray-700 hover-lift">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover border-2 border-purple-400"
          />
          <div>
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-gray-400">{role}</p>
            <p className="text-purple-400">{company}</p>
          </div>
        </div>
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <p className="text-gray-300 italic">{content}</p>
      </div>
    </ScrollReveal>
  );
}