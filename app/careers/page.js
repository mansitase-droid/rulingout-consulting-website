import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import JobPositions from '@/components/JobPositions';

// SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization) Metadata
export const metadata = {
  title: 'Careers | Rulingout Consulting Services',
  description: 'Join the Rulingout Consulting Services family. We look forward for people to work and grow with us rather than work for us. Discover growth opportunities and unique prospects.',
  keywords: 'Careers, Healthcare Consulting Jobs, Medical Marketing Jobs, Video Editor Jobs, Hospital Administrator, Rulingout Careers',
  openGraph: {
    title: 'Careers | Rulingout Consulting Services',
    description: 'At Rulingout consulting Services, each appointed person is a part of the family. Work and grow with us.',
    type: 'website',
  }
};

export default function CareersPage() {
  const openPositions = [
    { 
      title: "Video Editor", 
      dept: "Media & Production", 
      desc: "Craft high-end, search-intent reels and patient education clips that build clinical authority.",
      link: "mailto:rulingoutindia@gmail.com?subject=Application%20for%20Video%20Editor" 
    },
    { 
      title: "Accountant", 
      dept: "Finance", 
      desc: "Manage financial logistics, billing packages, and internal accounting with extreme precision.",
      link: "mailto:rulingoutindia@gmail.com?subject=Application%20for%20Accountant" 
    },
    { 
      title: "Hospital Administrator", 
      dept: "Operations", 
      desc: "Ensure smooth physical layouts, patient flows, and cross-audit IPD procedures.",
      link: "mailto:rulingoutindia@gmail.com?subject=Application%20for%20Hospital%20Administrator" 
    },
    { 
      title: "Versatile Team Member", 
      dept: "Open Application", 
      desc: "Are you highly versatile and think you can work with us as a strong team member? We always have room for exceptional talent.",
      link: "mailto:rulingoutindia@gmail.com?subject=Application%20for%20Versatile%20Team%20Member" 
    }
  ];

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border-color)' }}>
        <div className="glow-orb glow-orange" style={{ width: '500px', height: '500px', top: '0', right: '-10%', opacity: 0.15 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '900px' }}>
          <h1 className="animate-fade-in-up" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.1, textTransform: 'uppercase', marginBottom: '2rem' }}>
            Elevate Your <span style={{ color: 'var(--accent-orange)' }}>Career</span>.
          </h1>
          
          <blockquote className="animate-fade-in-up" style={{ animationDelay: '0.2s', fontSize: '1.4rem', color: 'var(--text-primary)', fontWeight: 500, fontStyle: 'italic', lineHeight: 1.6, borderLeft: '4px solid var(--accent-orange)', paddingLeft: '2rem', margin: '0 auto 3rem auto', textAlign: 'left' }}>
            "At Rulingout consulting Services, each appointed person is a part of the family. We look forward for people to work and grow with us rather than work for us."
          </blockquote>
        </div>
      </section>

      {/* Culture Section */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div className="animate-fade-in-up">
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                Growth Opportunities & <br/><span style={{ color: 'var(--accent-orange)' }}>Unique Prospects</span>
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                We are rapidly transforming the healthcare consulting landscape in India. Joining our team means stepping into a role where your impact is visible and immediate. 
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                Whether you are optimizing hospital revenues or crafting compelling medical narratives, we provide an environment designed for aggressive professional growth and continuous learning.
              </p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ backgroundColor: 'var(--bg-primary)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ color: 'var(--accent-orange)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Elite</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Work directly with top-tier hospitals and clinics.</p>
              </div>
              <div style={{ backgroundColor: 'var(--bg-primary)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ color: 'var(--accent-orange)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Family</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>A deeply collaborative, supportive culture.</p>
              </div>
              <div style={{ backgroundColor: 'var(--bg-primary)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ color: 'var(--accent-orange)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Growth</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Scale your skills alongside a rapidly expanding firm.</p>
              </div>
              <div style={{ backgroundColor: 'var(--bg-primary)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ color: 'var(--accent-orange)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Impact</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Real, measurable improvements in patient care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section style={{ padding: '8rem 0', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, textTransform: 'uppercase' }}>Open Positions</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-orange)', margin: '1.5rem auto' }}></div>
          </div>
          
          <JobPositions positions={openPositions} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
