import "./market.css";
import market from "../../assets/market.png"

export default function Market() {
  return (
    <section className="uxui-section">
      <div className="strategy-container">
        <div className="uxui-content">
          <div className="strategy-image">
            <img
              src={market}
              alt="Strategy Consulting"
            />
          </div>

          <div className="strategy-right">
            <span className="location">-DESIGN &amp; EXPERIENCE</span>

            <h2>
              Digital Marketing & Growth Strategy Atlant’s GA
            </h2>

            <p>
              Marketing without strategy is just spending. We build growth engines that compound — tied to your business goals, not vanity metrics.
            </p>

            <p>
              SEO, paid ads, email, social — all built from the same strategic foundation for Atlanta startups, SaaS companies,and Georgia healthcare brands.
            </p>
          </div>
        </div>

        <div className="strategy-btn-wrapper">
          <button>EXPLORE MARKETING SERVICES</button>
        </div>
      </div>
    </section>
  );
}