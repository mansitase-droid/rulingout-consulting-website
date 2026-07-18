import Image from '@/components/WatermarkedImage';

export default function FeatureBlocks() {
  return (
    <section style={{ padding: '8rem 0', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        
        {/* Podcast Feature Block */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          backgroundColor: 'var(--bg-dark)',
          color: 'var(--text-primary)',
          padding: '4rem',
          borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              backgroundColor: 'rgba(255, 87, 34, 0.1)',
              color: 'var(--accent-orange)',
              fontWeight: 700,
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '2rem',
              border: '1px solid var(--accent-orange)',
              borderRadius: 'var(--radius)'
            }}>
              Now Casting | 100% Free
            </div>
            
            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Amplify Your<br/>
              <span className="text-orange">Medical Voice</span>
            </h2>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Be a Featured Guest on India's Elite Healthcare Podcast
            </h3>
            
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Do you have a voice in the healthcare field? Share your research, medical breakthroughs, or practice success stories. We invite clinical specialists, doctors, and healthcare founders to speak on our premium media channels to build massive authority.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn-primary">Apply to be a guest</button>
              <button className="btn-secondary inverse">Watch on Youtube</button>
            </div>
          </div>
          
          {/* Image */}
          <div style={{
            position: 'relative',
            borderRadius: 'var(--radius)',
            border: '1px solid rgba(255,255,255,0.1)',
            overflow: 'hidden',
            minHeight: '300px'
          }}>
            <Image src="/assets/podcast_studio.jpg" alt="Podcast Studio" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>

      </div>
    </section>
  );
}
