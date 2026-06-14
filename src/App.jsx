import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState('light');

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      
      {/* Floating Theme Toggle (Replaces the Appbar) */}
      <button 
        onClick={toggleTheme} 
        className="theme-btn floating-theme-btn" 
        title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
      >
        {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
      </button>

      {/* Main Layout */}
      <main style={{ flex: '1 0 auto', width: '100%' }}>
        
        {/* Top 30% Height Pattern & Colored Section */}
        <section className="minimal-hero-section">
          <div className="ambient-glow-1"></div>
          <div className="ambient-glow-2"></div>
          
          <div className="hero-content fade-in">
            <h1 className="hero-title" style={{ fontSize: '36px', marginBottom: '8px' }}>
              <span>Jaiprakash's Portfolio</span>
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '15px', color: 'var(--text-secondary)', margin: '0 0 6px 0' }}>
              Planning & designing a premium web experience.
            </p>
            <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Launching Soon
            </span>
          </div>
        </section>

        {/* Clean, Empty Rest of the Page (70%) */}
        <section style={{ padding: '40px 24px', textAlign: 'center' }}>
          {/* Subtle placeholder or text can go here, but we keep it empty and clean */}
        </section>

      </main>

      {/* Simple Footer */}
      <footer style={{ padding: '24px', textAlign: 'center', borderTop: '1px solid var(--border-color)', fontSize: '12px', color: 'var(--text-muted)' }}>
        © {new Date().getFullYear()} Jaiprakash • Portfolio Planning Edition
      </footer>

    </div>
  );
}

export default App;
