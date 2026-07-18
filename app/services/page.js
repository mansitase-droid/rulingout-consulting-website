import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExpandableServiceGrid from '@/components/ExpandableServiceGrid';

export const metadata = {
  title: "Precision Consulting Services | Rulingout",
  description: "Scale your medical brand, identify hospital billing leakage, and maximize practice performance through analytical blueprints. Explore our core healthcare consulting services.",
  keywords: "healthcare consulting services, medical social media promotion, healthcare content production, hospital revenue audit, clinic setup advisory india",
  openGraph: {
    title: "Precision Consulting Services | Rulingout",
    description: "Expert advisory for doctors and hospitals.",
    url: "https://rulingout.com/services",
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Service",
      "position": 1,
      "name": "Social Media Promotion",
      "description": "Establish absolute digital leadership and patient trust via systemic social branding profiles."
    },
    {
      "@type": "Service",
      "position": 2,
      "name": "Healthcare Content Production",
      "description": "Professional scripts, premium capture, and editing tailored specifically to the medical landscape."
    },
    {
      "@type": "Service",
      "position": 3,
      "name": "Revenue Leakage Audit",
      "description": "Identify invisible operational bottlenecks and billing discrepancies to recover lost hospital margins."
    },
    {
      "@type": "Service",
      "position": 4,
      "name": "Clinic Setup & Branding Advisory",
      "description": "End-to-end strategic advisory for new doctors setting up clinics or medical spaces."
    }
  ]
};

export default function ServicesPage() {
  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      <Navbar />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <section style={{ padding: '8rem 0 4rem 0', position: 'relative' }}>
        
        <div style={{
          position: 'absolute', top: '50%', left: '30%', transform: 'translate(-50%, -50%)',
          width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255,87,34,0.1) 0%, rgba(255,87,34,0) 70%)',
          zIndex: 0, pointerEvents: 'none'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h1 className="animate-fade-in-up" style={{ 
            fontSize: 'clamp(3rem, 6vw, 5rem)', 
            fontWeight: 900, 
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            lineHeight: 1.1,
            color: 'var(--text-primary)'
          }}>
            Precision Consulting
          </h1>
          <p className="animate-fade-in-up" style={{ 
            fontSize: '1.15rem', 
            color: 'var(--text-muted)', 
            maxWidth: '600px', 
            margin: '0 auto', 
            lineHeight: 1.6 
          }}>
            Scale your medical brand, identify hospital billing leakage, and maximize practice performance through analytical blueprints.
          </p>
        </div>
      </section>

      {/* Interactive Services Grid */}
      <section style={{ padding: '4rem 0 8rem 0' }}>
        <div className="container">
          <ExpandableServiceGrid />
        </div>
      </section>

      <Footer />
    </main>
  );
}
