import React from 'react';

interface VideoCardProps {
  url: string;
  title: string;
  description: string;
  isShort?: boolean;
}

export default function VideoCard({ url, title, description, isShort = false }: VideoCardProps) {
  const getVideoId = (url: string) => {
    const shortUrlRegex = /shorts\/([a-zA-Z0-9_-]+)/;
    const standardUrlRegex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/;
    
    const shortMatch = url.match(shortUrlRegex);
    const standardMatch = url.match(standardUrlRegex);
    
    return shortMatch ? shortMatch[1] : standardMatch ? standardMatch[1] : '';
  };

  const videoId = getVideoId(url);
  const embedUrl = isShort 
    ? `https://www.youtube.com/embed/${videoId}?rel=0&loop=1`
    : `https://www.youtube.com/embed/${videoId}?rel=0`;

  return (
    <div className="flex flex-col h-full bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 border border-gray-700">
      <div className={`relative w-full ${isShort ? 'aspect-[9/16]' : 'aspect-video'}`}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 flex-1">{description}</p>
        <div className="mt-4 pt-4 border-t border-gray-700">
          <span className="inline-flex items-center text-sm text-purple-400">
            {isShort ? 'Short-form Content' : 'Full-length Content'}
          </span>
        </div>
      </div>
    </div>
  );
}