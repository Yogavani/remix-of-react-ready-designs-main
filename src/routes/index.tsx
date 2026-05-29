import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles, Command, Network, Shuffle, Workflow, Check, ChevronDown,
} from "lucide-react";
import heroImg from "@/assets/hero-banking.jpg";
import amlImg from "@/assets/aml-dashboard.jpg";
import coreImg from "@/assets/core-banking-dash.jpg";
import phone1 from "@/assets/phone-1.jpg";
import phone2 from "@/assets/phone-2.jpg";
import phone3 from "@/assets/phone-3.jpg";

function FeatureBlock({ title, desc, items }: { title: string; desc: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-semibold text-slate-900">{title}</h4>
      <p className="mt-3 text-sm text-slate-600 leading-relaxed">{desc}</p>
      <ul className="mt-5 space-y-3 text-sm text-slate-700">
        {items.map(i => (
          <li key={i} className="flex gap-2"><Check className="h-4 w-4 text-sky-500 mt-0.5 shrink-0" /><span>{i}</span></li>
        ))}
      </ul>
    </div>
  );
}


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "N7 — The new foundation of modern banking" },
      { name: "description", content: "N7 drives innovation and growth with seamless customer experience and operational excellence for modern banks." },
    ],
  }),
  component: Index,
});

const solutions = [
  { icon: Sparkles, title: "Core Banking CB7", tag: null, desc: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance." },
  { icon: Command, title: "Digital Banking N7", tag: null, desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients." },
  { icon: Shuffle, title: "Open Banking", tag: null, desc: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring." },
  { icon: Network, title: "Loan Origination System", tag: "NBFC", desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients." },
  { icon: Workflow, title: "Loan Management System", tag: "NBFC", desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients." },
];

const features1 = ["Customer On-Boarding", "Managing deposits and withdrawals", "Transaction management", "Interest Calculation", "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)"];
const features2 = ["CRM Activities", "Configuring New Banking Products", "Loan disbursal and Loan management", "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on."];

function Btn({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "outline" }) {
  const base = "inline-flex items-center justify-center px-6 py-3 text-xs font-semibold tracking-wider uppercase rounded-md transition-all";
  if (variant === "outline") return <button className={`${base} border border-border text-foreground hover:bg-secondary`}>{children}</button>;
  return <button className={`${base} text-primary-foreground hover:opacity-90`} style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>{children}</button>;
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-4 z-50 mx-auto max-w-3xl px-4">
        <nav className="flex items-center justify-between gap-4 rounded-full border border-border bg-card/80 backdrop-blur px-5 py-2.5">
          <a href="#" className="font-bold text-lg tracking-tight">N7</a>
          <div className="hidden md:flex items-center gap-5 text-xs uppercase tracking-wider text-muted-foreground">
            <a href="#solutions" className="flex items-center gap-1 hover:text-foreground">Solutions <ChevronDown className="h-3 w-3" /></a>
            <a href="#" className="flex items-center gap-1 hover:text-foreground">Resources <ChevronDown className="h-3 w-3" /></a>
            <a href="#" className="hover:text-foreground">About Us</a>
          </div>
          <button className="rounded-md border border-border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider hover:bg-secondary">Request Demo</button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              The new foundation<br />of modern banking
            </h1>
            <p className="mt-5 text-sm text-muted-foreground max-w-md">
              We drive innovation and growth, provide seamless customer experience and operational excellence
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn>Request Demo</Btn>
              <Btn variant="outline">Contact Us</Btn>
            </div>
            <div className="mt-16">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Trusted By:</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground/70">
                {["SHELLS", "SmartFinder", "Zoomer", "ArtVenue", "Iconbrand", "Another"].map(b => (
                  <span key={b} className="opacity-60">◇ {b}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={heroImg} alt="Modern banking" width={1024} height={768} className="rounded-2xl w-full" style={{ boxShadow: "var(--shadow-glow)" }} />
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-3 gap-10">
        <div className="lg:sticky lg:top-28 self-start">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">All of our solutions are<br />tailor-made to your needs</h2>
          <div className="mt-8"><Btn variant="outline">Request Demo</Btn></div>
        </div>
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-8 gap-y-12">
          {solutions.map(({ icon: Icon, title, tag, desc }) => (
            <div key={title}>
              <div className="flex items-start justify-between">
                <Icon className="h-7 w-7 text-primary" />
                {tag && <span className="text-[10px] tracking-widest text-muted-foreground">{tag}</span>}
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <a href="#" className="mt-4 inline-block text-xs uppercase tracking-widest text-primary border-b border-primary pb-0.5">Learn More →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Cloud banking band */}
      <section className="relative border-y border-border bg-secondary/30">
        <div className="absolute right-0 top-0 text-[20rem] font-black text-foreground/[0.03] leading-none select-none pointer-events-none">CB7</div>
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">A complete cloud-based<br />core banking.</h2>
            <p className="mt-4 text-sm text-muted-foreground">Faster time to market with our cloud-based core banking services</p>
            <div className="mt-8"><Btn>Request Demo</Btn></div>
            <a href="#" className="mt-4 inline-block text-xs uppercase tracking-widest text-primary border-b border-primary pb-0.5">Learn More →</a>
          </div>
          <img src={amlImg} alt="AML Dashboard" loading="lazy" width={1024} height={768} className="rounded-xl border border-border" />
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <img src={coreImg} alt="Core banking dashboard" loading="lazy" width={1024} height={768} className="rounded-xl border border-border" />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">Run a more efficient, flexible, and digitally connected corebanking system</h2>
          <p className="mt-6 font-semibold">What you will get:</p>
          <div className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {[...features1, ...features2].map(f => (
              <div key={f} className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /><span>{f}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital banking light section */}
      <section className="bg-white text-slate-900">
        {/* Marquee */}
        <div className="border-y border-slate-200 overflow-hidden py-5">
          <div className="flex gap-8 whitespace-nowrap text-2xl md:text-3xl font-semibold animate-[marquee_30s_linear_infinite]">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-8 shrink-0">
                <span className="text-sky-500">N7</span>
                <span className="text-slate-300">✺</span>
                <span>Say <span className="inline-block">👋</span> to the new way of banking</span>
                <span className="text-slate-300">✺</span>
                <span className="text-sky-500">CB7</span>
                <span className="text-slate-300">✺</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 1 */}
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-3 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold leading-tight text-slate-900">Digital banking<br />out-of-the-box</h3>
            <p className="mt-4 text-sm text-slate-600">N7 helps your financial institution improve the client experience, automate and optimize procedures</p>
            <div className="mt-6">
              <button className="inline-flex px-6 py-3 text-xs font-semibold tracking-wider uppercase rounded-md text-white" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>Request Demo</button>
            </div>
            <a href="#" className="mt-4 inline-block text-xs uppercase tracking-widest text-sky-600 border-b border-sky-600 pb-0.5">Learn More →</a>
          </div>
          <div className="flex justify-center"><img src={phone1} alt="Digital banking app" loading="lazy" width={640} height={1280} className="max-h-[520px] w-auto drop-shadow-2xl" /></div>
          <FeatureBlock title="Fully compliant with regulatory requirement" desc="The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures." items={["Pre-integrated Security System", "Fully Compliant With Regulatory Requirement", "Digitally Connected Core"]} />
        </div>

        {/* Row 2 */}
        <div className="mx-auto max-w-7xl px-6 pb-20 grid lg:grid-cols-3 gap-10 items-center">
          <div className="lg:order-1 order-2"><FeatureBlock title="No legacy IT systems" desc="Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance." items={["Adaptive & Intelligent API monetization", "Ambient User Experience", "Cloud-native With lower TCO"]} /></div>
          <div className="lg:order-2 order-1 flex justify-center"><img src={phone2} alt="Banking analytics" loading="lazy" width={640} height={1280} className="max-h-[520px] w-auto drop-shadow-2xl" /></div>
          <div className="lg:order-3 hidden lg:block" />
        </div>

        {/* Row 3 */}
        <div className="mx-auto max-w-7xl px-6 pb-24 grid lg:grid-cols-3 gap-10 items-center">
          <div className="hidden lg:block" />
          <div className="flex justify-center"><img src={phone3} alt="Profile screen" loading="lazy" width={640} height={1280} className="max-h-[520px] w-auto drop-shadow-2xl" /></div>
          <FeatureBlock title="No traditional branches" desc="Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience." items={["Branchless & Paperless Banking", "Digital Transformation Capability", "Optimized, Adoptable and Scalable"]} />
        </div>
      </section>

      {/* Insights */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug max-w-sm">Get yourself up-to-speed on all the things happening in fintech</h2>
          <div className="mt-8"><Btn variant="outline">Insights</Btn></div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <article className="sm:col-span-2 rounded-xl border border-border bg-card p-5 flex gap-5">
            <div className="aspect-square w-32 shrink-0 rounded-lg bg-primary/20 grid place-items-center"><div className="grid grid-cols-2 gap-1 text-primary"><Workflow className="h-8 w-8" /><Workflow className="h-8 w-8" /><Workflow className="h-8 w-8" /><Workflow className="h-8 w-8" /></div></div>
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Getting Started</p>
              <h3 className="mt-2 font-semibold text-lg">How to transition from a traditional to a digital bank</h3>
              <p className="mt-2 text-xs text-muted-foreground">David Grohl &nbsp; 17/08/24</p>
              <button className="mt-4 w-full rounded-md border border-border py-2 text-[10px] uppercase tracking-wider hover:bg-secondary">Read More</button>
            </div>
          </article>
          {[0,1].map(i => (
            <article key={i} className="rounded-xl border border-border bg-card p-5">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Getting Started</p>
              <h3 className="mt-2 font-semibold">How to transition from a traditional to a digital bank</h3>
              <p className="mt-2 text-xs text-muted-foreground">David Grohl &nbsp; 17/08/24</p>
              <button className="mt-6 w-full rounded-md border border-border py-2 text-[10px] uppercase tracking-wider hover:bg-secondary">Read More</button>
            </article>
          ))}
          <a href="#" className="sm:col-span-2 text-right text-xs uppercase tracking-widest text-primary">Read All Insights →</a>
        </div>
      </section>

      {/* Case Studies */}
      <section className="border-t border-border py-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold">Our Case Studies</h2>
        <div className="mx-auto max-w-5xl px-6 mt-12">
          <div className="rounded-xl border border-border bg-card p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="aspect-square w-40 shrink-0 rounded-lg bg-primary/20 grid place-items-center"><div className="grid grid-cols-2 gap-1 text-primary"><Workflow className="h-10 w-10" /><Workflow className="h-10 w-10" /><Workflow className="h-10 w-10" /><Workflow className="h-10 w-10" /></div></div>
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Getting Started</p>
              <h3 className="mt-2 text-2xl font-bold">How we help brand reach out to more people</h3>
              <p className="mt-3 text-sm text-muted-foreground flex items-center gap-2">⚡ Zoomerr</p>
              <button className="mt-5 w-full rounded-md border border-border py-2 text-[10px] uppercase tracking-wider hover:bg-secondary">Read More</button>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="h-10 w-10 rounded-full border border-border grid place-items-center hover:bg-secondary">←</button>
              <div className="flex gap-2">
                <span className="h-1.5 w-6 rounded-full bg-primary" />
                <span className="h-1.5 w-1.5 rounded-full bg-border" />
                <span className="h-1.5 w-1.5 rounded-full bg-border" />
                <span className="h-1.5 w-1.5 rounded-full bg-border" />
              </div>
              <button className="h-10 w-10 rounded-full border border-border grid place-items-center hover:bg-secondary">→</button>
            </div>
            <a href="#" className="text-xs uppercase tracking-widest text-primary">View All →</a>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative border-t border-border bg-secondary/40 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-[18rem] font-black text-foreground/[0.03] leading-none select-none pointer-events-none">CB7</div>
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-8 items-center relative">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Take the full advantage of<br />going paper-less now.</h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-lg">CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Btn variant="outline">Contact Us</Btn>
            <Btn>Request Demo</Btn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-4 gap-12">
          <div>
            <div className="text-7xl md:text-8xl font-black bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>N7</div>
          </div>
          <div className="lg:col-span-3 grid sm:grid-cols-3 gap-10 text-sm">
            {[
              { city: "London", addr: "Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge,TN14 6EP, England, United Kingdom." },
              { city: "Dubai", addr: "Linktia Infosystems Ltd – CB7,Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates" },
              { city: "London", addr: "Linktia Infosystems Ltd – CB7,Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India" },
            ].map((o, i) => (
              <div key={i}>
                <p className="font-semibold">{o.city}</p>
                <p className="mt-3 text-muted-foreground leading-relaxed text-xs">{o.addr}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-16 grid sm:grid-cols-3 gap-10 text-sm">
          {[
            { title: "Solutions", links: ["Core Banking CB7", "Digital Banking N7", "Open Banking", "Loan Origination System", "Loan Management System", "Digital Transformation"] },
            { title: "N7 Banking", links: ["About Us", "Solutions", "Contact", "Company", "Careers", "Insights", "Core Team", "Brand Center"] },
            { title: "Our Socials", links: ["LinkedIn", "X"] },
          ].map(col => (
            <div key={col.title}>
              <p className="font-semibold mb-4">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map(l => (
                  <li key={l}><a href="#" className="flex items-center justify-between text-muted-foreground hover:text-foreground border-b border-border/50 pb-2"><span>{l}</span><span>→</span></a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border py-6 text-center text-[11px] text-muted-foreground px-6">
          Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100892]
        </div>
      </footer>

    </div>
  );
}
