import "./business.css";
import business from "../../assets/business.png"

export default function Business() {
  return (
    <section className="uxui-section">
      <div className="strategy-container">
        <div className="uxui-content">
          <div className="strategy-image">
            <img
              src={business}
              alt="Strategy Consulting"
            />
          </div>

          <div className="strategy-right">
            <span className="location">— Business Development Consultancy</span>

            <h2>
             Business Development Consultancy Atlanta ,GA
            </h2>

            <p>
             Sometimes you need a clear-eyed look at your business model and the decisions that define your next 12–24 months — not a campaign.
            </p>

            <p>
              We work with Atlanta founders and executives who need honest strategic counsel. We're not afraid to tell you what you need to hear.
            </p>

              <div className="principle-card">
              <span>The Strategic Partner Atlanta Businesses Need</span>

              <p>
             "Most consultants tell you what you want to hear. We<br class="bs-only"></br> tell you what your Atlanta business actually needs —<br class="bs-only"></br> then help you build it."
              </p>
            </div>
          </div>
        </div>

        <div className="strategy-btn-wrapper">
          <button>EXPLORE MARKETING SERVICES</button>
        </div>
      </div>
    </section>
  );
}