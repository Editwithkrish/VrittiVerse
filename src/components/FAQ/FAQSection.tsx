import React from 'react';
import { Plus, Minus } from 'lucide-react';
import GradientText from '../common/GradientText';
import ScrollReveal from '../common/ScrollReveal';

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "While results vary based on factors like niche and current presence, most clients see significant improvement within 3-6 months of implementing our strategies."
  },
  {
    question: "Do you work with specific industries only?",
    answer: "We work with creators and brands across various industries, tailoring our approach to each sector's unique requirements and audience preferences."
  },
  {
    question: "What makes your approach different?",
    answer: "Our data-driven strategy combined with creative excellence sets us apart. We use advanced analytics and AI to optimize content while maintaining authentic engagement."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. We'll help you transition smoothly and adjust our services to match your new requirements."
  },
  {
    question: "Do you offer custom solutions?",
    answer: "Absolutely! We can create custom packages tailored to your specific needs and goals. Contact us to discuss your requirements."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <GradientText>Frequently Asked Questions</GradientText>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our services and approach
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index}>
              <div className="mb-4">
                <button
                  className="w-full bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-400 transition-all duration-300"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-white text-left">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-purple-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-purple-400" />
                    )}
                  </div>
                  {openIndex === index && (
                    <p className="mt-4 text-gray-400 text-left">
                      {faq.answer}
                    </p>
                  )}
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}