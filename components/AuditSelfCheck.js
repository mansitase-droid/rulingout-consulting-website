import React from 'react';

export default function AuditSelfCheck() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does a new medical doctor or hospital need a revenue audit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, new clinics need an audit to establish foundational protocols. This includes defining profitable IPD and OPD billing structures from Day 1, optimizing the physical layout to prevent patient bottlenecks, preventing pharmacy overstocking before patient flow stabilizes, and setting up a robust, authoritative digital foundation."
        }
      },
      {
        "@type": "Question",
        "name": "Does an established doctor or hospital need a revenue audit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Established hospitals typically suffer a 3-10% revenue leakage. An audit is necessary to cross-audit IPD procedures against pharmaceutical logs for unbilled consumables, identify diagnostic equipment underutilization, combat brand stagnation against newer competitors, and resolve staff inefficiencies slowing clinical output."
        }
      }
    ]
  };

  return (
    <section style={{ padding: '8rem 0', backgroundColor: 'var(--bg-primary)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <span style={{ color: 'var(--accent-orange)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '1rem' }}>
            Self-Diagnosis
          </span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
            Do I Need A Hospital Audit?
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Whether you are just opening your doors or scaling an established practice, unoptimized operations are quietly eroding your margins. Identify your current phase:
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          
          {/* New Doctor Card */}
          <div style={{ 
            backgroundColor: 'var(--bg-secondary)', 
            padding: '3rem', 
            borderRadius: 'var(--radius)', 
            boxShadow: 'var(--shadow-md)',
            borderTop: '4px solid var(--text-primary)'
          }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              The New Practice
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontStyle: 'italic' }}>
              Focus: Prevention, Foundation, & Launch.
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ color: 'var(--accent-orange)', fontWeight: 900 }}>01</span>
                <div>
                  <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Pharmacy & Inventory</strong>
                  <span style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.5, display: 'block' }}>Are you accidentally overstocking perishables before patient flow stabilizes?</span>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ color: 'var(--accent-orange)', fontWeight: 900 }}>02</span>
                <div>
                  <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Billing Packages</strong>
                  <span style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.5, display: 'block' }}>Have you defined your IPD/OPD billing structures to be competitive yet profitable from Day 1?</span>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ color: 'var(--accent-orange)', fontWeight: 900 }}>03</span>
                <div>
                  <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Operational Flow</strong>
                  <span style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.5, display: 'block' }}>Is the physical clinic layout mapped to prevent patient bottlenecks?</span>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ color: 'var(--accent-orange)', fontWeight: 900 }}>04</span>
                <div>
                  <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Digital Foundation</strong>
                  <span style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.5, display: 'block' }}>Establishing a robust Google My Business and social presence before doors open.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Established Doctor Card */}
          <div style={{ 
            backgroundColor: 'var(--bg-dark)', 
            padding: '3rem', 
            borderRadius: 'var(--radius)', 
            color: 'var(--text-primary)',
            boxShadow: 'var(--shadow-md)',
            borderTop: '4px solid var(--accent-orange)'
          }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              The Established Hospital
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontStyle: 'italic' }}>
              Focus: Revenue Leakage, Scale, & Authority.
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ color: 'var(--accent-orange)', fontWeight: 900 }}>01</span>
                <div>
                  <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>The 3-10% Leakage</strong>
                  <span style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.5, display: 'block' }}>Cross-auditing IPD procedures against pharmaceutical logs to find unbilled consumables.</span>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ color: 'var(--accent-orange)', fontWeight: 900 }}>02</span>
                <div>
                  <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Equipment Underutilization</strong>
                  <span style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.5, display: 'block' }}>Are your expensive diagnostic machines actually meeting their monthly ROI targets?</span>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ color: 'var(--accent-orange)', fontWeight: 900 }}>03</span>
                <div>
                  <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Brand Stagnation</strong>
                  <span style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.5, display: 'block' }}>Are newer, digitally-savvy doctors stealing your market share despite your years of experience?</span>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ color: 'var(--accent-orange)', fontWeight: 900 }}>04</span>
                <div>
                  <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Staff Inefficiency</strong>
                  <span style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.5, display: 'block' }}>Identifying workflow bottlenecks where administrative staff slow down clinical output.</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
