import React from 'react';
import './App.css';

export default function Login({ onBack }) {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Early Access Coming Soon</h2>
        <p style={{ color: '#555', lineHeight: 1.6, marginBottom: '20px' }}>
          Tramigo.AI participant and specialist accounts are currently in private pilot development.
          Reach out to join our pilot list or collaborate on research.
        </p>
        <a
          href="mailto:contact@tramigo.ai?subject=Tramigo.AI%20Early%20Access"
          className="login-btn"
          style={{ display: 'inline-block', textDecoration: 'none', boxSizing: 'border-box' }}
        >
          Contact Us for Early Access
        </a>
        {onBack && (
          <div>
            <button type="button" className="back-btn" onClick={onBack}>
              ← Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
