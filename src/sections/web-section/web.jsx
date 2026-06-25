import "./web.css";
import web from "../../assets/web.png"

export default function Web() {
  return (
    <section className="web-section">
      <div className="strategy-container">
        <div className="strategy-content">
          <div className="strategy-image">
            <img
              src={web}
              alt="Strategy Consulting"
            />
          </div>

          <div className="strategy-right">
            <span className="location">-DEVELOPMENT</span>

            <h2>
             Web & App Development Atlanta, GA
            </h2>

            <p>
              Development is where strategy becomes real. We build fast, scalable products — websites, apps,SaaS platforms, and MVPs — for Atlanta businesses at every stage.
            </p>

            <p>
              No code gets written until scope is locked and architecture is planned.
            </p>

            <div className="principle-card">
              <span>Built to Last. Engineered to Scale.</span>

              <p>
               "Atlanta businesses don't need more code. They<br class="bs-only"></br> need the right code — written with a plan, built for<br class="bs-only"></br> growth."
              </p>
            </div>
          </div>
        </div>

        <div className="strategy-btn-wrapper">
          <button>EXPLORE DEVELOPMENT SERVICES</button>
        </div>
      </div>
    </section>
  );
}