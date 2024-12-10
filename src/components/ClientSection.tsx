import React from 'react';
import { TrendingUp, Users, Award, BarChart } from 'lucide-react';

const clients = [
  {
    name: 'Cinemastics',
    growth: '1k to 50k subscribers',
    reach: '5M reach/month',
    icon: Users,
    description: 'Leading entertainment channel transformed through strategic content optimization'
  },
  {
    name: 'Podcast Channel',
    growth: '1k to 5k subscribers',
    reach: '600k reach/month',
    icon: TrendingUp,
    description: 'Emerging podcast achieving rapid growth through targeted audience engagement'
  },
  {
    name: 'Fashion Influencer',
    growth: '10k to 100k followers',
    reach: '2M reach/month',
    icon: Award,
    description: 'Lifestyle brand built from ground up with strategic social media management'
  },
  {
    name: 'FinScan',
    growth: '5k to 10k engagement',
    reach: '100k reach/month',
    icon: BarChart,
    description: 'AI Powerd WebSite Which Helps You To Scan Your Financial Documents Made By Group 7 Only'
  }
];

export default function ClientSection() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We've helped countless creators and brands achieve remarkable growth through our strategic approach
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {clients.map((client) => (
            <div key={client.name} 
                 className="bg-gray-900 rounded-xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 border border-gray-700">
              <client.icon className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{client.name}</h3>
              <p className="text-gray-400 mb-6">{client.description}</p>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-2">
                  <span className="font-medium text-purple-400">Growth:</span> {client.growth}
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium text-purple-400">Reach:</span> {client.reach}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}