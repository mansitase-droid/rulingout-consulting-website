import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg-darker)', color: 'var(--text-muted)', padding: '6rem 0 3rem 0' }}>
      <div className="container">
        <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
          
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontWeight: 900, fontSize: '1.25rem', marginBottom: '1rem' }}>Rulingout Consulting Services</h4>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.8, maxWidth: '300px' }}>
              A boutique strategy firm dedicated to medical doctor branding, hospital revenue leakage audits, and clinic setup advisory.
            </p>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--accent-orange)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>Capabilities</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link href="/services" className="hover-orange" style={{ transition: 'color 0.3s' }}>Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--accent-orange)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link href="/about" className="hover-orange" style={{ transition: 'color 0.3s' }}>About</Link></li>
              <li><Link href="/blog" className="hover-orange" style={{ transition: 'color 0.3s' }}>Blog</Link></li>
              <li><Link href="/careers" className="hover-orange" style={{ transition: 'color 0.3s' }}>Careers</Link></li>
              <li><Link href="/contact" className="hover-orange" style={{ transition: 'color 0.3s' }}>Contact</Link></li>
              <li style={{ color: '#6c757d', marginTop: '1rem' }}>
                <strong>Rulingout Consulting Services</strong><br/>
                Vadodara, Gujarat, India<br/>
                <a href="mailto:rulingoutindia@gmail.com" className="hover-orange">rulingoutindia@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--accent-orange)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link href="#" className="hover-orange" style={{ transition: 'color 0.3s' }}>Privacy Policy</Link></li>
              <li><Link href="#" className="hover-orange" style={{ transition: 'color 0.3s' }}>Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', fontSize: '0.85rem' }}>
          © 2026 Rulingout Consulting Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
