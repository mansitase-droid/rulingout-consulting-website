import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';

export const metadata = {
  title: 'About Us | Rulingout Consulting Services',
  description: 'Founded in 2024, Rulingout bridges the gap between clinical intent and operational performance to safeguard and grow healthcare revenue.',
};

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)', overflowX: 'hidden' }}>
      <Navbar />

      {/* HERO SECTION */}
      <section style={{ 
        padding: '12rem 2rem 8rem 2rem', 
        position: 'relative', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center',
        borderBottom: '1px solid var(--border-color)'
      }}>
        {/* Ambient Glow */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(255,87,34,0.06) 0%, rgba(255,87,34,0) 60%)',
          zIndex: 0, pointerEvents: 'none'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '2rem', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            Our <span style={{ color: 'var(--accent-orange)' }}>Story</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '4rem', textAlign: 'justify' }}>
            Founded in 2024, Rulingout was born from a realization shared by healthcare industry masterminds: the medical sector is undergoing a massive transformation, and current management structures are struggling to keep pace. While doctors and hospital owners remain dedicated to clinical excellence, the administrative burden—ranging from documentation and compliance to staff turnover—is eroding focus and, ultimately, revenue. We recognized that even well-resourced facilities often lack the specific operational efficiency needed to scale in a competitive landscape.
          </p>

          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            padding: '3rem',
            borderRadius: '16px',
            border: '1px solid var(--border-color)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            textAlign: 'left'
          }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '40px', height: '4px', backgroundColor: 'var(--accent-orange)' }}></div>
              Our Mission
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              To safeguard and grow your practice's revenue by bridging the gap between clinical intent and operational performance. We do not just solve isolated problems; we identify the structural bottlenecks that drain your bottom line. By optimizing your internal processes, we <strong style={{ color: 'var(--text-primary)' }}>"rule out"</strong> the inefficiencies that inhibit financial growth, allowing you to focus on your patients while we secure your practice’s sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* THE RULINGOUT DIFFERENCE */}
      <section style={{ padding: '8rem 2rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem auto' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>
              The Rulingout Difference
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--accent-orange)', fontWeight: 600, marginBottom: '1.5rem' }}>
              Revenue-Driven Strategy
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              We take a holistic approach to your practice’s health. Our work is designed to impact your operational performance through:
            </p>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            .difference-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 2rem;
            }
            @media (max-width: 768px) {
              .difference-grid {
                grid-template-columns: 1fr;
              }
            }
          `}} />
          <div className="difference-grid">
            
            <div className="hover-lift" style={{ backgroundColor: 'var(--bg-secondary)', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '10px', backgroundColor: 'rgba(255,87,34,0.1)', color: 'var(--accent-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Comprehensive Revenue Audits</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>We analyze end-to-end workflows to identify where revenue is being lost—whether through stock discrepancies, documentation gaps, or inefficient resource allocation.</p>
            </div>

            <div className="hover-lift" style={{ backgroundColor: 'var(--bg-secondary)', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '10px', backgroundColor: 'rgba(255,87,34,0.1)', color: 'var(--accent-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Operational Scaling</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>We implement tailored corrective action plans that stabilize your management structure, helping you move from manual, reactive operations to streamlined, proactive growth.</p>
            </div>

            <div className="hover-lift" style={{ backgroundColor: 'var(--bg-secondary)', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '10px', backgroundColor: 'rgba(255,87,34,0.1)', color: 'var(--accent-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Strategic Content & Visibility</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>We optimize your brand’s digital presence to ensure your expertise reaches the right audience, driving growth for your practice beyond the four walls of your clinic.</p>
            </div>

            <div className="hover-lift" style={{ backgroundColor: 'var(--bg-secondary)', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '10px', backgroundColor: 'rgba(255,87,34,0.1)', color: 'var(--accent-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Compliance & Risk Mitigation</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>We manage the burden of evolving regulatory requirements, ensuring your practice remains compliant while minimizing the administrative drag that hurts your daily revenue.</p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR IMPACT */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
          
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Our Impact</h2>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--accent-orange)', marginBottom: '1.5rem' }}>Turning Operations Into Revenue</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
              At Rulingout, we understand that in the healthcare sector, <strong style={{ color: 'var(--text-primary)' }}>time is capital and efficiency is currency</strong>. Our interventions are designed to create a direct, positive impact on your financial health.
            </p>
          </div>

          <div style={{ flex: '2 1 600px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-orange)', opacity: 0.5 }}>01</div>
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Plugging Revenue Leaks</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>We systematically audit and resolve discrepancies in inventory and procurement, ensuring that every asset is accounted for and optimized for profit.</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-orange)', opacity: 0.5 }}>02</div>
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Strengthening Management Structures</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>By implementing robust policy frameworks and documentation protocols, we reduce the financial drag caused by high staff turnover and operational chaos.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-orange)', opacity: 0.5 }}>03</div>
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Scaling for Growth</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Our strategic guidance provides the operational foundation necessary to expand your patient volume and practice footprint without compromising service quality.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-orange)', opacity: 0.5 }}>04</div>
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Optimizing Digital Performance</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Through integrated content strategy and search optimization, we bridge the gap between your clinical expertise and your target market, effectively converting digital presence into patient acquisition.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '8rem 2rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Ready to Scale?</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>Stop letting operational inefficiencies drain your revenue. Let's build a sustainable structure for your practice.</p>
          <a href="/contact" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>Get in Touch</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
