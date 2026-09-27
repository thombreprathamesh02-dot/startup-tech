import { ArrowRight, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="badge">
          <Sparkles size={15} />
          Technology Support for Small Startups
        </div>

        <h1>
          Turn Your
          <br />
          <span>Idea Into Growth.</span>
        </h1>

        <p>
          Simple technology. Smart solutions.
          <br />
          Built for growing businesses.
        </p>

        <a href="#solutions" className="primary-btn">
          Find My Solution <ArrowRight size={18} />
        </a>
      </div>

      <div className="hero-visual">
        <div className="floating-card card-one">🌐 Website</div>
        <div className="floating-card card-two">⚙️ Automation</div>
        <div className="floating-card card-three">📱 Mobile App</div>

        <div className="hero-circle">
          <div className="circle-core">✦</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;