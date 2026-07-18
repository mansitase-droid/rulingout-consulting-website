import React from 'react';
import Image from '@/components/WatermarkedImage';
import Link from 'next/link';
import BackgroundPaths from '@/components/BackgroundPaths';

export default function Hero() {
  return (
    <section style={{
      padding: '8rem 0',
      backgroundColor: 'var(--bg-darker)',
      color: 'var(--text-primary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0
      }}>
        <Image src="/assets/hero_office.jpg" alt="Corporate Office" fill style={{ objectFit: 'cover', opacity: 0.15 }} priority />
        {/* Subtle background glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80vw', height: '80vw', background: 'radial-gradient(circle, rgba(255,87,34,0.08) 0%, rgba(255,87,34,0) 60%)', zIndex: 0, pointerEvents: 'none' }}></div>
      
        <BackgroundPaths />
      </div>

      {/* Structural Grid Lines */}
      <div className="grid-lines container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      <div className="container animate-fade-in-up" style={{ position: 'relative', zIndex: 2 }}>
        
        <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Column - Text Content */}
          <div>
            <h1 style={{
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              color: 'var(--text-primary)'
            }}>
              Running A<br/>
              Practice<br/>
              Is Hard Enough.
            </h1>
            
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              color: 'var(--accent-orange)',
              textTransform: 'uppercase',
              marginBottom: '2rem'
            }}>
              Leave The Business To Us.
            </h2>
            
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              maxWidth: '450px',
              marginBottom: '3rem'
            }}>
              Optimize operations, elevate patient care, and drive growth with expert healthcare consulting.
            </p>

            <Link href="/services" className="btn-primary" style={{ padding: '1.2rem 2.5rem', fontWeight: 800 }}>
              Explore Our Services
            </Link>
          </div>

          {/* Right Column - Graphic */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '500px',
              aspectRatio: '4/5',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              border: '1px solid var(--border-color)'
            }}>
              <Image 
                src="/assets/hero_doctor.jpg" 
                alt="Healthcare Consulting Professional" 
                fill 
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 500px"
                priority
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
