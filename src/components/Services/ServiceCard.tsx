import React from 'react';
import { LucideIcon } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

interface ServiceItemProps {
  icon: LucideIcon;
  text: string;
}

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  services: ServiceItemProps[];
}

export default function ServiceCard({ icon: Icon, title, description, services }: ServiceCardProps) {
  return (
    <ScrollReveal>
      <div className="bg-gray-800 rounded-xl p-8 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 border border-gray-700 hover-lift">
        <Icon className="w-12 h-12 text-purple-400 mb-6 float-animation" />
        <h3 className="text-2xl font-bold text-white mb-2 gradient-text">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <ul className="space-y-4 stagger-animation">
          {services.map((service) => (
            <li key={service.text} className="flex items-center gap-3 text-gray-300 slide-up-animation">
              <service.icon className="w-5 h-5 text-purple-400" />
              {service.text}
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}