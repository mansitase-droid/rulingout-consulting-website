'use client';

import Link from 'next/link';
import Image from '@/components/WatermarkedImage';
import React, { useState, useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #ffffff;
          cursor: pointer;
          padding: 0.5rem;
        }
        .mobile-menu-overlay {
          display: none;
        }
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .mobile-menu-overlay {
            display: block;
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background-color: #111827;
            padding: 2rem;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease-in-out;
            z-index: 40;
            pointer-events: none;
          }
          .mobile-menu-overlay.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }
          .mobile-menu-link {
            display: block;
            color: #ffffff;
            font-size: 1.25rem;
            font-weight: 700;
            text-transform: uppercase;
            padding: 1rem 0;
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }
        }
      `}} />
      <header style={{
        borderBottom: '1px solid #1f2229', // Hardcode dark border so it doesn't shift in light mode
        backgroundColor: '#111827', // Permanent dark blue slate background
        backdropFilter: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease-in-out',
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: scrolled ? '1rem' : '1.5rem',
          paddingBottom: scrolled ? '1rem' : '1.5rem',
          transition: 'padding 0.3s ease-in-out'
        }}>
          <Link href="/" className="hover-orange" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} onClick={closeMobileMenu}>
            <Image src="/assets/logo.png" alt="Rulingout Consulting Services Logo" width={40} height={40} style={{ objectFit: 'contain' }} />
            <span style={{
              fontWeight: 700,
              fontSize: 'clamp(0.9rem, 2vw, 1.15rem)',
              letterSpacing: '-0.01em',
              color: '#ffffff',
              whiteSpace: 'nowrap'
            }}>
              Rulingout Consulting Services
            </span>
          </Link>
          
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div className="hidden-mobile" style={{ display: 'flex', gap: '2rem', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <Link href="/" className="hover-orange" style={{ color: pathname === '/' ? 'var(--accent-orange)' : '#a0a4ab' }}>Home</Link>
              <Link href="/services" className="hover-orange" style={{ color: pathname === '/services' ? 'var(--accent-orange)' : '#a0a4ab' }}>Services</Link>
              <Link href="/blog" className="hover-orange" style={{ color: pathname.startsWith('/blog') ? 'var(--accent-orange)' : '#a0a4ab' }}>Blog</Link>
              <Link href="/careers" className="hover-orange" style={{ color: pathname === '/careers' ? 'var(--accent-orange)' : '#a0a4ab' }}>Careers</Link>
              <Link href="/about" className="hover-orange" style={{ color: pathname === '/about' ? 'var(--accent-orange)' : '#a0a4ab' }}>About</Link>
              <Link href="/contact" className="hover-orange" style={{ color: pathname === '/contact' ? 'var(--accent-orange)' : '#a0a4ab' }}>Contact</Link>
              <Link href="/login" className="hover-orange" style={{ color: pathname === '/login' ? 'var(--accent-orange)' : '#a0a4ab' }}>Login</Link>
            </div>
            
            <button 
              onClick={toggleTheme}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: '#ffffff', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.1)'
              }}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              )}
            </button>

            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>

          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Link href="/" className="mobile-menu-link" onClick={closeMobileMenu} style={{ color: pathname === '/' ? 'var(--accent-orange)' : '#ffffff' }}>Home</Link>
          <Link href="/services" className="mobile-menu-link" onClick={closeMobileMenu} style={{ color: pathname === '/services' ? 'var(--accent-orange)' : '#ffffff' }}>Services</Link>
          <Link href="/blog" className="mobile-menu-link" onClick={closeMobileMenu} style={{ color: pathname.startsWith('/blog') ? 'var(--accent-orange)' : '#ffffff' }}>Blog</Link>
          <Link href="/careers" className="mobile-menu-link" onClick={closeMobileMenu} style={{ color: pathname === '/careers' ? 'var(--accent-orange)' : '#ffffff' }}>Careers</Link>
          <Link href="/about" className="mobile-menu-link" onClick={closeMobileMenu} style={{ color: pathname === '/about' ? 'var(--accent-orange)' : '#ffffff' }}>About</Link>
          <Link href="/contact" className="mobile-menu-link" onClick={closeMobileMenu} style={{ color: pathname === '/contact' ? 'var(--accent-orange)' : '#ffffff' }}>Contact</Link>
          <Link href="/login" className="mobile-menu-link" onClick={closeMobileMenu} style={{ color: pathname === '/login' ? 'var(--accent-orange)' : '#ffffff' }}>Login</Link>
        </div>
      </div>
    </>
  );
}
