export default function InteractiveTabs() {
  return (
    <section style={{ padding: '8rem 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>The Rulingout Protocol</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          
          {/* Dark Card - Established Practice / Audit */}
          <div style={{
            backgroundColor: 'var(--bg-darker)',
            color: 'var(--text-primary)',
            padding: '3rem',
            borderRadius: 'var(--radius)',
            position: 'relative'
          }}>
            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '1rem' }}>Phase 01</div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Hospital Revenue Audit</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Plug administrative and pharmacy financial leaks. We cross-audit IPD procedures, billing packages, and pharmaceutical stock logs to recover 3-10% of lost hospital revenues.
            </p>
          </div>

          {/* Orange Accent Card - New Doctor */}
          <div style={{
            backgroundColor: 'var(--accent-orange)',
            color: 'var(--text-primary)',
            padding: '3rem',
            borderRadius: 'var(--radius)'
          }}>
            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>Phase 02</div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Establish Local Authority</h3>
            <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.7 }}>
              Launch with an optimized Google Map profile, active patient communication lines, and structural credibility. Setting up a new clinic requires clear strategy.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
