import Image from '@/components/WatermarkedImage';

export default function Strategists() {
  const member = { 
    name: "Mansi Tase", 
    title: "FOUNDER & LEAD STRATEGIST", 
    desc: "A visionary in healthcare consulting dedicated to the art of subtraction, strategic precision, and operational excellence." 
  };

  return (
    <section style={{ padding: '8rem 0', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>The Strategist</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontStyle: 'italic', maxWidth: '300px', textAlign: 'right' }}>
            A specialist dedicated to the art of subtraction.
          </p>
        </div>

        <div style={{ maxWidth: '400px', position: 'relative', zIndex: 2 }}>
          <div style={{
            backgroundColor: 'var(--bg-dark)',
            height: '450px',
            borderRadius: 'var(--radius)',
            marginBottom: '1.5rem',
            border: '1px solid rgba(0,0,0,0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <Image src="/assets/mansi_enhanced.jpg" alt="Mansi Tase" fill style={{ objectFit: 'cover' }} />
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.25rem' }}>{member.name}</h3>
          <div style={{ color: 'var(--accent-orange)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
            {member.title}
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>{member.desc}</p>
        </div>

      </div>
    </section>
  );
}
