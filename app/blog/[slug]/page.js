import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogs } from '@/lib/blogData';
import CollapsibleArticle from '@/components/CollapsibleArticle';

// Simple markdown parser for our specific blog data
function parseMarkdown(text) {
  let html = text
    .replace(/^### (.*$)/gim, '<h4 style="font-size: 1.25rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem; color: var(--text-primary);">$1</h4>')
    .replace(/^## (.*$)/gim, '<h3 style="font-size: 1.5rem; font-weight: 800; margin-top: 2.5rem; margin-bottom: 1rem; color: var(--text-primary);">$1</h3>')
    .replace(/^# (.*$)/gim, '<h2 style="font-size: 2rem; font-weight: 900; margin-top: 3rem; margin-bottom: 1.5rem; color: var(--accent-orange);">$1</h2>')
    .replace(/^\> (.*$)/gim, '<blockquote style="border-left: 4px solid var(--accent-orange); padding-left: 1rem; font-style: italic; color: var(--text-muted); margin: 1.5rem 0;">$1</blockquote>')
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    .replace(/^- (.*$)/gim, '<li style="margin-bottom: 0.5rem; line-height: 1.7; color: var(--text-muted);">$1</li>')
    .replace(/\n\n/gim, '</p><p style="margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted); font-size: 1.1rem;">');

  // Wrap loose list items in a ul (very basic approach)
  if (html.includes('<li>')) {
    html = html.replace(/(<li.*<\/li>)/s, '<ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">$1</ul>');
  }

  return '<p style="margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted); font-size: 1.1rem;">' + html + '</p>';
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug);
  if (!blog) return { title: 'Not Found' };
  
  return {
    title: `${blog.title} | Rulingout Blog`,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug);
  
  if (!blog) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.title,
    "description": blog.excerpt,
    "datePublished": blog.date,
    "author": {
      "@type": "Organization",
      "name": "Rulingout Consulting Services"
    }
  };

  return (
    <main style={{ backgroundColor: 'var(--bg-secondary)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article style={{ padding: '6rem 0 4rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <Link href="/blog" style={{ color: 'var(--accent-orange)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', display: 'inline-block', marginBottom: '2rem' }}>
            ← Back to Blog
          </Link>

          <header style={{ marginBottom: '4rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{ backgroundColor: 'rgba(255,87,34,0.1)', color: 'var(--accent-orange)', padding: '0.3rem 0.8rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {blog.category}
              </span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>
                {blog.date} • {blog.readTime}
              </span>
            </div>
            
            <h1 className="animate-fade-in-up" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              {blog.title}
            </h1>
            
            <p className="animate-fade-in-up" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.6, fontWeight: 400 }}>
              {blog.excerpt}
            </p>
          </header>

          <CollapsibleArticle contentHtml={parseMarkdown(blog.content)} />

          <div style={{ marginTop: '5rem', padding: '3rem', backgroundColor: 'var(--bg-dark)', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>Stop guessing. Let us audit your practice today.</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1rem' }}>Identify hidden revenue leakage and scale your medical brand with precision.</p>
            <Link href="/contact" className="btn-primary" style={{ padding: '0.8rem 2rem' }}>
              Book A Consultation
            </Link>
          </div>

        </div>
      </article>

      <section style={{ padding: '4rem 0 8rem 0', backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <h3 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '3rem', textAlign: 'center' }}>Suggested Reads</h3>
          
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
            {blogs.filter(b => b.slug !== slug).slice(0, 2).map((otherBlog, index) => (
              <Link href={`/blog/${otherBlog.slug}`} key={otherBlog.slug} style={{ textDecoration: 'none' }}>
                <article className="blog-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <span style={{ color: 'var(--accent-orange)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {otherBlog.category}
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 500 }}>
                      {otherBlog.readTime}
                    </span>
                  </div>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.3, marginBottom: '1rem' }}>
                    {otherBlog.title}
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                    {otherBlog.excerpt}
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
