import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";

const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-title'
});

export const metadata = {
  title: "Rulingout Consulting Services",
  description: "Expert healthcare consulting firm in Gujarat. We specialize in medical doctor branding, hospital revenue leakage audits, and clinic setup advisory. Recover 3-10% of lost hospital revenues.",
  keywords: "healthcare consulting, hospital revenue audit, medical doctor branding, clinic setup Gujarat, healthcare video production, Mansi Tase",
  openGraph: {
    title: "Rulingout Consulting Services",
    description: "Expert healthcare consulting, branding, and revenue audits.",
    url: "https://rulingout.com",
    siteName: "Rulingout Consulting",
    locale: "en_IN",
    type: "website",
  },
  verification: {
    google: "QFZztBis5x8gGlg_y4-ireFficY4skloRNy2IIajX1U",
  },
}

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Rulingout Consulting Services",
    "founder": {
      "@type": "Person",
      "name": "Mansi Tase",
      "jobTitle": "Founder & Lead Strategist"
    },
    "description": "Expert healthcare consulting specializing in medical doctor branding and hospital revenue leakage audits.",
    "areaServed": "Gujarat, India",
    "url": "https://rulingout.com",
    "knowsAbout": [
      "Medical Doctor Branding",
      "Hospital Revenue Leakage",
      "Clinic Setup Advisory",
      "Healthcare Marketing",
      "IPD Billing Audits"
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="QFZztBis5x8gGlg_y4-ireFficY4skloRNy2IIajX1U" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <ScrollProgressBar />
          <CallButton />
          <WhatsAppButton />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
