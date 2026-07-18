'use client';

import React from 'react';
import Link from 'next/link';

export default function PainPointBanner() {
  return (
    <section style={{ 
      padding: '6rem 0', 
      backgroundColor: 'var(--bg-darker)', 
      color: 'var(--text-primary)',
      borderTop: '1px solid rgba(255,87,34,0.2)',
      borderBottom: '1px solid rgba(255,87,34,0.2)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="glow-orb glow-orange" style={{ width: '400px', height: '400px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.5 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '900px' }}>
        <div style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: 'var(--border-color)', borderRadius: 'var(--radius)', color: 'var(--accent-orange)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2rem' }}>
          The Healthcare Marketing Dilemma
        </div>
        
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '2rem', textTransform: 'uppercase' }}>
          Why 90% of Doctors <span style={{ color: 'var(--accent-orange)' }}>Fail</span> At Social Media
        </h2>
        
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
          A doctor should be busy treating patients. But modern patients demand visible, authoritative experts. Discover the hidden costs of DIY medical branding and why traditional marketing agencies are failing the healthcare sector.
        </p>
        
        <Link href="/medical-branding" className="btn-primary hover-orange" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', fontWeight: 800, display: 'inline-block', border: 'none', cursor: 'pointer', textDecoration: 'none' }}>
          Read The Full Manifesto
        </Link>
      </div>
    </section>
  );
}
