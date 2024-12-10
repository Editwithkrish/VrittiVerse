import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <Sparkles className="w-8 h-8 text-purple-400" />
        <div className="absolute inset-0 animate-ping opacity-50">
          <Sparkles className="w-8 h-8 text-purple-400" />
        </div>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        VrittiVerse
      </span>
    </div>
  );
}