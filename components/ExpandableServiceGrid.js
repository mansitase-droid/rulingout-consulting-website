'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: "Social Media Promotion",
    shortDesc: "Establish absolute digital leadership and patient trust via systemic social branding profiles.",
    expandedText: "Building absolute authority requires more than just posting. Our strategy includes mapping patient demographics, curating premium Instagram and LinkedIn architectures, and deploying trust-building campaigns that position the doctor as the definitive regional expert. We engineer your digital presence to convert casual scrollers into high-value, booked patients.",
    watermark: "01"
  },
  {
    id: 2,
    title: "Healthcare Content Production",
    shortDesc: "Professional scripts, premium capture, and editing tailored specifically to the medical landscape.",
    expandedText: "High-end visual storytelling is the fastest way to build patient trust at scale. We handle the friction: scripting medical speaking arcs, directing premium clinical shoots, and editing for maximum algorithmic retention. Our production team understands medical compliance and turns complex clinical jargon into engaging, digestible content that patients actually want to watch.",
    watermark: "02"
  },
  {
    id: 3,
    title: "Revenue Leakage Audit",
    shortDesc: "Identify invisible operational bottlenecks and billing discrepancies to recover lost hospital margins.",
    expandedText: "The financial blueprint to scaling your hospital. We surgically audit IPD billing, pharmacy inventory workflows, and operational blind spots to permanently plug the 3-10% of revenue that hospitals silently lose every month. Our analytical blueprints provide actionable, immediate steps to optimize cash flow and maximize your practice's profitability without increasing patient volume.",
    watermark: "03"
  },
  {
    id: 4,
    title: "Clinic Setup & Branding Advisory",
    shortDesc: "End-to-end strategic advisory for new doctors setting up clinics or medical spaces.",
    expandedText: "The premium patient experience starts before they even walk in the door. From architectural patient-flow mapping and clinical equipment vendor selection to creating a bespoke visual identity—including logos, interior signage, and premium stationery. We ensure your new clinic commands premium pricing and absolute authority from day one.",
    watermark: "04"
  }
];

export default function ExpandableServiceGrid() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .bento-wide {
          grid-column: span 2;
        }

        .bento-square {
          grid-column: span 1;
        }

        .service-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 3rem 2.5rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          height: 100%;
          backdrop-filter: blur(10px);
        }
        
        .service-card:hover {
          border-color: var(--accent-orange);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1), inset 0 -2px 20px rgba(255,87,34,0.05);
        }

        .service-card.expanded {
          border-color: var(--accent-orange);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1), inset 0 -2px 20px rgba(255,87,34,0.05);
          background-color: var(--bg-primary);
        }

        .service-card .watermark {
          position: absolute;
          top: -20px;
          right: 10px;
          font-size: 8rem;
          font-weight: 900;
          color: var(--border-inverse);
          line-height: 1;
          transition: color 0.4s ease;
          pointer-events: none;
          z-index: 0;
          opacity: 0.1;
        }

        .service-card:hover .watermark, .service-card.expanded .watermark {
          color: rgba(255,87,34,0.15);
        }

        .service-card .explore-btn {
          margin-top: auto;
          color: var(--accent-orange);
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding-top: 2rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          cursor: pointer;
          transition: opacity 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .service-card .explore-btn:hover {
          opacity: 0.7;
        }

        .expanded-content {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .expanded-content.show {
          max-height: 500px;
          opacity: 1;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
        }

        @media (max-width: 992px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .bento-wide, .bento-square {
            grid-column: span 1;
          }
        }
      `}} />

      <div className="bento-grid">
        {services.map((service, index) => {
          // Asymmetric Bento Layout: Index 0 and 3 are wide, 1 and 2 are square
          const bentoClass = (index === 0 || index === 3) ? 'bento-wide' : 'bento-square';
          
          return (
            <div 
              key={service.id} 
              className={`service-card animate-fade-in-up ${bentoClass} ${expandedId === service.id ? 'expanded' : ''}`} 
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="watermark">{service.watermark}</div>
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1.5rem', maxWidth: '90%', color: expandedId === service.id ? 'var(--accent-orange)' : 'var(--text-primary)', lineHeight: 1.2, transition: 'color 0.3s ease' }}>
                  {service.title.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {word} {i === 1 || i === 3 ? <br className="hidden-mobile" /> : ''}
                    </React.Fragment>
                  ))}
                </h2>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  {service.shortDesc}
                </p>

                <div className={`expanded-content ${expandedId === service.id ? 'show' : ''}`}>
                  <p style={{ color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                    {service.expandedText}
                  </p>
                  
                  <Link href="/contact" className="btn-primary" style={{ padding: '0.8rem 1.5rem', fontSize: '0.85rem' }}>
                    Enquire About This Service
                  </Link>
                </div>
              </div>

              <button onClick={() => toggleExpand(service.id)} className="explore-btn">
                {expandedId === service.id ? 'Close Details -' : 'Explore Details +'}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
