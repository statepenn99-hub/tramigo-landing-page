import { useState } from 'react';
import Login from './Login';
import Research from './Research';
import './App.css'

function App() {
  // State to track current page
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <div className="app-wrapper">
      
      {/* PERMANENT NAVBAR (Always Visible) */}
      <nav className="navbar">
        <div 
          className="nav-brand" 
          onClick={() => setCurrentPage('landing')}
        >
          <img src="/tramigo-navbar.png" alt="Logo" className="nav-logo" />
          <span className="nav-title">My Org</span>
        </div>

        <div className="nav-links">
          {/* Research Link */}
          <button 
            className={`nav-link ${currentPage === 'research' ? 'active' : ''}`}
            onClick={() => setCurrentPage('research')}
          >
            Research
          </button>
        
        {/* Only show Sign Up button if we are NOT on the login page */}
        {currentPage !== 'login' && (
          <button 
            className="signup-btn" 
            onClick={() => setCurrentPage('login')}
          >
            Sign Up
          </button>
        )}
        </div>
      </nav>

      {/* DYNAMIC CONTENT AREA */}
      {currentPage === 'landing' && <LandingPage />}
      {currentPage === 'login' && <Login onBack={() => setCurrentPage('landing')} />}
      {currentPage === 'research' && <Research />}
    </div>
  )
}

function LandingPage() {
  return (
    <div className="landing-container">
      {/* Header & Logo */}
      <header className="header">
        <img src="/tramigo-logo.png" alt="Tramigo.AI Logo" className="logo" />
      </header>

      <main className="main-content">
        {/* Mission Section */}
        <section className="mission-box">
          <h2>Everyone deserves to work</h2>
          <p className="mission-text">
            Our mission is to facilitate inclusive, community-based employment for 
            individuals with intellectual disabilities. By leveraging adaptive 
            AI-driven support systems, we ensure our participants not only secure 
            meaningful jobs but master their roles with confidence and excellence.
          </p>
        </section>

        {/* Infographic Section */}
        {/* We use a plain container so the image can be full width */}
        <section className="infographic-container">
           <h2 className="visually-hidden">Employment Stats</h2>
           <img 
             src="/infographic.png" 
             alt="Infographic explaining employment stats for IIDs" 
             className="infographic-image"
           />
        </section>

        {/* How Section */}
        <section className="howto-box">
          <h2>Evidence-based and fun</h2>
          <p className="howto-text">
            Master the skills for jobs and independent living through an AI-powered 
            platform that turns daily tasks into research-backed games and meaningful 
            milestones.
          </p>
        </section>

        <section className="howto-img">
           <img 
             src="/task-elephant.png" 
             alt="Elephant using the app while working" 
             className="elephant-image"
           />
        </section>

        {/* Build Section */}
        <section className="build-box">
          <h2>Build your own experiences</h2>
          <p className="build-text">
            Create custom games, break down complex tasks into easy to follow steps,
            and customize the learning experience, all with a just a few clicks. 
          </p>
        </section>

        <section className="build-img">
           <img 
             src="/build-elephant.png" 
             alt="Elephant using the app while working" 
             className="elephant-image"
           />
        </section>

        {/* Contact US Section */}
        <section className="contact-box">
          <h2>Contact Us</h2>
          <div className="contact-links">
            <a href="mailto:contact@tramigo.ai">Email Us</a>
            <span>•</span>
            <a href="https://bsky.app/profile/tramigo-ai.bsky.social" target="_blank" rel="noreferrer">Bluesky</a>
            <span>•</span>
            <a href="https://instagram.com/tramigoai" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="copyright">© 2026 Tramigo.AI. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App