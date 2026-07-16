import "../styles/hero.css";
import heroImage from "../assets/ai-health.svg";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <img
          src={heroImage}
          alt="AI Healthcare"
          className="hero-image"
        />

        <h1>
          AI-Powered Preventive Healthcare
        </h1>

        <p>
          Upload medical reports, monitor your health,
          and receive intelligent AI-driven insights
          before diseases become serious.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;