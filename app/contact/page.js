'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [queryType, setQueryType] = useState('Strategic Audit');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hospitalName: '',
    revenue: '',
    specialty: '',
    socialHandles: '',
    brandingGoal: '',
    topic: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, queryType })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', hospitalName: '', revenue: '', specialty: '', socialHandles: '', brandingGoal: '', topic: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message);
    }
  };

  const inputStyle = { width: '100%', padding: '1rem', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)', outline: 'none' };
  const labelStyle = { display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem' };

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      <Navbar />

      <section style={{ padding: '8rem 0 6rem 0', position: 'relative', overflow: 'hidden' }}>
        
        {/* Ambient Glow */}
        <div style={{
          position: 'absolute', top: '20%', right: '-10%', transform: 'translateY(-50%)',
          width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(255,87,34,0.08) 0%, rgba(255,87,34,0) 60%)',
          zIndex: 0, pointerEvents: 'none'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            
            {/* Left Column: Info */}
            <div className="animate-fade-in-up">
              <div style={{ 
                display: 'inline-block', 
                backgroundColor: 'rgba(255,87,34,0.1)', 
                color: 'var(--accent-orange)', 
                padding: '0.4rem 1rem', 
                fontSize: '0.75rem', 
                fontWeight: 800, 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                borderRadius: '50px',
                marginBottom: '1.5rem',
                border: '1px solid rgba(255,87,34,0.2)'
              }}>
                Strategic Consultation
              </div>
              <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '2rem' }}>
                Let's scale your <br/>medical practice.
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '450px' }}>
                We partner with high-ambition clinics and hospitals to plug revenue leaks, establish niche dominance, and build world-class healthcare brands.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <h4 style={{ color: 'var(--accent-orange)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Call Us</h4>
                  <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>+91 8980922333</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--accent-orange)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Email Us</h4>
                  <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>rulingoutindia@gmail.com</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--accent-orange)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Global HQ</h4>
                  <p style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-muted)' }}>
                    Rulingout Consulting Services<br/>
                    Vadodara, Gujarat<br/>
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div style={{ 
                backgroundColor: 'var(--bg-secondary)', 
                padding: '3rem', 
                borderRadius: '12px', 
                border: '1px solid var(--border-color)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)'
              }}>
                
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem' }}>Submit an Inquiry</h3>

                {status === 'success' ? (
                  <div style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)', border: '1px solid #4CAF50', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
                    <h4 style={{ color: '#4CAF50', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Request Received</h4>
                    <p style={{ color: 'var(--text-muted)' }}>Our strategic team will review your details and contact you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    
                    <div style={{ marginBottom: '0.5rem' }}>
                      <label style={{ ...labelStyle, color: 'var(--text-primary)' }}>What are you looking for? *</label>
                      <select 
                        value={queryType} onChange={(e) => setQueryType(e.target.value)}
                        style={{ ...inputStyle, border: '1px solid var(--accent-orange)', fontWeight: 600, appearance: 'none', backgroundColor: 'var(--bg-dark)' }}
                      >
                        <option value="Strategic Audit">Strategic Audit</option>
                        <option value="Social Media & Branding">Social Media & Branding</option>
                        <option value="General Inquiry / Career">General Inquiry / Career</option>
                      </select>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                      <div>
                        <label style={labelStyle}>Full Name *</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Phone *</label>
                        <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} style={inputStyle} />
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Work Email *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} style={inputStyle} />
                    </div>

                    {/* DYNAMIC FIELDS: Strategic Audit */}
                    {queryType === 'Strategic Audit' && (
                      <>
                        <div>
                          <label style={labelStyle}>Hospital / Clinic Name *</label>
                          <input type="text" name="hospitalName" required value={formData.hospitalName} onChange={handleChange} style={inputStyle} />
                        </div>
                        <div>
                          <label style={labelStyle}>Monthly Revenue (Optional)</label>
                          <select name="revenue" value={formData.revenue} onChange={handleChange} style={{ ...inputStyle, appearance: 'none' }}>
                            <option value="">Select an option</option>
                            <option value="< Rs. 10L">Less than Rs. 10 Lakhs</option>
                            <option value="Rs. 10L - 50L">Rs. 10 Lakhs - Rs. 50 Lakhs</option>
                            <option value="Rs. 50L - 2Cr">Rs. 50 Lakhs - Rs. 2 Crores</option>
                            <option value="Rs. 2Cr+">Rs. 2 Crores+</option>
                          </select>
                        </div>
                      </>
                    )}

                    {/* DYNAMIC FIELDS: Social Media & Branding */}
                    {queryType === 'Social Media & Branding' && (
                      <>
                        <div>
                          <label style={labelStyle}>Medical Specialty *</label>
                          <input type="text" name="specialty" placeholder="e.g. Dermatologist, Orthopedic Surgeon" required value={formData.specialty} onChange={handleChange} style={inputStyle} />
                        </div>
                        <div>
                          <label style={labelStyle}>Current Social Media Handles (Optional)</label>
                          <input type="text" name="socialHandles" placeholder="@username or URL" value={formData.socialHandles} onChange={handleChange} style={inputStyle} />
                        </div>
                        <div>
                          <label style={labelStyle}>Primary Branding Goal (Optional)</label>
                          <select name="brandingGoal" value={formData.brandingGoal} onChange={handleChange} style={{ ...inputStyle, appearance: 'none' }}>
                            <option value="">Select an option</option>
                            <option value="Patient Acquisition">Patient Acquisition</option>
                            <option value="Brand Awareness">General Brand Awareness</option>
                            <option value="Educational Content">Patient Education / Medical Content</option>
                          </select>
                        </div>
                      </>
                    )}

                    {/* DYNAMIC FIELDS: General Inquiry / Career */}
                    {queryType === 'General Inquiry / Career' && (
                      <div>
                        <label style={labelStyle}>Topic *</label>
                        <select name="topic" required value={formData.topic} onChange={handleChange} style={{ ...inputStyle, appearance: 'none' }}>
                          <option value="">Select an option</option>
                          <option value="Job Application">Job Application</option>
                          <option value="Partnership">Partnership / Collaboration</option>
                          <option value="Other">Other General Inquiry</option>
                        </select>
                      </div>
                    )}

                    <div>
                      <label style={labelStyle}>How can we help you? *</label>
                      <textarea name="message" required value={formData.message} onChange={handleChange} rows="4" style={{ ...inputStyle, resize: 'vertical' }}></textarea>
                    </div>

                    {status === 'error' && (
                      <div style={{ color: '#ff3333', fontSize: '0.9rem', padding: '0.5rem', backgroundColor: 'rgba(255,51,51,0.1)', borderRadius: '4px' }}>
                        {errorMessage}
                      </div>
                    )}

                    <button type="submit" disabled={status === 'loading'} className="btn-primary" style={{ width: '100%', padding: '1.2rem', marginTop: '0.5rem', opacity: status === 'loading' ? 0.7 : 1 }}>
                      {status === 'loading' ? 'Submitting...' : 'Submit Request'}
                    </button>
                    <p style={{ fontSize: '0.75rem', color: '#6c757d', textAlign: 'center', marginTop: '0.5rem' }}>
                      Your information is secure and will never be shared.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
