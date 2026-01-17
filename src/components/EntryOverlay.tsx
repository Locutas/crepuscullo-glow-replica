"use client";

import React, { useState, useEffect } from 'react';

interface EntryOverlayProps {
  onEnter: () => void;
}

const EntryOverlay = ({ onEnter }: EntryOverlayProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleEnter = () => {
    setIsVisible(false);
    setTimeout(onEnter, 500);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-500">
      <button 
        onClick={handleEnter}
        className="px-8 py-3 border border-white/10 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all duration-300 rounded-full text-xs tracking-[4px] uppercase font-medium backdrop-blur-sm"
      >
        Confirmar
      </button>
    </div>
  );
};

export default EntryOverlay;