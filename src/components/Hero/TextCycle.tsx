import React, { useEffect, useState } from 'react';

interface TextCycleProps {
  text: string;
}

export default function TextCycle({ text }: TextCycleProps) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayText('');
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="relative min-h-[4rem]">
      <h2 className="text-2xl md:text-4xl font-medium">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 glow-text">
          {displayText}
        </span>
        <span className="animate-pulse">|</span>
      </h2>
    </div>
  );
}