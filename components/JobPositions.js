'use client';

import React, { useState } from 'react';

export default function JobPositions({ positions }) {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApplyClick = (e, job) => {
    e.preventDefault();
    setSelectedJob(job);
  };

  const closePopup = () => {
    setSelectedJob(null);
  };

  return (
    <>
      <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {positions.map((job, index) => (
          <div key={index} className="job-card animate-fade-in-up" style={{ 
            animationDelay: `${0.2 + (index * 0.1)}s`,
            backgroundColor: 'var(--bg-secondary)', 
            border: '1px solid rgba(255,255,255,0.05)', 
            borderRadius: '12px', 
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.3s, border-color 0.3s'
          }}>
            <div style={{ color: 'var(--accent-orange)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              {job.dept}
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>{job.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2.5rem', flexGrow: 1 }}>
              {job.desc}
            </p>
            <button 
              onClick={(e) => handleApplyClick(e, job)} 
              className="btn-secondary inverse" 
              style={{ width: '100%', fontSize: '0.85rem' }}
            >
              Submit Your Resume →
            </button>
          </div>
        ))}
      </div>

      {selectedJob && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '1rem'
        }}>
          <div className="animate-fade-in-up" style={{
            backgroundColor: 'var(--bg-darker)',
            border: '1px solid rgba(255,87,34,0.3)',
            padding: '3rem',
            borderRadius: '12px',
            maxWidth: '500px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}>
            <div style={{ width: '60px', height: '60px', backgroundColor: 'rgba(255,87,34,0.1)', color: 'var(--accent-orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Thank you for your interest in Rulingout Consulting Services
            </h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
              Please email your resume directly to: <br/>
              <a href={selectedJob.link} style={{ color: 'var(--accent-orange)', fontWeight: 700, display: 'inline-block', marginTop: '0.5rem' }}>rulingoutindia@gmail.com</a>
            </p>
            <button onClick={closePopup} className="btn-primary" style={{ width: '100%', padding: '1rem' }}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
