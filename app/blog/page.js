import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogs } from '@/lib/blogData';

export const metadata = {
  title: "Blog & Articles | Rulingout Consulting",
  description: "Explore our latest strategies on medical branding, hospital revenue leakage, and premium clinic setups.",
};

export default function BlogIndexPage() {
  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      <Navbar />
      
      <section style={{ padding: '8rem 0 4rem 0', position: 'relative' }}>
        
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255,87,34,0.05) 0%, rgba(255,87,34,0) 70%)',
          zIndex: 0, pointerEvents: 'none'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
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
            Articles & Blogs
          </div>
          <h1 className="animate-fade-in-up" style={{ 
            fontSize: 'clamp(3rem, 6vw, 4.5rem)', 
            fontWeight: 900, 
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
            lineHeight: 1.1,
            color: 'var(--text-primary)'
          }}>
            Medical Business Blog
          </h1>
          <p className="animate-fade-in-up" style={{ 
            fontSize: '1.15rem', 
            color: 'var(--text-muted)', 
            maxWidth: '650px', 
            margin: '0 auto', 
            lineHeight: 1.6 
          }}>
            Advanced blueprints on scaling your practice, stopping revenue leakage, and building absolute authority in your medical niche.
          </p>
        </div>
      </section>

      <section style={{ padding: '2rem 0 8rem 0' }}>
        <div className="container">
          
          {/* Inject hover styles */}
          <style dangerouslySetInnerHTML={{__html: `
            .blog-card {
              background-color: var(--bg-secondary);
              border: 1px solid var(--border-color);
              border-radius: 12px;
              padding: 2.5rem;
              transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
              display: flex;
              flex-direction: column;
              height: 100%;
              box-shadow: var(--shadow-sm);
            }
            .blog-card:hover {
              border-color: var(--accent-orange);
              box-shadow: var(--shadow-lg), 0 0 0 1px var(--accent-orange);
              transform: translateY(-5px);
            }
            .blog-card .read-more {
              margin-top: auto;
              color: var(--accent-orange);
              font-size: 0.85rem;
              font-weight: 800;
              text-transform: uppercase;
              letter-spacing: 0.1em;
              padding-top: 2rem;
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
              transition: opacity 0.3s ease;
            }
            .blog-card .read-more:hover {
              opacity: 0.7;
            }
          `}} />

          <div className="grid-responsive" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem' 
          }}>
            {blogs.map((blog, index) => (
              <Link href={`/blog/${blog.slug}`} key={blog.slug} style={{ textDecoration: 'none' }}>
                <article className="blog-card animate-fade-in-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <span style={{ color: 'var(--accent-orange)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {blog.category}
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 500 }}>
                      {blog.readTime}
                    </span>
                  </div>
                  
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.3, marginBottom: '1rem' }}>
                    {blog.title}
                  </h2>
                  
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                    {blog.excerpt}
                  </p>
                  
                  <div className="read-more">
                    Read Article →
                  </div>
                </article>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
