"use client";

import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (dotRef.current && outlineRef.current) {
        const { clientX, clientY } = e;
        
        dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
        outlineRef.current.style.transform = `translate3d(${clientX - 20}px, ${clientY - 20}px, 0)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor top-0 left-0" />
      <div ref={outlineRef} className="custom-cursor-outline top-0 left-0" />
    </>
  );
};

export default CustomCursor;