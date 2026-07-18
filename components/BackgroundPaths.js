'use client';

import React, { useEffect, useRef } from 'react';

export default function BackgroundPaths() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let lines = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initLines();
    };
    
    const initLines = () => {
      lines = [];
      const numLines = 40;
      for (let i = 0; i < numLines; i++) {
        lines.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * (canvas.width * 0.8) + 200,
          angle: Math.random() * Math.PI * 2,
          speed: (Math.random() * 0.002) + 0.0005,
          opacity: Math.random() * 0.3 + 0.05,
          width: Math.random() * 1.5 + 0.5,
          dashOffset: Math.random() * 1000,
          dashLength: Math.random() * 200 + 50,
          gapLength: Math.random() * 300 + 100
        });
      }
    };
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      lines.forEach((line) => {
        ctx.beginPath();
        
        // Create sweeping arcs that look like paths
        ctx.arc(
          canvas.width / 2 + Math.cos(line.angle) * (line.radius * 0.2), 
          canvas.height + 200, 
          line.radius, 
          Math.PI, 
          Math.PI * 2
        );
        
        ctx.strokeStyle = `rgba(255, 87, 34, ${line.opacity})`;
        ctx.lineWidth = line.width;
        
        // Create dashed effect for moving lines
        ctx.setLineDash([line.dashLength, line.gapLength]);
        ctx.lineDashOffset = line.dashOffset;
        
        line.dashOffset -= line.speed * 1000; // Move the dashes
        line.angle += line.speed * 0.5; // Slowly rotate the center point
        
        ctx.stroke();
      });
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    window.addEventListener('resize', resize);
    resize();
    draw();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: 0,
      pointerEvents: 'none',
      maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
      WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)'
    }}>
      <canvas 
        ref={canvasRef} 
        style={{
          width: '100%',
          height: '100%',
          opacity: 0.8
        }}
      />
    </div>
  );
}
