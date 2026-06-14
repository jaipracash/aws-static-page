import React, { useState, useEffect } from 'react';
import { Sun, Moon, Grid, Sparkles, Briefcase, Command } from 'lucide-react';

export default function Header({ theme, toggleTheme, setActiveTab, setPage }) {
  const [showAppsMenu, setShowAppsMenu] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (showAppsMenu && !e.target.closest('.apps-menu-container')) {
        setShowAppsMenu(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [showAppsMenu]);

  const apps = [
    { id: 'all', name: 'Google Search', icon: <Command size={20} style={{ color: 'var(--google-blue)' }} />, action: () => { setPage('home'); setActiveTab('all'); } },
    { id: 'projects', name: 'Projects', icon: <Briefcase size={20} style={{ color: 'var(--google-yellow)' }} />, action: () => { setPage('results'); setActiveTab('projects'); } },
    { id: 'skills', name: 'Skills & Bio', icon: <Sparkles size={20} style={{ color: 'var(--google-green)' }} />, action: () => { setPage('results'); setActiveTab('skills'); } },
  ];

  return (
    <header className="app-header">
      <div className="header-left">
        <span 
          className="header-logo" 
          onClick={() => { setPage('home'); setActiveTab('all'); }}
          title="Go to Home"
        >
          <span style={{ color: 'var(--google-blue)' }}>J</span>
          <span style={{ color: 'var(--google-red)' }}>a</span>
          <span style={{ color: 'var(--google-yellow)' }}>i</span>
          <span style={{ color: 'var(--google-blue)' }}>p</span>
          <span style={{ color: 'var(--google-green)' }}>r</span>
          <span style={{ color: 'var(--google-red)' }}>a</span>
          <span style={{ color: 'var(--google-blue)' }}>k</span>
          <span style={{ color: 'var(--google-green)' }}>a</span>
          <span style={{ color: 'var(--google-red)' }}>s</span>
          <span style={{ color: 'var(--google-blue)' }}>h</span>
        </span>
      </div>

      <div className="header-right">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="header-link"
        >
          GitHub
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="header-link"
        >
          LinkedIn
        </a>

        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme} 
          className="theme-toggle-btn" 
          title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* Apps Launcher */}
        <div className="apps-menu-container" style={{ position: 'relative' }}>
          <button 
            onClick={() => setShowAppsMenu(!showAppsMenu)} 
            className="google-apps-btn"
            title="Google Apps Dashboard"
          >
            <Grid size={20} />
          </button>

          {showAppsMenu && (
            <div className="apps-menu scale-in">
              <div className="apps-grid">
                {apps.map((app) => (
                  <button 
                    key={app.id} 
                    onClick={() => {
                      app.action();
                      setShowAppsMenu(false);
                    }}
                    className="app-card"
                  >
                    <div className="app-icon-wrapper">
                      {app.icon}
                    </div>
                    <span className="app-name">{app.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Avatar */}
        <div className="header-avatar" title="Jaiprakash Profile">
          J
        </div>
      </div>
    </header>
  );
}
