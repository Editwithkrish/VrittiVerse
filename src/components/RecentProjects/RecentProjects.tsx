import React from 'react';
import VideoCard from './VideoCard';

const projects = [
  {
    url: 'https://youtube.com/shorts/6UKNHxk7c-c',
    title: 'Social Media Growth Strategy',
    description: 'See how we helped our client achieve explosive growth through targeted content strategy and community engagement techniques.',
    isShort: true
  },
  {
    url: 'https://www.youtube.com/shorts/oqeq5DuB0n4',
    title: 'Brand Development Success',
    description: 'A case study in building a strong personal brand from the ground up, showcasing our comprehensive approach to digital presence.',
    isShort: true
  },
  {
    url: 'https://youtu.be/0JSxbm2Ps_U',
    title: 'Complete Marketing Transformation',
    description: 'Watch how we revolutionized this brand\'s digital presence with our comprehensive approach to content strategy and audience engagement.',
    isShort: false
  }
];

export default function RecentProjects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Recent Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest success stories and see how we've helped creators and brands achieve their goals
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <VideoCard
              key={project.url}
              url={project.url}
              title={project.title}
              description={project.description}
              isShort={project.isShort}
            />
          ))}
        </div>
      </div>
    </section>
  );
}