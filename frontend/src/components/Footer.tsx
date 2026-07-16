import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>MedTwin AI</h2>
          <p>
            AI-powered preventive healthcare platform helping users
            monitor health, analyze reports, and stay ahead of diseases.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>support@medtwin.ai</p>
          <p>+91 XXXXX XXXXX</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 MedTwin AI. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;