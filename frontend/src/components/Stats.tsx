import "../styles/stats.css";

function Stats() {
  return (
    <section className="stats">

      <h2>Trusted by Thousands</h2>

      <div className="stats-container">

        <div className="stat-card">
          <h3>10K+</h3>
          <p>Medical Reports</p>
        </div>

        <div className="stat-card">
          <h3>95%</h3>
          <p>AI Accuracy</p>
        </div>

        <div className="stat-card">
          <h3>24/7</h3>
          <p>Health Monitoring</p>
        </div>

        <div className="stat-card">
          <h3>500+</h3>
          <p>Doctors Connected</p>
        </div>

      </div>

    </section>
  );
}

export default Stats;