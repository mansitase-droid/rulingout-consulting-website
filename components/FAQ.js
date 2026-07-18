"use client";
import React, { useState } from 'react';

const faqs = [
  {
    question: "How do you audit hospital revenue leakage?",
    answer: "We perform a comprehensive cross-audit of your IPD procedures, billing packages, pharmaceutical stock logs, and equipment utilization. By reconciling clinical data with financial records, we identify operational inefficiencies and billing gaps that typically cost hospitals 3-10% of their total revenue."
  },
  {
    question: "Why do medical doctors need personal branding?",
    answer: "Patients research doctors online before booking appointments. Personal branding through search engine marketing, YouTube, and Google My Business establishes local authority, builds patient trust, and drives high-intent organic leads to your clinic rather than relying solely on hospital aggregators."
  },
  {
    question: "Do you offer clinic setup advisory?",
    answer: "Yes. We consult on physical layouts for optimal patient flows, pharmacy design spacing, equipment purchase reviews, and demographic mapping to help you launch and scale premium medical practices successfully."
  },
  {
    question: "How long does a typical consulting engagement last?",
    answer: "Our Elimination Audits typically take 4-6 weeks to identify leverage points. Implementation and strategic synthesis (like branding and marketing operations) are usually managed on a 6-12 month retainer to ensure sustainable growth and measurable ROI."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  // Generate FAQPage schema for AEO (Answer Engine Optimization)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-secondary)' }}>
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
          <p style={{ color: 'var(--text-muted)' }}>Common inquiries about our healthcare consulting process.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              style={{ 
                backgroundColor: 'var(--text-primary)', 
                borderRadius: 'var(--radius)', 
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
              }}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                style={{ 
                  width: '100%', 
                  padding: '1.5rem', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)'
                }}
              >
                {faq.question}
                <span style={{ color: 'var(--accent-orange)', transform: openIndex === index ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </span>
              </button>
              
              <div style={{ 
                padding: openIndex === index ? '0 1.5rem 1.5rem 1.5rem' : '0 1.5rem', 
                maxHeight: openIndex === index ? '500px' : '0', 
                overflow: 'hidden', 
                transition: 'all 0.3s ease',
                color: 'var(--text-muted)',
                lineHeight: 1.6
              }}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
