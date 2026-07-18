"use client";
import React, { useState } from 'react';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Checklist sent to ${email}! (Demo)`);
    setEmail('');
  };

  return (
    <section style={{ padding: '5rem 0', backgroundColor: 'var(--accent-orange)', color: 'var(--bg-white)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1 }}>
          Do you want to save 10% of Your Hospital's Revenue?
        </h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', opacity: 0.9 }}>
          Download our free <strong>10-Point Revenue Leakage Checklist</strong> to identify operational blind spots in your pharmacy, IPD billing, and clinical process flows today.
        </p>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', maxWidth: '500px', margin: '0 auto', flexDirection: 'row', flexWrap: 'wrap' }}>
          <input 
            type="email" 
            placeholder="Enter your work email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ 
              flex: '1 1 250px', 
              padding: '1rem 1.5rem', 
              borderRadius: '4px', 
              border: 'none', 
              fontSize: '1rem',
              outline: 'none',
              color: 'var(--text-primary)'
            }} 
          />
          <button 
            type="submit" 
            style={{ 
              backgroundColor: 'var(--bg-darker)', 
              color: 'var(--bg-white)', 
              padding: '1rem 2rem', 
              border: 'none', 
              borderRadius: '4px',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#000'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-darker)'}
          >
            Download Checklist
          </button>
        </form>
      </div>
    </section>
  );
}
