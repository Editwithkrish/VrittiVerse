import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  "Social Media Management Agency",
  "Talent Management Agency",
  "Creator Growth Partners"
];

export default function Hero() {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-8">
          Elevate Your Digital Presence
        </h1>
        <div className="h-20 flex items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-medium text-purple-300 text-center transition-all duration-500">
            {services[currentService]}
          </h2>
        </div>
        <p className="text-xl text-gray-300 text-center max-w-2xl mb-12">
          Transform your online presence with data-driven strategies and creative excellence
        </p>
        <button className="group bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 flex items-center gap-2">
          Get Started Today
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}