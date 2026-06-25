import { useState } from "react";
import "./agency.css";
import srtpic from "../../assets/srtgt.png"

/* ── Data ── */
const FAQS = [
  {
    question: "What services does Tailor & Made offer in Atlanta?",
    answer:
      "Tailor & Made stands out through personalized strategy, modern design, and purpose-driven digital experiences. We create custom solutions tailored to each brand's goals — combining creativity, functionality, and long-term growth.",
  },
  {
    question:
      "Can Tailor & Made help with both web development and digital marketing in Atlanta?",
    answer:
      "Yes, we offer an integrated approach that covers both web development and digital marketing. Our team ensures your online presence and growth strategies work hand in hand for maximum impact.",
  },
  {
    question: "How much does it cost to hire a digital agency in Atlanta?",
    answer:
      "Costs vary depending on the scope, complexity, and services required. We offer tailored packages to fit different budgets and business sizes — reach out for a custom quote.",
  },
  {
    question: "Does Tailor & Made work with Atlanta startups?",
    answer:
      "Absolutely. We love working with startups and early-stage companies. We help build strong digital foundations that scale as your business grows.",
  },
  {
    question: "Does Tailor & Made offer strategy for startups in Georgia?",
    answer:
      "Yes, we offer comprehensive strategy services for startups across Georgia, helping you define your brand, target audience, and digital roadmap from day one.",
  },
];

const NAV_ITEMS = [
  { label: "Strategy-Atlanta", active: true },
  { label: "Design & Experiance", active: false },
  { label: "Developoment", active: false },
  { label: "Growth & Marketing", active: false },
  { label: "AI & CRM", active: false },
  { label: "Business Consultancy", active: false },
];

/* ── Sub-components ── */
function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="as-accordion-item">
      <button
        className="as-accordion-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="as-accordion-question">{question}</span>
        <span className={`as-accordion-icon${isOpen ? " as-accordion-icon--open" : ""}`}>
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="as-accordion-body" role="region">
          {answer}
        </div>
      )}
    </div>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (i) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="as-faq-section">
      <div className="as-container">

        <p className="as-faq-eyebrow">FAQ'S</p>

        <div className="faq-cont">
        <h1 className="as-faq-heading">
          Atlanta Digital Agency Questions, Honestly Answered
        </h1>

        <p className="as-faq-subheading">
          Real questions about working with a digital agency in Atlanta —
          answered straight.
        </p>

        <div className="as-accordion" role="list">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>

        <div className="as-faq-cta-wrap">
          <button className="as-faq-cta-btn">
            Still have questions? Let's Talk
          </button>
        </div>
        </div>

      </div>
    </section>
  );
}

function StrategySection() {
      const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="as-strategy-section">
      <div className="as-container">
        <div className="as-strategy-inner">

          {/* Left — image + caption */}
          <div className="as-strategy-left">
            <img
              className="as-strategy-img"
              src={srtpic}
              alt="Team working on strategy"
            />
            <p className="as-strategy-img-label">Strategy</p>
            <p className="as-strategy-img-caption">
              Full strategy services page for Georgia businesses.
            </p>
          </div>

          {/* Right — navigation list */}
          <nav className="as-strategy-nav" aria-label="Service areas">
            <ul className="as-strategy-nav-list">
              {NAV_ITEMS.map((item, i) => (
                <li
                  key={i}
                  className={`as-strategy-nav-item ${
                    activeIndex === i ? "as-strategy-nav-item--active" : ""
                  }`}
                  onClick={() => setActiveIndex(i)}
                >
                  <span className="as-strategy-nav-link">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </section>
  );
}

/* ── Main Export ── */
export default function AgencySections() {
  return (
    <>
      <FaqSection />
      <StrategySection />
    </>
  );
}