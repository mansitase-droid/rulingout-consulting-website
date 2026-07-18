'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // On mount, check if already logged in
  useEffect(() => {
    const session = localStorage.getItem('portal_session');
    if (session) {
      router.push('/portal/apex-dashboard.html');
    }
  }, [router]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Ensure DB is initialized (this mirrors portal.js initDatabase logic)
    let accounts = JSON.parse(localStorage.getItem('portal_accounts'));
    
    // If not seeded, seed default Admin account
    if (!accounts || accounts.length === 0) {
      accounts = [
        { email: 'admin@rulingout.com', name: 'Rulingout Administrator', role: 'admin', roleType: 'super_admin', password: 'password', organization: 'Rulingout' }
      ];
      localStorage.setItem('portal_accounts', JSON.stringify(accounts));
    }

    const user = accounts.find(a => a.email.toLowerCase() === email.toLowerCase() && a.password === password);
    
    if (user) {
      if (user.status === 'inactive') {
        setError('Your account has been deactivated. Please contact system admin.');
        return;
      }

      // Create session
      localStorage.setItem('portal_session', JSON.stringify({
        email: user.email,
        name: user.name,
        role: user.role,
        roleType: user.roleType,
        status: user.status || 'active',
        organization: user.organization
      }));

      // Redirect to the static dashboard
      router.push('/portal/apex-dashboard.html');
    } else {
      setError('Invalid email or password.');
    }
  };

  const inputStyle = { width: '100%', padding: '1rem', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)', outline: 'none', marginBottom: '1.5rem' };

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <section style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8rem 2rem 6rem 2rem', position: 'relative' }}>
        
        {/* Ambient Glow */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255,87,34,0.08) 0%, rgba(255,87,34,0) 60%)',
          zIndex: 0, pointerEvents: 'none'
        }}></div>

        <div className="animate-fade-in-up" style={{ 
          backgroundColor: 'var(--bg-secondary)', 
          padding: '3rem', 
          borderRadius: '12px', 
          border: '1px solid var(--border-color)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
          width: '100%',
          maxWidth: '440px',
          position: 'relative',
          zIndex: 2
        }}>
          
          <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>Portal Login</h3>

          {error && (
            <div style={{ color: '#ff3333', fontSize: '0.9rem', padding: '1rem', backgroundColor: 'rgba(255,51,51,0.1)', borderRadius: '4px', marginBottom: '1.5rem', fontWeight: 600, textAlign: 'center' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column' }}>
            
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Registered Email</label>
              <input 
                type="email" 
                required 
                placeholder="e.g. name@rulingout.com"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                style={inputStyle} 
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Password</label>
              <input 
                type="password" 
                required 
                placeholder="••••••••"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                style={inputStyle} 
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1.2rem', marginTop: '0.5rem' }}>
              Access Dashboard
            </button>
            <p style={{ fontSize: '0.75rem', color: '#6c757d', textAlign: 'center', marginTop: '1rem' }}>
              Authorized personnel only.
            </p>
          </form>

        </div>
      </section>

      <Footer />
    </main>
  );
}
