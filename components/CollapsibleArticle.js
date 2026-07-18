'use client';
import React, { useState, useRef } from 'react';

export default function CollapsibleArticle({ contentHtml }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const articleRef = useRef(null);

  const toggleCollapse = () => {
    if (!isCollapsed) {
      // If we are collapsing it, we want to scroll back up to the top of the article
      // so the user doesn't get disoriented when the page shrinks.
      if (articleRef.current) {
        const y = articleRef.current.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div ref={articleRef}>
      <div 
        className="blog-content animate-fade-in-up" 
        style={{ 
          animationDelay: '0.2s', 
          maxHeight: isCollapsed ? '250px' : '20000px', 
          overflow: 'hidden',
          position: 'relative',
          transition: 'max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        
        {isCollapsed && (
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '150px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))',
            pointerEvents: 'none'
          }} />
        )}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2rem' }}>
        <button 
          onClick={toggleCollapse}
          style={{
            background: 'none',
            border: '2px solid var(--accent-orange)',
            color: 'var(--accent-orange)',
            padding: '0.6rem 2rem',
            borderRadius: '50px',
            fontWeight: 700,
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => { e.target.style.background = 'var(--accent-orange)'; e.target.style.color = 'white'; }}
          onMouseLeave={(e) => { e.target.style.background = 'none'; e.target.style.color = 'var(--accent-orange)'; }}
        >
          {isCollapsed ? 'Read Full Article ↓' : 'Collapse Article ↑'}
        </button>
      </div>
    </div>
  );
}
