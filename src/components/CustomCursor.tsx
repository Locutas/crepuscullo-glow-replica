"use client";

import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (dotRef.current) {
        const { clientX, clientY } = e;
        
        // Centraliza a cruz (14px / 2 = 7)
        dotRef.current.style.transform = `translate3d(${clientX - 7}px, ${clientY - 7}px, 0)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div ref={dotRef} className="custom-cursor top-0 left-0" />
  );
};

export default CustomCursor;