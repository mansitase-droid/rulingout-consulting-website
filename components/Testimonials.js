export default function Testimonials() {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--text-primary)', position: 'relative' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          <div className="animate-fade-in-up">
            <span style={{ color: 'var(--accent-orange)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '1rem' }}>
              Proven Impact
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Measurable Results For Leading Clinics
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              We don't just provide advice; we execute strategies that directly impact your bottom line. Our systematic revenue audits and targeted branding campaigns deliver consistent, verifiable growth.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--accent-orange)' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>₹15L+</div>
              <div style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Revenue Recovered in 30 Days</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                "Rulingout's pharmacy and IPD billing audit identified operational leaks we didn't know existed. The financial turnaround was immediate."
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-orange)' }}>— 50-Bed Multi-Specialty Hospital, Ahmedabad</div>
            </div>

            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--text-primary)' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>300%</div>
              <div style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Increase in Organic Patient Leads</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                "Their local SEO and video branding strategy positioned me as the leading specialist in the region within months."
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>— Dr. Patel, Orthopedic Surgeon</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
