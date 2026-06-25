import "./uxui.css";
import uxui from "../../assets/uxui.png"

export default function Uxui() {
  return (
    <section className="uxui-section">
      <div className="strategy-container">
        <div className="uxui-content">
          <div className="strategy-image">
            <img
              src={uxui}
              alt="Strategy Consulting"
            />
          </div>

          <div className="uxui-right">
            <span className="location">-DESIGN &amp; EXPERIENCE</span>

            <h2>
              UX/UI Design & Brand Experience Atlanta, GA
            </h2>

            <p>
              In Atlanta's market, design is a competitive advantage. We build interfaces and brand experiences rooted in strategy — not just aesthetics.
            </p>

            <p>
              From first-time startups to established Georgia brands, every design decision is anchored in user research and business goals.
            </p>

            <div className="principle-card">
              <span>Design That's Strategy in Visual Form</span>

              <p>
               "The best design in Atlanta isn't just beautiful — it's<br class="bs-only"></br> built to convert, retain, and earn trust from the first<br class="bs-only"></br> pixel."
              </p>
            </div>
          </div>
        </div>

        <div className="strategy-btn-wrapper">
          <button>EXPLORE DESIGN SERVICES</button>
        </div>
      </div>
    </section>
  );
}