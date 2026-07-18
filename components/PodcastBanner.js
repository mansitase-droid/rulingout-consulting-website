import React from 'react';
import Image from '@/components/WatermarkedImage';

export default function PodcastBanner() {
  return (
    <section style={{ 
      padding: '8rem 0', 
      backgroundColor: 'var(--bg-primary)', // extra dark background to make it distinct
      color: 'var(--text-primary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glowing orb for distinction */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(255,87,34,0.15) 0%, rgba(255,87,34,0) 70%)',
        zIndex: 1,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div className="grid-responsive" style={{
          backgroundColor: 'var(--bg-secondary)', /* deep slate */
          borderRadius: '16px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          padding: 'clamp(2rem, 5vw, 4rem)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05), 0 0 40px rgba(255,87,34,0.15)', // Glowing orange shadow
        }}>
          
          {/* Left Content */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            
            {/* Highly visible badges */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <div style={{ 
                backgroundColor: 'var(--accent-orange)', 
                color: 'var(--text-primary)', 
                padding: '0.5rem 1.25rem', 
                fontSize: '0.85rem', 
                fontWeight: 900, 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                borderRadius: '4px',
                boxShadow: '0 4px 15px rgba(255,87,34,0.4)'
              }}>
                100% FREE
              </div>
              <div style={{ 
                border: '1px solid rgba(255,255,255,0.2)', 
                color: 'var(--text-primary)', 
                padding: '0.5rem 1.25rem', 
                fontSize: '0.85rem', 
                fontWeight: 800, 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                borderRadius: '4px',
              }}>
                NOW CASTING GUESTS
              </div>
            </div>
            
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Amplify Your<br />
              <span style={{ color: 'var(--accent-orange)' }}>Health & Wellness Voice</span>
            </h2>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Be a Featured Guest on RULINGOUT <span style={{ color: 'var(--text-primary)', backgroundColor: 'var(--accent-orange)', padding: '0 0.4rem', borderRadius: '2px', display: 'inline-block' }}>PODCAST</span>
            </h3>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              Do you have a unique voice in the wellness space? Whether your expertise is in <strong>clinical medicine, mental health, spiritual healing, or financial wellness</strong>, we want to hear from you. We invite doctors, therapists, guides, and founders to speak on our premium media channels to build massive cross-disciplinary authority.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn-primary" style={{ padding: '1rem 2rem', fontWeight: 800, boxShadow: '0 10px 20px rgba(255,87,34,0.3)' }}>
                APPLY TO BE A GUEST
              </button>
              <button className="btn-secondary" style={{ 
                padding: '1rem 2rem', 
                fontWeight: 800, 
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderColor: 'rgba(255,255,255,0.1)',
                color: 'var(--text-primary)'
              }}>
                WATCH ON YOUTUBE
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '450px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
            <Image 
              src="https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?auto=format&fit=crop&w=800&q=80" 
              alt="Podcast Studio Setup" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
            {/* Subtle overlay to blend into the dark theme */}
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.1)' }}></div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
