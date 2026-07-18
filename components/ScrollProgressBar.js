'use client';

import React, { useState, useEffect } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '4px',
      backgroundColor: 'transparent',
      zIndex: 9999
    }}>
      <div style={{
        height: '100%',
        width: `${scrollProgress}%`,
        backgroundColor: 'var(--accent-orange)',
        transition: 'width 0.1s ease'
      }} />
    </div>
  );
}
