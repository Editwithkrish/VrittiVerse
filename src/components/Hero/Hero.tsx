import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import TextCycle from './TextCycle';
import Logo from './Logo';

const services = [
  "Social Media Management Agency",
  "Talent Management Agency",
  "Creator Growth Partners",
  "Digital Brand Accelerator",
  "Content Strategy Experts"
];

export default function Hero() {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <nav className="absolute top-0 left-0 right-0 p-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Logo />
          <button className="text-purple-400 hover:text-purple-300 transition-colors">
            Menu
          </button>
        </div>
      </nav>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-8 leading-tight">
          Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Digital Empire</span>
        </h1>
        
        <div className="h-20 flex items-center justify-center mb-8">
          <TextCycle text={services[currentService]} />
        </div>
        
        <p className="text-xl text-gray-300 text-center max-w-2xl mb-12">
          Transform your online presence with data-driven strategies and creative excellence. 
          Join the next generation of digital influencers.
        </p>
        
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="group bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer"
          >
            Get Started Today
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            className="group border border-purple-400 text-purple-400 hover:text-white hover:bg-purple-400/20 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 cursor-pointer"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </div>
  );
}