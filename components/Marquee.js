export default function Marquee() {
  const items = [
    "Medical Branding",
    "Revenue Audits",
    "Social Media Growth",
    "Pharmacy Operations",
    "Podcast Production",
    "Clinical Strategy"
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {/* Render twice for seamless infinite loop */}
        {items.map((item, i) => (
          <span key={`1-${i}`} className="marquee-item">{item}</span>
        ))}
        {items.map((item, i) => (
          <span key={`2-${i}`} className="marquee-item">{item}</span>
        ))}
        {/* Render a third time to ensure it fills wide screens */}
        {items.map((item, i) => (
          <span key={`3-${i}`} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
}
