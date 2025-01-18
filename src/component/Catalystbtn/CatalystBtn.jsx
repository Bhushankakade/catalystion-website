import React from "react";
import "./CatalystBtn.css";

function App() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>Welcome to Catalystion</h1>
        <p>Empowering Catalysts to Solve Complex Challenges</p>
      </header>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-text">
          <h2>What is a Catalyst?</h2>
          <p>
            At Catalystion, a Catalyst is an expert who drives solutions,
            accelerates innovation, and creates impactful results for
            businesses. Catalysts are the backbone of our platform, offering
            unmatched expertise to solve complex challenges in various
            industries.
          </p>
          <a href="#apply">Join as a Catalyst</a>
        </div>
        <div className="demo-image">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Catalyst Welcome"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Process Optimization</h3>
          </div>
          <div className="service-card">
            <h3>Chemical Selection</h3>
          </div>
          <div className="service-card">
            <h3>Sustainability Solutions</h3>
          </div>
          <div className="service-card">
            <h3>Compliance Guidance</h3>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faq">
        <h2>FAQs</h2>
        <ul>
          <li>
            <span>Q:</span> What is Catalystion?
            <p>
              A: Catalystion is a platform where experts collaborate to provide
              solutions to complex industry challenges.
            </p>
          </li>
          <li>
            <span>Q:</span> How can I join as a Catalyst?
            <p>
              A: Click on "Join as a Catalyst" and fill out the application
              form.
            </p>
          </li>
          <li>
            <span>Q:</span> What are the benefits of being a Catalyst?
            <p>
              A: You can work flexibly, solve exciting challenges, and earn for
              your expertise.
            </p>
          </li>
          <li>
            <span>Q:</span> Are there any fees to join?
            <p>A: No, joining Catalystion as a Catalyst is completely free.</p>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>
          Email us at:{" "}
          <a href="mailto:krishnaingle49@gmail.com">krishnaingle49@gmail.com</a>
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Catalystion. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
