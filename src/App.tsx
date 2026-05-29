import { useState } from "react";
import amlImg from "./assets/dashboard.png";
import coreImg from "./assets/dashboardtwo.png";
import heroImg from "./assets/Rectangle.png";
import phone1 from "./assets/iPhone 13 Pro.png";
import phone2 from "./assets/iPhone 13 Pro (1).png";
import phone3 from "./assets/iPhone 13 Pro (2).png";
import icon1 from "./assets/Vector.png";
import icon2 from "./assets/Vector (1).png";
import icon3 from "./assets/Vector (2).png";
import icon4 from "./assets/Vector (3).png";
import icon5 from "./assets/Vector (4).png";
import icon6 from "./assets/Frame 55.png";
import n7Logo from "./assets/n7.png";
import tickIcon from "./assets/tick.png";
import techIcon1 from "./assets/techicon1.png";
import techIcon2 from "./assets/techicon2.png";
import techIcon3 from "./assets/techicon3.png";
import techIcon4 from "./assets/techicon4.png";
import techIcon5 from "./assets/techicon5.png";
import techIcon6 from "./assets/techicon6.png";




const solutions = [
  {
    icon: icon1,
    title: "Core Banking CB7",
    desc: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
  },
  {
    icon: icon2,
    title: "Digital Banking N7",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
  {
    icon: icon3,
    title: "Open Banking",
    desc: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
  },
  {
    icon: icon4,
    title: "Loan Origination System",
    tag: "NBFC",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
  {
    icon: icon5,
    title: "Loan Management System",
    tag: "NBFC",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
];

const coreFeatures = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

const phoneFeatures = [
  {
    title: "Fully compliant with regulatory requirement",
    img: phone1,
    items: ["Pre-integrated Security System", "Regulatory Support", "Connected Core"],
  },
  {
    title: "No legacy IT systems",
    img: phone2,
    items: ["Adaptive API monetization", "Ambient user experience", "Cloud-native lower TCO"],
  },
  {
    title: "No traditional branches",
    img: phone3,
    items: ["Branchless banking", "Digital transformation capability", "Scalable architecture"],
  },
];

const posts = [
  "How to transition from a traditional to a digital bank",
  "How to transform from traditional to a digital format",
  "How to transition from a traditional to a digital bank",
];

const trustedLogos = [
  { icon: techIcon1, name: "SHELLS" },
  { icon: techIcon2, name: "SmartFinder" },
  { icon: techIcon3, name: "Zoomer" },
  { icon: techIcon4, name: "ArtVenue" },
  { icon: techIcon5, name: "kontrast" },
  { icon: techIcon6, name: "WAVESMARATHON" },
];

const caseSlides = [
  "How we help brand reach out to more people",
  "How we help brand reach out to more people",
  "How we help brand reach out to more people",
];

function Button({ children, outline = false }: { children: React.ReactNode; outline?: boolean }) {
  return (
    <a className={outline ? "btn btn-outline" : "btn"} href="#contact">
      {children}
    </a>
  );
}

export default function App() {
  const [activeCase, setActiveCase] = useState(0);
  const [caseMotion, setCaseMotion] = useState<"left" | "right" | "">("");
  const previousCase = (activeCase + caseSlides.length - 1) % caseSlides.length;
  const nextCase = (activeCase + 1) % caseSlides.length;
  const visibleCases = [previousCase, activeCase, nextCase];
  const showPreviousCase = () => {
    setCaseMotion("right");
    setActiveCase(previousCase);
  };
  const showNextCase = () => {
    setCaseMotion("left");
    setActiveCase(nextCase);
  };

  return (
    <main>
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#">
            N7
          </a>
          <nav>
            <a href="#solutions">Solutions⌄</a>
            <a href="#insights">Resources⌄</a>
            <a href="#contact">About us</a>
          </nav>
          <a className="nav-demo" href="#contact">
            Request demo
          </a>
        </div>
      </header>

      <section className="hero section-dark">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1>
              The new foundation
              <br />
              of modern banking
            </h1>
            <p>
              We drive innovation and growth, provide seamless customer experience and operational
              excellence.
            </p>
            <div className="button-row">
              <Button>Request demo</Button>
              <Button outline>Contact us</Button>
            </div>
            <div className="trusted">
              <span>Trusted by:</span>
              <div className="trusted-logos">
                {trustedLogos.map((logo) => (
                  <div className="trusted-logo" key={logo.name}>
                    <img src={logo.icon} alt="" aria-hidden="true" />
                    <span>{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-media">
            <img src={heroImg} alt="Modern banking interface" />
          </div>
        </div>
      </section>

      <section className="solutions section-dark" id="solutions">
        <div className="wrap two-col">
          <div>
            <h2>
              All of our solutions are
              <br />
              tailor-made to your needs
            </h2>
            <Button outline>Request demo</Button>
          </div>
          <div className="solution-grid">
            {solutions.map((item) => (
              <article className="solution" key={item.title}>
                <div className="solution-top">
                  <img className="solution-icon" src={item.icon} alt="" aria-hidden="true" />
                  {"tag" in item && <span className="solution-tag">{item.tag}</span>}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href="#contact">Learn more →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="core section-dark">
        <div className="big-watermark">CB7</div>
        <div className="wrap two-col center">
          <div className="core-copy">
            <h2>
              A complete cloud-based
              <br />
              core banking.
            </h2>
            <p>Faster time to market with our cloud-based core banking services.</p>
            <Button>Request demo</Button>
            <a className="learn-inline" href="#contact">
              Learn more →
            </a>
          </div>
          <img className="dashboard right-float" src={amlImg} alt="AML dashboard" />
        </div>
      </section>

      <section className="features section-dark">
        <div className="wrap two-col center">
          <img className="dashboard left-float" src={coreImg} alt="Core banking dashboard" />
          <div className="features-copy">
            <h2>Run a more efficient, flexible, and digitally connected core banking system</h2>
            <p className="eyebrow">What you will get:</p>
            <ul className="check-list two-list">
              {coreFeatures.map((item) => (
                <li key={item}>
                  <img className="tick-icon" src={tickIcon} alt="" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap">
          <div className="cta-card">
            <div>
              <h2>
                Take the full advantage of
                <br />
                going paper-less now.
              </h2>
              <p>
                CB7 helps your financial institution improve client experience, automate procedures
                and simplify operations.
              </p>
            </div>
            <div className="button-row">
              <Button outline>Contact us</Button>
              <Button>Request demo</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="light">
        <div className="ticker">
          <div>
            N7 · Say hello to the new way of banking · CB7 · Say hello to the new way of banking ·
          </div>
        </div>
        <div className="wrap phone-intro">
          <div>
            <h2>
              Digital banking
              <br />
              out-of-the-box
            </h2>
            <p>N7 helps financial institutions improve client experience and automate operations.</p>
            <Button>Request demo</Button>
          </div>
        </div>
        <div className="wrap phone-stack">
          {phoneFeatures.map((feature, index) => (
            <article className="phone-row" key={feature.title}>
              <div className="phone-copy">
                <h3>{feature.title}</h3>
                <ul className="check-list">
                  {feature.items.map((item) => (
                    <li key={item}>
                      <img className="tick-icon" src={tickIcon} alt="" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <img src={feature.img} alt={feature.title} />
            </article>
          ))}
        </div>
        <div className="wrap">
          <div className="cta-card dark-card">
            <div>
              <h2>
                Take the full advantage of
                <br />
                going paper-less now.
              </h2>
              <p>
                N7 helps your financial institution improve the client experience, automate and
                optimize procedures, simplify banking operations
              </p>
            </div>
            <div className="button-row">
              <Button outline>Contact us</Button>
              <Button>Request demo</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="insights section-dark" id="insights">
        <div className="wrap two-col">
          <div>
            <h2>Get yourself up-to-speed on all the things happening in fintech</h2>
            <Button outline>Insights</Button>
          </div>
          <div className="post-grid">
            {posts.map((post, index) => (
              <article className={index === 0 ? "post post-large" : "post"} key={`${post}-${index}`}>
                {index === 0 && (
                  <img className="post-image" src={icon6} alt="" aria-hidden="true" />
                )}
                <div>
                  <span>Getting started</span>
                  <h3>{post}</h3>
                  <p>David Grohl · 17/08/24</p>
                  <a href="#contact">Read more</a>
                </div>
              </article>
            ))}
            <a className="read-all" href="#contact">
              Read all insights →
            </a>
          </div>
        </div>
      </section>

      <section className="cases section-dark">
        <div className="wrap">
          <h2>Our Case Studies</h2>
          <div
            className={`case-carousel ${caseMotion ? `case-motion-${caseMotion}` : ""}`}
            aria-label="Case studies carousel"
            onAnimationEnd={() => setCaseMotion("")}
          >
            {visibleCases.map((caseIndex, position) => (
              <article
                className={`case-card case-slide case-slide-${position + 1}`}
                aria-hidden={position !== 1}
                key={`${caseSlides[caseIndex]}-${caseIndex}-${position}`}
              >
                <div className="case-visual">
                  <img src={icon6} alt="" aria-hidden="true" />
                </div>
                <div>
                  <span>Getting started</span>
                  <h3>{caseSlides[caseIndex]}</h3>
                  <p>Zoomerr</p>
                  <a href="#contact">Read more</a>
                </div>
              </article>
            ))}
          </div>
          <div className="case-controls">
            <button
              aria-label="Previous case"
              type="button"
              onClick={showPreviousCase}
            >
              ←
            </button>
            <div className="case-dots">
              {caseSlides.map((_, index) => (
                <button
                  aria-label={`Show case ${index + 1}`}
                  className={index === activeCase ? "active" : ""}
                  key={index}
                  type="button"
                  onClick={() => setActiveCase(index)}
                />
              ))}
            </div>
            <button aria-label="Next case" type="button" onClick={showNextCase}>
              →
            </button>
          </div>
          <a className="case-view-all" href="#contact">
            View all →
          </a>
        </div>
      </section>

      <section className="footer-cta section-dark">
        <div className="wrap footer-cta-grid">
          <div>
            <h2>
              Take the full advantage of
              <br />
              going paper-less now.
            </h2>
            <p>
              CB7 helps your financial institution improve the client experience, automate and
              optimize procedures, simplify banking operations
            </p>
          </div>
          <div className="button-row">
            <Button outline>Contact us</Button>
            <Button>Request demo</Button>
          </div>
        </div>
      </section>

      <footer className="footer section-dark" id="contact">
        <div className="wrap footer-grid">
          <div className="footer-logo">
            <img src={n7Logo} alt="N7" />
          </div>
          <div className="footer-address footer-address-one">
            <h4>London</h4>
            <p>
              Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge,TN14 6EP, England, United
              Kingdom.
            </p>
          </div>
          <div className="footer-address">
            <h4>Dubai</h4>
            <p>
              Linktia Infosystems Ltd – CB7,Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes
              Towers, Dubai, United Arab Emirates
            </p>
          </div>
          <div className="footer-address">
            <h4>London</h4>
            <p>Linktia Infosystems Ltd – CB7,Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India</p>
          </div>

          <div className="footer-links footer-links-solutions">
            <h4>Solutions</h4>
            <a href="#contact">Core Banking CB7 <span>→</span></a>
            <a href="#contact">Digital Banking N7 <span>→</span></a>
            <a href="#contact">Open Banking <span>→</span></a>
            <a href="#contact">Loan Origination System <span>→</span></a>
            <a href="#contact">Loan Management System <span>→</span></a>
            <a href="#contact">Digital Transformation <span>→</span></a>
          </div>
          <div className="footer-links">
            <h4>N7 Banking</h4>
            <a href="#contact">About Us <span>→</span></a>
            <a href="#solutions">Solutions <span>→</span></a>
            <a href="#contact">Contact <span>→</span></a>
            <a href="#contact">Company <span>→</span></a>
            <a href="#contact">Careers <span>→</span></a>
            <a href="#insights">Insights <span>→</span></a>
            <a href="#contact">Core Team <span>→</span></a>
            <a href="#contact">Brand Center <span>→</span></a>
          </div>
          <div className="footer-links">
            <h4>Our Socials</h4>
            <a href="#contact">LinkedIn <span>→</span></a>
            <a href="#contact">X <span>→</span></a>
          </div>
        </div>
        <p className="footer-copy">
          Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] —
          [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation
          13100892]
        </p>
      </footer>
    </main>
  );
}
