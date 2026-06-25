import "./StrategySection.css";
import strt from "../../assets/strategy-img.png"

export default function StrategySection() {
  return (
    <section className="strategy-section">
      <div className="strategy-container">
        <div className="strategy-content">
          <div className="strategy-image">
            <img
              src={strt}
              alt="Strategy Consulting"
            />
          </div>

          <div className="strategy-right">
            <span className="location">-ATLANTA, GEORGIA</span>

            <h2>
              Digital Strategy
              <br />
              Consulting Atlanta, GA
            </h2>

            <p>
              Atlanta businesses don't fail from lack of effort — they fail
              from executing without a plan. Every Tailor & Made engagement
              starts with strategy.
            </p>

            <p>
              We define what to build, who it's for, and how it wins — for
              startups, SaaS companies, healthcare firms, and Georgia
              enterprises.
            </p>

            <div className="principle-card">
              <span>THE T&M STRATEGY PRINCIPLE</span>

              <p>
                “Every dollar you invest in design, development, or<br class="bs-only"></br> marketing
                is more powerful when a clear strategy sits<br class="bs-only"></br> underneath it.”
              </p>
            </div>
          </div>
        </div>

        <div className="strategy-btn-wrapper">
          <button>EXPLORE STRATEGY SERVICES</button>
        </div>
      </div>
    </section>
  );
}