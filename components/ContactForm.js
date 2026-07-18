export default function ContactForm() {
  return (
    <section style={{ padding: '8rem 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{
          backgroundColor: 'var(--bg-secondary)',
          padding: '4rem',
          borderRadius: 'var(--radius)',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Ready to rule out the irrelevant?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Join the ranks of market leaders who prioritize clarity over complexity. Let's discuss your next strategic move.
          </p>
        </div>
      </div>
    </section>
  );
}
