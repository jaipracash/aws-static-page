import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Github, Linkedin, Mail, ExternalLink, 
  Code, Terminal, Server, Cpu, Cloud, Globe, 
  ArrowRight, Star, Send, Check, MessageSquare, Briefcase
} from 'lucide-react';

function App() {
  const [theme, setTheme] = useState('dark');
  const [activeFilter, setActiveFilter] = useState('all');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 4000);
    }
  };

  const projects = [
    {
      title: 'Auto-Deploy static site to EC2',
      description: 'GitHub Actions CI/CD pipeline setup for automatic deployment. It pulls changes, runs production builds, synchronizes assets to Nginx html directory, and restarts services.',
      tags: ['GitHub Actions', 'AWS EC2', 'Nginx', 'SSH Runner'],
      category: 'cloud',
      stars: 14,
      icon: <Server size={20} />
    },
    {
      title: 'S3-CloudFront Global CDN Delivery',
      description: 'High availability serverless hosting setup with HTTPS SSL encryption. Uses S3 Bucket for static assets, CloudFront CDN, Route53, and ACM Certificates.',
      tags: ['AWS S3', 'CloudFront', 'SSL/ACM', 'Route53'],
      category: 'cloud',
      stars: 11,
      icon: <Cloud size={20} />
    },
    {
      title: 'Interactive Tech Dashboard UI',
      description: 'A modern state-of-the-art server analytics dashboard featuring real-time socket connections, dark modes, canvas charts, and fully responsive glass layouts.',
      tags: ['React', 'CSS Grid', 'WebSockets', 'Canvas API'],
      category: 'frontend',
      stars: 18,
      icon: <Code size={20} />
    },
    {
      title: 'Lambda & DynamoDB Contact API',
      description: 'Serverless microservice backend for capturing form entries, sending transactional mail alerts via AWS Simple Email Service (SES), and storing logs in DynamoDB.',
      tags: ['Lambda', 'Node.js', 'DynamoDB', 'SES API'],
      category: 'backend',
      stars: 10,
      icon: <Cpu size={20} />
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'transparent', position: 'relative' }}>
      <div className="grid-overlay"></div>
      
      {/* Floating Theme Toggle */}
      <button 
        onClick={toggleTheme} 
        className="theme-btn floating-theme-btn" 
        title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
      >
        {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
      </button>

      {/* Main Layout */}
      <main style={{ flex: '1 0 auto', width: '100%', zIndex: 2 }}>
        
        {/* Hero Banner Section */}
        <section className="minimal-hero-section">
          <div className="ambient-glow-1"></div>
          <div className="ambient-glow-2"></div>
          
          <div className="hero-content fade-in">
            <div className="status-pill">
              <span className="status-indicator"></span>
              <span>Available for Freelance & Cloud Consulting</span>
            </div>
            <h1 className="hero-title" style={{ fontSize: '42px', marginBottom: '12px' }}>
              <span>Jaiprakash</span>
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '16px', color: 'var(--text-secondary)', margin: '0 0 16px 0', maxWidth: '600px', marginInline: 'auto' }}>
              Full Stack developer & DevOps Enthusiast building high-performance, premium web applications and scalable AWS architectures.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-badge">
                <Github size={16} /> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-badge">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="mailto:contact@example.com" className="social-badge">
                <Mail size={16} /> Email
              </a>
            </div>
          </div>
        </section>

        {/* Dashboard Portfolio Grid Container */}
        <section className="portfolio-container fade-in">
          <div className="portfolio-grid-layout">
            
            {/* LEFT COLUMN: Profile info, Stats, & Contact */}
            <div className="sidebar-column">
              
              {/* Stats Card */}
              <div className="glass-card stats-card">
                <h3 className="card-title"><Terminal size={18} style={{ marginRight: '8px' }} /> Quick Summary</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
                  Passionate about designing sleek user interfaces and automating deployment pipelines. Specializing in AWS deployment, React architecture, and performance auditing.
                </p>
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-num">4+</span>
                    <span className="stat-lbl">AWS Deployments</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-num">99.9%</span>
                    <span className="stat-lbl">Uptime</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-num">100+</span>
                    <span className="stat-lbl">Git Commits</span>
                  </div>
                </div>
              </div>

              {/* Interactive Contact Form */}
              <div className="glass-card contact-card">
                <h3 className="card-title"><MessageSquare size={18} style={{ marginRight: '8px' }} /> Send a Message</h3>
                {isSubmitted ? (
                  <div className="success-banner scale-in">
                    <div className="success-icon-wrapper">
                      <Check size={20} />
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: '600' }}>Message Sent!</h4>
                      <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)' }}>Thank you, I will get back to you shortly.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div className="form-group">
                      <label className="form-label">Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        className="form-input" 
                        placeholder="Your Name" 
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        className="form-input" 
                        placeholder="your@email.com" 
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Message</label>
                      <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleInputChange} 
                        className="form-textarea" 
                        placeholder="Let's build something awesome..." 
                        rows="3" 
                        required 
                      ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                      Send Message <Send size={14} style={{ marginLeft: '6px' }} />
                    </button>
                  </form>
                )}
              </div>

            </div>

            {/* RIGHT COLUMN: Filterable Projects Grid & Timeline */}
            <div className="content-column">
              
              {/* Projects Grid Header */}
              <div className="section-header">
                <div>
                  <h2 className="section-title">Projects Showcase</h2>
                  <p className="section-subtitle">Real-world applications hosted and automated on AWS infrastructures</p>
                </div>
                
                {/* Dynamic Filters */}
                <div className="filter-group">
                  <button 
                    onClick={() => setActiveFilter('all')} 
                    className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                  >
                    All
                  </button>
                  <button 
                    onClick={() => setActiveFilter('cloud')} 
                    className={`filter-btn ${activeFilter === 'cloud' ? 'active' : ''}`}
                  >
                    Cloud/DevOps
                  </button>
                  <button 
                    onClick={() => setActiveFilter('frontend')} 
                    className={`filter-btn ${activeFilter === 'frontend' ? 'active' : ''}`}
                  >
                    Frontend
                  </button>
                  <button 
                    onClick={() => setActiveFilter('backend')} 
                    className={`filter-btn ${activeFilter === 'backend' ? 'active' : ''}`}
                  >
                    Backend
                  </button>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="projects-grid">
                {filteredProjects.map((project, idx) => (
                  <div 
                    key={idx} 
                    className="glass-card project-card"
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      transform: hoveredCard === idx ? 'translateY(-6px)' : 'translateY(0)',
                      boxShadow: hoveredCard === idx ? '0 12px 30px rgba(0, 0, 0, 0.15)' : 'none'
                    }}
                  >
                    <div className="project-card-header">
                      <div className="project-icon-box">
                        {project.icon}
                      </div>
                      <div className="project-stars">
                        <Star size={14} style={{ marginRight: '4px', fill: 'var(--primary-color)', color: 'var(--primary-color)' }} />
                        <span style={{ fontSize: '12px', fontWeight: '600' }}>{project.stars}</span>
                      </div>
                    </div>
                    <h4 className="project-card-title">{project.title}</h4>
                    <p className="project-card-description">{project.description}</p>
                    
                    <div className="project-card-tags">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="tech-badge">{tag}</span>
                      ))}
                    </div>

                    <a href={project.link} className="project-link">
                      View details <ArrowRight size={14} style={{ marginLeft: '6px' }} />
                    </a>
                  </div>
                ))}
              </div>

              {/* Professional Development Timeline */}
              <div className="glass-card timeline-card" style={{ marginTop: '24px' }}>
                <h3 className="card-title" style={{ marginBottom: '20px' }}>
                  <Briefcase size={18} style={{ marginRight: '8px' }} /> Milestones & Skill Map
                </h3>
                
                <div className="timeline-container">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-info">
                      <span className="timeline-date">Phase 1</span>
                      <h4 className="timeline-role">DevOps Automation & CI/CD Deployment</h4>
                      <p className="timeline-desc">
                        Implemented GitHub Actions scripts for automated validation, testing, bundle builds, and secure EC2 deployment via Nginx web server synchronization.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-info">
                      <span className="timeline-date">Phase 2</span>
                      <h4 className="timeline-role">Static Website Delivery Infrastructure</h4>
                      <p className="timeline-desc">
                        Configured AWS S3 hosting integrated with CloudFront CDN distribution, custom SSL certificate routing, and Route53 DNS for fast global loading.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-info">
                      <span className="timeline-date">Phase 3</span>
                      <h4 className="timeline-role">Serverless Backend Architectures</h4>
                      <p className="timeline-desc">
                        Constructed REST APIs using API Gateway triggering NodeJS AWS Lambda functions, utilizing DynamoDB for logs and AWS SES for email integrations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* Simple Footer */}
      <footer style={{ padding: '28px', textAlign: 'center', borderTop: '1px solid var(--border-color)', fontSize: '13px', color: 'var(--text-muted)', zIndex: 10 }}>
        © {new Date().getFullYear()} Jaiprakash • Designed with Premium Grid UI & AWS CI/CD Workflow
      </footer>

    </div>
  );
}

export default App;

