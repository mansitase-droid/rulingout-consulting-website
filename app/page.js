import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Capabilities from '@/components/Capabilities';
import FeatureBlocks from '@/components/FeatureBlocks';
import PainPointBanner from '@/components/PainPointBanner';
import AuditSelfCheck from '@/components/AuditSelfCheck';
import PodcastBanner from '@/components/PodcastBanner';
import Strategists from '@/components/Strategists';
import LeadMagnet from '@/components/LeadMagnet';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      
      <ScrollReveal>
        <Capabilities />
      </ScrollReveal>
      
      <ScrollReveal>
        <PainPointBanner />
      </ScrollReveal>
      
      <ScrollReveal>
        <AuditSelfCheck />
      </ScrollReveal>
      
      <ScrollReveal>
        <PodcastBanner />
      </ScrollReveal>
      
      <ScrollReveal>
        <Strategists />
      </ScrollReveal>
      
      <ScrollReveal>
        <LeadMagnet />
      </ScrollReveal>
      
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>
      
      <ScrollReveal>
        <ContactForm />
      </ScrollReveal>
      
      <Footer />
    </main>
  );
}
