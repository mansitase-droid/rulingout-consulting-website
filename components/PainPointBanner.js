'use client';

import React from 'react';
import Link from 'next/link';
import Image from '@/components/WatermarkedImage';

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
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Image Column */}
          <div style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            border: '1px solid var(--border-color)'
          }}>
            <Image 
              src="/assets/marketing_dilemma.jpg" 
              alt="Healthcare Marketing Dilemma" 
              fill 
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text Column */}
          <div>
            <div style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: 'var(--border-color)', borderRadius: 'var(--radius)', color: 'var(--accent-orange)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              The Healthcare Marketing Dilemma
            </div>
            
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              Why 90% of Doctors <span style={{ color: 'var(--accent-orange)' }}>Fail</span> At Social Media
            </h2>
            
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              A doctor should be busy treating patients. But modern patients demand visible, authoritative experts. Discover the hidden costs of DIY medical branding and why traditional marketing agencies are failing the healthcare sector.
            </p>
            
            <Link href="/medical-branding" className="btn-primary hover-orange" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', fontWeight: 800, display: 'inline-block', border: 'none', cursor: 'pointer', textDecoration: 'none' }}>
              Read The Full Manifesto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
