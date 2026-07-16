import "../styles/features.css";

function Features() {
  return (
    <section className="features">

      <h2>Why Choose MedTwin AI?</h2>

      <div className="feature-container">

        <div className="feature-card">
          <h3>🧠 AI Health Insights</h3>
          <p>
            Analyze health data and receive intelligent preventive healthcare recommendations.
          </p>
        </div>

        <div className="feature-card">
          <h3>📊 Digital Twin</h3>
          <p>
            Build a virtual health profile to monitor wellness and detect potential risks early.
          </p>
        </div>

        <div className="feature-card">
          <h3>🔒 Secure Records</h3>
          <p>
            Your medical information is protected using secure storage and privacy-first practices.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;