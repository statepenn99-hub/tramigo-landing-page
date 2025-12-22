import './App.css'

function App() {
  return (
    <div className="landing-container">
      
      {/* 1. Header & Logo */}
      <header className="header">
        <img src="/tramigo-logo.png" alt="Tramigo.AI Logo" className="logo" />
      </header>

      {/* 2. Main Mission Section */}
      <main className="main-content">
        <section className="mission-box">
          <h2>Our Mission</h2>
          <p className="mission-text">
            Our mission is to facilitate inclusive, community-based employment for 
            individuals with intellectual disabilities. By leveraging adaptive 
            AI-driven support systems, we ensure our participants not only secure 
            meaningful jobs but master their roles with confidence and excellence.
          </p>
        </section>
      </main>

      {/* 3. Footer & Contact */}
      <footer className="footer">
        <section className="contact-box">
          <h3>Contact Us</h3>
          <div className="contact-links">
            <a href="mailto:contact@tramigo.ai">Email Us</a>
            <span>•</span>
            <a href="https://bsky.app/profile/tramigo" target="_blank" rel="noreferrer">Bluesky</a>
            <span>•</span>
            <a href="https://instagram.com/tramigo" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </section>
        <p className="copyright">© 2025 Tramigo.AI. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default App