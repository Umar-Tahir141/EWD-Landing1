import "./ai.css";
import AI from "../../assets/ai.png"

export default function Ai() {
  return (
    <section className="web-section">
      <div className="strategy-container">
        <div className="strategy-content">
          <div className="strategy-image">
            <img
              src={AI}
              alt="Strategy Consulting"
            />
          </div>

          <div className="strategy-right">
            <span className="location">-AI AN CRM</span>

            <h2>
             Integration & AI Consulting Atlanta, GA
            </h2>

            <p>
              Your CRM is either your greatest sales asset or an expensive database no one uses. The difference is almost always strategy and implementation.
            </p>

            <p>
              We configure HubSpot and Salesforce around your actual sales process — then layer AI to automate what's slowing your team down. HIPAA-aware for Atlanta healthcare and fintech clients..
            </p>

            <div className="principle-card">
              <span>CRM That Your Team Will Actually Use</span>

              <p>
              "The best CRM for your Atlanta business isn't the most<br class="bs-only"></br> powerful one — it's the one that maps to how your<br class="bs-only"></br> team actually sells."
              </p>
            </div>
          </div>
        </div>

        <div className="strategy-btn-wrapper">
          <button>EXPLORE AI &amp; CRM SERVICES</button>
        </div>
      </div>
    </section>
  );
}