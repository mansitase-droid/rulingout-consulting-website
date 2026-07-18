import React from 'react';
import NextImage from 'next/image';

export default function WatermarkedImage(props) {
  // We only want the watermark on actual content images, 
  // not small icons or logos (like the Navbar logo).
  // We can infer this by checking if the alt text contains "logo" or if it's very small.
  const isLogo = props.alt?.toLowerCase().includes('logo') || props.src?.includes('logo');
  
  if (isLogo) {
    return <NextImage {...props} />;
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 'inherit', display: 'flex', ...props.style }}>
      <NextImage {...props} style={{ ...props.style, position: props.fill ? 'absolute' : 'relative' }} />
      <div style={{
        position: 'absolute',
        bottom: '12px',
        right: '16px',
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '0.7rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        pointerEvents: 'none',
        zIndex: 20,
        textShadow: '0px 2px 4px rgba(0,0,0,0.9), 0px 0px 10px rgba(0,0,0,0.5)',
        fontFamily: 'sans-serif'
      }}>
        Rulingout Consulting Services
      </div>
    </div>
  );
}
