import React from 'react';
import NavButton from './NavButton';

export default function NavigationButtons() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      <NavButton
        to="services"
        className="bg-purple-600 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/30"
      >
        Our Services
      </NavButton>
      <NavButton
        to="process"
        className="bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30"
      >
        Our Process
      </NavButton>
      <NavButton
        to="testimonials"
        className="bg-pink-600 hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-500/30"
      >
        Testimonials
      </NavButton>
      <NavButton
        to="pricing"
        className="bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
      >
        Pricing
      </NavButton>
      <NavButton
        to="faq"
        className="bg-violet-600 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/30"
      >
        FAQ
      </NavButton>
      <NavButton
        to="contact"
        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:shadow-purple-500/30"
      >
        Contact Us
      </NavButton>
    </div>
  );
}