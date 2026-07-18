import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Why Doctors Fail at Social Media | Rulingout Consulting',
  description: 'A deep dive into the true cost of medical social media marketing, the hidden hours spent scripting and editing, and why traditional agencies fail healthcare professionals.',
};

export default function MedicalBrandingManifesto() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Why 90% of Doctors Fail at Social Media (And How to Fix It)",
    "description": "An analysis of the pain points doctors face when attempting to build a personal brand through social media, including scripting, shooting, and editing costs.",
    "author": {
      "@type": "Organization",
      "name": "Rulingout Consulting Services"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Rulingout Consulting Services"
    }
  };

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      
      <article>
        {/* Header Section */}
        <header style={{ backgroundColor: 'var(--bg-darker)', color: 'var(--text-primary)', padding: '8rem 0 6rem 0', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <span style={{ color: 'var(--accent-orange)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '1.5rem' }}>
              The Healthcare Marketing Dilemma
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '2rem' }}>
              Why 90% of Doctors <span style={{ color: 'var(--accent-orange)' }}>Fail</span> At Social Media
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              A doctor should be busy treating patients. Yet, doctors who dared to build a digital presence early are now dominating the game. Here is exactly why starting—and sustaining—that journey is so difficult.
            </p>
          </div>
        </header>

        {/* Content Section */}
        <section style={{ padding: '6rem 0' }}>
          <div className="container" style={{ maxWidth: '800px', fontSize: '1.1rem', lineHeight: 1.8 }}>
            
            <p style={{ marginBottom: '3rem', fontSize: '1.2rem', fontWeight: 600 }}>
              Many doctors want to begin building their personal brand, but they immediately feel paralyzed. Making high-quality social media Reels involves a complex pipeline of steps. Let's break down the true cost of DIY medical marketing.
            </p>

            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '4rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--accent-orange)', paddingBottom: '0.5rem', display: 'inline-block' }}>
              1. The Scripting Trap
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              When doctors attempt to write scripts, they often fail to understand the actual pain points of the patients. They use heavy medical jargon that the general public simply cannot digest. What is considered a "normal" day-to-day clinical problem for a doctor might be completely alien to a patient.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Doctors do not have the time to generate Google search trend reports to understand exactly what patients are searching for. Writing engaging scripts requires dedicated study—and frankly, not every doctor is interested in copywriting. It is not their profession.
            </p>
            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '2rem', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--accent-orange)', marginBottom: '2rem' }}>
              <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>The Fake AI Illusion</h4>
              <p style={{ margin: 0 }}>
                Using AI to write scripts results in content that feels fake and common. AI struggles to provide deeply researched, niche medical information, and when it does, the output is long, boring, and impossible to fit into a punchy 60-second video.
              </p>
            </div>
            <p style={{ fontWeight: 700, color: 'var(--accent-orange)' }}>
              Total Scripting Cost: Minimum 30 minutes (Equivalent to the time it takes to see 2 patients) just for a single script.
            </p>

            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '5rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--accent-orange)', paddingBottom: '0.5rem', display: 'inline-block' }}>
              2. The Shooting Nightmare
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Even if you manage to write a script, the toughest part is the actual shoot. You need to memorize the script, manage your performance, handle the camera, and constantly play, pause, and reshoot. Furthermore, you have zero guidance on tone, pitch, pace, pauses, punch words, or body language.
            </p>
            
            <h4 style={{ fontWeight: 800, marginBottom: '1rem', marginTop: '2rem' }}>The Hidden Hardware Costs:</h4>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
              <li><strong>Good Camera:</strong> ₹60,000 approx.</li>
              <li><strong>Noise Cancellation Mic:</strong> ₹10,000</li>
              <li><strong>Teleprompter:</strong> ₹8,000</li>
              <li><strong>Tripods - 3 nos:</strong> ₹4,000</li>
              <li><strong>Cinematic Lighting Setup (1 Light):</strong> ₹10,000</li>
              <li><strong>Personnel:</strong> One extra person (if available)</li>
            </ul>
            <p style={{ fontWeight: 700, color: 'var(--accent-orange)' }}>
              Total Shooting Cost: Approx. 15 minutes per 1-minute reel (Equivalent to 1 patient visit).
            </p>

            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '5rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--accent-orange)', paddingBottom: '0.5rem', display: 'inline-block' }}>
              3. The Editing Blackhole
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Most doctors have zero idea how to edit video. Cheap or free mobile software spams your phone with watermarks and ads. Professional editing requires creativity: selecting fonts, balancing colors, adding B-roll cuts, and sourcing non-copyrighted assets and trending music.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              If you do it on your own, expect to spend approximately <strong style={{ color: 'var(--accent-orange)' }}>3 hours per 1-minute reel</strong>. That is either 5 lost patients or one completely sleepless night.
            </p>
            
            <h4 style={{ fontWeight: 800, marginBottom: '1rem', marginTop: '2rem' }}>The Cost of Hiring an Editor:</h4>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
              <li><strong>Basic Monthly Salary:</strong> ₹15,000/month</li>
              <li><strong>Editing Laptop/Setup:</strong> ₹70,000 upfront</li>
              <li><strong>Editing Software Licenses:</strong> ₹2,000/month</li>
              <li><strong>Non-Copyrighted Asset Subscriptions:</strong> ₹2,000/month</li>
            </ul>

            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '5rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--accent-orange)', paddingBottom: '0.5rem', display: 'inline-block' }}>
              4. The Publishing Paradox
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Publishing is the only part that is slightly easier today, thanks to scheduling tools. But it demands radical consistency. If you fail to maintain the relentless pace of scripting, shooting, and editing, your publishing schedule will collapse. 
            </p>

            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '5rem', marginBottom: '1.5rem', color: 'var(--bg-dark)' }}>
              The Changing Patient Mindset
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Patients are shifting how they choose healthcare providers. Even if you are a phenomenally skilled doctor, modern patients will often bypass you for a doctor who is highly visible on social media. To a patient, a strong digital presence signals four things:
            </p>
            <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem', fontWeight: 600 }}>
              <li style={{ marginBottom: '0.5rem' }}>The doctor is famous and trusted.</li>
              <li style={{ marginBottom: '0.5rem' }}>The doctor possesses vast, publicly verified knowledge.</li>
              <li style={{ marginBottom: '0.5rem' }}>They feel prepared and comfortable before even meeting you.</li>
              <li style={{ marginBottom: '0.5rem' }}>They are willing to spend more for premium perceived value.</li>
            </ol>
            <p style={{ marginBottom: '2rem' }}>
              Unlike tech or marketing founders, <strong>doctors cannot use AI avatars to generate content.</strong> A real medical professional must provide authentic, face-to-camera information, otherwise, their medical license and reputation are in jeopardy.
            </p>

            <div style={{ backgroundColor: 'var(--bg-darker)', color: 'var(--text-primary)', padding: '3rem', borderRadius: 'var(--radius)', marginTop: '4rem', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--accent-orange)' }}>
                The Agency Trap & The Rulingout Solution
              </h2>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                When doctors finally seek help, they turn to marketing agencies. 90% of traditional agencies offer support in shooting and editing, but they fundamentally do not understand healthcare topics. To create medical animations or scripts, they either rely on horrible AI generation, or force the doctor to write their own scripts anyway—charging premium retainers while providing half the service.
              </p>
              <hr style={{ borderColor: 'var(--border-color)', margin: '2rem 0' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>How Rulingout Consulting Changes the Game:</h3>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                  <span style={{ color: 'var(--accent-orange)' }}>✓</span> 
                  <span><strong>Clinical Accuracy:</strong> Our scripts are deeply researched, patient-friendly, and highly explanatory.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                  <span style={{ color: 'var(--accent-orange)' }}>✓</span> 
                  <span><strong>Zero Hardware Costs:</strong> We possess a cinematic, professional production setup.</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <span style={{ color: 'var(--accent-orange)' }}>✓</span> 
                  <span><strong>Zero Friction:</strong> We come directly to your clinic, at your convenience, completely eliminating the technical burden.</span>
                </li>
              </ul>
            </div>

          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
