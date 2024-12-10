import React from 'react';
import Hero from './components/Hero/Hero';
import ClientSection from './components/ClientSection';
import Services from './components/Services/Services';
import ProcessSection from './components/Process/ProcessSection';
import RecentProjects from './components/RecentProjects/RecentProjects';
import TestimonialsSection from './components/Testimonials/TestimonialsSection';
import PricingSection from './components/Pricing/PricingSection';
import FAQSection from './components/FAQ/FAQSection';
import ContactForm from './components/Contact/ContactForm';
import StatsSection from './components/Stats/StatsSection';
import NavigationButtons from './components/Navigation/NavigationButtons';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <NavigationButtons />
      <StatsSection />
      <ClientSection />
      <Services />
      <ProcessSection />
      <RecentProjects />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactForm />
    </div>
  );
}

export default App;