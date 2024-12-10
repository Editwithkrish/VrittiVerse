import React from 'react';
import TestimonialCard from './TestimonialCard';
import GradientText from '../common/GradientText';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Content Creator",
    company: "Digital Lifestyle",
    content: "VrittiVerse transformed my Instagram presence completely. Their strategic approach helped me grow from 15k to 250k followers in just 8 months. The engagement on my content has been phenomenal!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    name: "Rajesh Kumar",
    role: "Tech Influencer",
    company: "TechTalks India",
    content: "As a tech reviewer, I needed a team that understood both technology and content strategy. VrittiVerse helped me optimize my content for multiple platforms, leading to a 400% growth in my YouTube subscribers.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    name: "Ananya Patel",
    role: "Fashion Blogger",
    company: "StyleSpeak",
    content: "The team's understanding of fashion content and trends is exceptional. They helped me secure collaborations with major Indian fashion brands and grow my presence across all social platforms.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    name: "Vikram Singh",
    role: "Business Coach",
    company: "Entrepreneurship Mastery",
    content: "VrittiVerse's data-driven approach to content strategy helped me establish authority in the business coaching space. My LinkedIn following grew exponentially, leading to numerous speaking opportunities.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    name: "Meera Desai",
    role: "Food Blogger",
    company: "Flavors of India",
    content: "Their understanding of food content and Indian cuisine helped me create a unique niche. My recipes now reach millions, and I've successfully launched my own spice brand thanks to their guidance.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    name: "Arjun Mehta",
    role: "Fitness Influencer",
    company: "FitWithArjun",
    content: "VrittiVerse helped me create a strong personal brand in the fitness space. Their strategies helped me launch my successful fitness app and grow my community to over 500k members.",
    image: "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?auto=format&fit=crop&q=80",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <GradientText>Indian Success Stories</GradientText>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how creators and brands across India have transformed their digital presence with our expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}