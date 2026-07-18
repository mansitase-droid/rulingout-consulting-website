"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';

function SpotlightCard({ num, title, description, icon }) {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        borderRadius: 'var(--radius)',
        border: '1px solid var(--border-color)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '3rem 2rem',
        boxShadow: 'var(--shadow-md)',
        transition: 'border-color 0.3s ease'
      }}
    >
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: '-2px',
          opacity: opacity,
          transition: 'opacity 0.3s ease',
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,87,34,0.15), transparent 40%)`,
        }}
      />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <div style={{ color: 'var(--accent-orange)' }}>
            {icon}
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '1.5rem', fontWeight: 900, fontFamily: 'var(--font-title)' }}>
            {num}
          </div>
        </div>
        
        <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3 }}>
          {title}
        </h3>
        
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Capabilities() {
  const capabilities = [
    {
      num: "01",
      title: "Doctor Branding & Social Media",
      description: "Enhance local authority with targeted medical search engine marketing. We manage hospital and clinic profiles on Google, Instagram, and YouTube to connect you with local patient searches.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <path d="M12 18h.01"></path>
          <circle cx="12" cy="8" r="2.5"></circle>
        </svg>
      )
    },
    {
      num: "02",
      title: "Healthcare Video Production",
      description: "High-production medical scripting and video capture. We design search-intent reels and patient education clips that address patient concerns while complying with clinical advertising standards.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="14" height="10" rx="2" ry="2"></rect>
          <polygon points="16 12 22 8 22 16 16 12"></polygon>
        </svg>
      )
    },
    {
      num: "03",
      title: "Hospital Revenue Audits",
      description: "Plug administrative and pharmacy financial leaks. We cross-audit IPD procedures, billing packages, and pharmaceutical stock logs to recover 3-10% of lost hospital revenues.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 11 14 15 10"></polyline>
        </svg>
      )
    },
    {
      num: "04",
      title: "Clinic Setup Advisory",
      description: "Smooth physical layouts and patient flows. We consult on pharmacy design spacing, equipment purchase reviews, and demographic mapping to launch premium practices in Gujarat.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"></path>
          <path d="M12 7v4M10 9h4"></path>
          <path d="M2 21h20"></path>
        </svg>
      )
    }
  ];

  return (
    <section style={{ padding: '8rem 0', backgroundColor: 'var(--bg-darker)', color: 'var(--text-primary)', position: 'relative' }}>
      <div className="container">
        
        <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
          <span style={{
            display: 'block',
            color: 'var(--accent-orange)',
            fontWeight: 700,
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginBottom: '1.5rem'
          }}>
            Our Core Capabilities
          </span>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            textTransform: 'uppercase',
            maxWidth: '1000px',
            margin: '0 auto',
            color: 'var(--text-primary)'
          }}>
            Medical Doctor Branding <br className="hidden-mobile" /> & <span style={{ color: 'var(--accent-orange)', fontWeight: 300, textTransform: 'none' }}>Hospital Revenue Auditing</span>
          </h2>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .capabilities-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            margin-bottom: 3rem;
          }
          @media (max-width: 768px) {
            .capabilities-grid {
              grid-template-columns: 1fr;
            }
          }
        `}} />

        <div className="capabilities-grid">
          {capabilities.map((cap, i) => (
            <SpotlightCard 
              key={i} 
              num={cap.num} 
              title={cap.title} 
              description={cap.description} 
              icon={cap.icon} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}
