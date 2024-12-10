import React from 'react';
import AnimatedCounter from '../common/AnimatedCounter';
import ScrollReveal from '../common/ScrollReveal';
import { Users, Trophy, Target, Zap } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 50000,
    label: 'Creators Supported',
    suffix: '+'
  },
  {
    icon: Trophy,
    value: 1000000,
    label: 'Followers Gained',
    suffix: 'M+'
  },
  {
    icon: Target,
    value: 95,
    label: 'Success Rate',
    suffix: '%'
  },
  {
    icon: Zap,
    value: 24,
    label: 'Hour Support',
    suffix: '/7'
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid md:grid-cols-4 gap-8 stagger-animation">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover-lift hover-glow"
              >
                <stat.icon className="w-8 h-8 text-purple-400 mb-4" />
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}