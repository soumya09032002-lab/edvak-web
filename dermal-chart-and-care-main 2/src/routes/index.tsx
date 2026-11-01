import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  ArrowRight,
  ArrowDown,
  ArrowUp,
  Check,
  ChevronRight,
  ClipboardPenLine,
  CreditCard,
  PackageSearch,
  Network,
  ReceiptText,
  PanelsTopLeft,
  FileClock,
  DatabaseBackup,
  CopyCheck,
  CalendarCheck2,
  Quote,
  Menu,
  X,
  Sparkles,
  CalendarDays,
  Search,
  CheckCheck,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ReadingProgress, useScrollProgress } from "@/components/scroll-story";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import hero from "@/assets/hero.jpg";
import derm from "@/assets/derm-exam.jpg";
import clinic from "@/assets/clinic.jpg";
import olivia from "@/assets/olivia.jpg";
import logo from "@/assets/edvak-logo.png";
import breakClinic from "@/assets/break-clinic.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Edvak — The AI-powered EHR built for dermatology" },
      {
        name: "description",
        content:
          "Replace disconnected systems with one unified, AI-powered dermatology EHR: documentation, POS, inventory and more.",
      },
      { property: "og:title", content: "Edvak — The AI-powered EHR built for dermatology" },
      {
        property: "og:description",
        content:
          "One platform for medical and cosmetic dermatology, with AI across the whole workflow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: ClipboardPenLine,
    short: "Document",
    title: "AI-Powered Clinical Documentation",
    description:
      "Turn patient conversations into structured clinical notes with AI, capture findings directly on body maps and document key dermatology details faster with less manual charting.",
    phrase: "Less charting. More connection.",
  },
  {
    icon: CreditCard,
    short: "Collect",
    title: "Integrated Point of Sale",
    description:
      "Collect insurance copays, deductibles, cosmetic payments, and retail purchases at the front desk without switching to a separate payment system.",
    phrase: "From care to checkout. Seamlessly.",
  },
  {
    icon: PackageSearch,
    short: "Track",
    title: "Inventory Management",
    description:
      "Monitor injectables, fillers, and topicals by lot and expiration, with automatic low stock and reorder alerts.",
    phrase: "Every detail. Accounted for.",
  },
];

function CTAButton({
  light = false,
  children = "Book a demo",
}: {
  light?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <a href="#demo" className={`cta-button ${light ? "cta-light" : ""}`}>
      {children}
      <ArrowRight size={16} aria-hidden="true" />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuRef.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#top" aria-label="Edvak home" className="brand">
          <img src={logo} alt="Edvak" width="146" height="51" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#solutions">Solutions</a>
          <a href="#features">Features</a>
          <a href="#transition">Switching to Edvak</a>
          <a href="#faq">FAQs</a>
        </nav>
        <div className="header-actions">
          <CTAButton />
          <button
            ref={menuRef}
            className="menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {[
            ["Solutions", "solutions"],
            ["Features", "features"],
            ["Switching to Edvak", "transition"],
            ["FAQs", "faq"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
              <ChevronRight size={18} />
            </a>
          ))}
        </nav>
      )}
      <ReadingProgress />
    </header>
  );
}

function WorkflowStory() {
  const ref = useScrollProgress<HTMLElement>();
  return (
    <section id="solutions" ref={ref} className="workflow-story" aria-labelledby="workflow-heading">
      <div className="workflow-sticky">
        <div className="workflow-heading">
          <h2 id="workflow-heading">
            One patient.
            <br />
            <span>One connected workflow.</span>
          </h2>
          <p>
            Bring everything together. Simplify the everyday.
            <br className="desktop-break" /> Rethink what you pay for.
          </p>
        </div>
        <div
          className="workflow-canvas"
          aria-label="Clinical documentation, payments, inventory and practice workflows connected in Edvak"
        >
          <div className="connection-lines" aria-hidden="true">
            <span />
            <span />
          </div>
          {[ClipboardPenLine, CreditCard, PackageSearch, Network].map((Icon, index) => (
            <div
              key={index}
              className={`tool-tile tool-${index}`}
              style={{ "--i": index } as CSSProperties}
            >
              <Icon size={28} strokeWidth={1.4} />
              <span>
                {
                  ["Clinical documentation", "Point of sale", "Inventory", "Practice workflow"][
                    index
                  ]
                }
              </span>
            </div>
          ))}
          <div className="workflow-core">
            <img src={logo} alt="Edvak" />
            <span>All in one place.</span>
          </div>
          <div className="connected-platform" aria-hidden="true">
            <div className="platform-top">
              <img src={logo} alt="" />
              <span>
                <span className="status-dot" /> One connected platform
              </span>
            </div>
            <div className="platform-modules">
              {[
                [ClipboardPenLine, "Document"],
                [CreditCard, "Collect"],
                [PackageSearch, "Track"],
                [Network, "Connect"],
              ].map(([Icon, title]) => {
                const I = Icon as typeof Network;
                return (
                  <div key={String(title)}>
                    <I size={26} strokeWidth={1.4} />
                    <span>{String(title)}</span>
                    <Check size={14} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="workflow-caption">
          <span className="disconnected-label">Less switching between systems.</span>
          <span className="connected-label">More focus on the person in front of you.</span>
        </div>
        <a className="text-link" href="#features">
          Explore the features <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
}

function ProductPreview({ active }: { active: number }) {
  return (
    <div className="product-preview" aria-label={`${features[active]?.title} illustrative preview`}>
      <div className="preview-toolbar">
        <img src={logo} alt="Edvak" />
        <span>
          <span className="status-dot" /> Dermatology
        </span>
        <span className="preview-avatar">JD</span>
      </div>
      <div className="preview-layout">
        <div className="preview-sidebar" aria-hidden="true">
          <span className="sidebar-active">
            <PanelsTopLeft size={18} />
          </span>
          <CalendarDays size={18} />
          <ClipboardPenLine size={18} />
          <CreditCard size={18} />
          <PackageSearch size={18} />
          <div className="sidebar-bottom">
            <ShieldCheck size={18} />
          </div>
        </div>
        <div className="preview-content">
          <div
            className={`preview-panel ${active === 0 ? "panel-active" : ""}`}
            inert={active !== 0}
          >
            <div className="preview-page-title">
              <div>
                <span className="preview-muted">Patient chart</span>
                <h4>Jamie Davis</h4>
              </div>
              <span className="soft-tag">In progress</span>
            </div>
            <div className="patient-tabs">
              <span className="selected">Clinical note</span>
              <span>Body map</span>
              <span>History</span>
            </div>
            <div className="ai-banner">
              <Sparkles size={17} />
              <span>AI-assisted documentation</span>
              <span className="mini-wave" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </span>
            </div>
            <div className="note-content">
              <span className="preview-muted">Visit summary</span>
              <h5>More time for the conversation.</h5>
              <p>
                Capture the visit. Organize the findings.
                <br />
                Keep your focus on the patient.
              </p>
              <div className="note-lines" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <div className="note-footer">
                <FileText size={16} /> Structured clinical note <CheckCheck size={18} />
              </div>
            </div>
          </div>
          <div
            className={`preview-panel ${active === 1 ? "panel-active" : ""}`}
            inert={active !== 1}
          >
            <div className="preview-page-title">
              <div>
                <span className="preview-muted">Point of sale</span>
                <h4>One simple checkout.</h4>
              </div>
              <CreditCard size={22} />
            </div>
            <div className="checkout-patient">
              <span className="preview-avatar">JD</span>
              <div>
                <strong>Jamie Davis</strong>
                <span>Today's visit</span>
              </div>
              <Check size={17} />
            </div>
            <div className="checkout-row">
              <span>Office visit copay</span>
              <span>Included</span>
            </div>
            <div className="checkout-row">
              <span>Cosmetic service</span>
              <span>Included</span>
            </div>
            <div className="checkout-row">
              <span>Retail skincare</span>
              <span>Included</span>
            </div>
            <div className="checkout-summary">
              <span>One visit. One payment.</span>
              <div>
                <CreditCard size={20} />
                <strong>Ready for checkout</strong>
                <Check size={17} />
              </div>
            </div>
          </div>
          <div
            className={`preview-panel ${active === 2 ? "panel-active" : ""}`}
            inert={active !== 2}
          >
            <div className="preview-page-title">
              <div>
                <span className="preview-muted">Inventory</span>
                <h4>A clearer view of stock.</h4>
              </div>
              <PackageSearch size={23} />
            </div>
            <div className="inventory-search">
              <Search size={15} /> Products, lots & expiration dates
            </div>
            <div className="inventory-table">
              <div className="inventory-table-head">
                <span>Product</span>
                <span>Status</span>
              </div>
              {[
                ["Injectables", "In stock"],
                ["Dermal fillers", "In stock"],
                ["Topical care", "Reorder soon"],
              ].map(([name, status], i) => (
                <div key={name}>
                  <span>
                    <span className={`product-swatch swatch-${i}`} />
                    <strong>{name}</strong>
                  </span>
                  <span className={i === 2 ? "stock-low" : "stock-ok"}>{status}</span>
                </div>
              ))}
            </div>
            <div className="inventory-alert">
              <PackageSearch size={18} />
              <span>
                Lot tracking. Expiration alerts.
                <br />
                <strong>Every detail, connected.</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="preview-disclaimer">
        Illustrative interface · Sample patient and product data
      </div>
    </div>
  );
}

function FeatureChapters() {
  const [active, setActive] = useState(0);
  const chaptersRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const chapters = chaptersRef.current?.querySelectorAll<HTMLElement>("[data-chapter]");
    if (!chapters) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting)
            setActive(Number((entry.target as HTMLElement).dataset["chapter"]));
      },
      { rootMargin: "-35% 0px -40% 0px", threshold: 0 },
    );
    chapters.forEach((chapter) => observer.observe(chapter));
    return () => observer.disconnect();
  }, []);
  return (
    <section
      id="features"
      className="feature-section section-shell"
      aria-labelledby="features-heading"
    >
      <ScrollReveal className="feature-intro">
        <h2 id="features-heading">
          Everything your practice runs on.
          <br />
          <span>Beautifully together.</span>
        </h2>
        <p>Everything your dermatology practice runs on, all in one place.</p>
      </ScrollReveal>
      <div className="feature-grid">
        <nav
          className="mobile-feature-controls feature-controls"
          aria-label="Mobile feature chapters"
        >
          {features.map(({ short }, i) => (
            <a
              key={short}
              href={`#feature-${i}`}
              aria-current={active === i ? "step" : undefined}
              className={active === i ? "active" : ""}
              onClick={() => setActive(i)}
            >
              <span className="chapter-dot" />
              {short}
            </a>
          ))}
        </nav>
        <div className="feature-stage">
          <ProductPreview active={active} />
          <nav className="feature-controls" aria-label="Feature chapters">
            {features.map(({ short }, i) => (
              <a
                key={short}
                href={`#feature-${i}`}
                aria-current={active === i ? "step" : undefined}
                className={active === i ? "active" : ""}
                onClick={() => setActive(i)}
              >
                <span className="chapter-dot" />
                {short}
              </a>
            ))}
          </nav>
          <p className="preview-caption">One platform. Every part of your practice.</p>
        </div>
        <div className="feature-chapters" ref={chaptersRef}>
          {features.map(({ icon: Icon, title, description, phrase }, i) => (
            <article
              id={`feature-${i}`}
              key={title}
              data-chapter={i}
              className={`feature-chapter ${active === i ? "chapter-active" : ""}`}
            >
              <div className="mobile-product-preview">
                <ProductPreview active={i} />
              </div>
              <ScrollReveal>
                <Icon className="feature-icon" size={34} strokeWidth={1.4} />
                <h3>{phrase}</h3>
                <h4>{title}</h4>
                <p>{description}</p>
                <a href="#demo" className="text-link">
                  See it in your demo <ArrowRight size={16} />
                </a>
              </ScrollReveal>
            </article>
          ))}
        </div>
      </div>
      <div className="care-photo">
        <img
          src={derm}
          alt="Dermatologist examining skin with a dermatoscope"
          loading="lazy"
          width="1280"
          height="960"
          className="parallax-photo"
        />
        <div>
          <p>Built around your specialty.</p>
          <span>And the people in your care.</span>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div id="top" className="site-frame">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="hero-section section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">
              You pay for four tools
              <br className="desktop-break" /> to manage <span>one patient.</span>
            </h1>
            <p>
              Replace disconnected systems with one unified, AI-powered dermatology EHR that brings
              everything together, simplifies your workflow and costs less than what you're paying
              today.
            </p>
            <div className="hero-actions">
              <CTAButton />
              <a className="text-link" href="#solutions">
                Discover the difference <ArrowDown size={16} />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <img
              className="hero-photo"
              src={hero}
              alt="Nurse reviewing a chart on a tablet with a patient"
              width="1024"
              height="1088"
              fetchPriority="high"
            />
            <div className="hero-image-shade" />
            <div className="hero-visual-copy">
              <span>Made for dermatology.</span>
              <p>
                More connected care.
                <br />A simpler everyday.
              </p>
            </div>
            <div className="hero-glass">
              <span className="hero-glass-icon">
                <Network size={24} strokeWidth={1.5} />
              </span>
              <div>
                <strong>One patient. One platform.</strong>
                <span>Clinical care. Payments. Inventory.</span>
              </div>
              <span className="hero-check">
                <Check size={16} />
              </span>
            </div>
            <a
              className="scroll-cue"
              href="#solutions"
              aria-label="Scroll to explore the connected workflow"
            >
              <ArrowDown size={17} />
            </a>
          </div>
        </section>
        <WorkflowStory />
        <section
          id="problems"
          className="problems-section section-shell"
          aria-labelledby="problems-heading"
        >
          <div className="problems-heading">
            <h2 id="problems-heading">
              Dermatology software has
              <br />
              three chronic problems.
            </h2>
            <p>
              Edvak has the <span>CURE.</span>
            </p>
          </div>
          <ScrollReveal className="problems-cards">
            {[
              {
                icon: ReceiptText,
                tag: "Cost",
                title: "Add-On Fees Keep Piling Up",
                description:
                  "Many EHRs are generic and charge additional fees for features dermatology practices need.",
              },
              {
                icon: PanelsTopLeft,
                tag: "Fragmentation",
                title: "Too Many Tools",
                description:
                  "Most EHR have limited features and require third party tools to meet your practice workflow requirements. Edvak has everything in one platform.",
              },
              {
                icon: FileClock,
                tag: "Shallow AI",
                title: "AI That Stops at Documentation",
                description:
                  "Many EHRs limit AI to documentation. Edvak brings AI across the entire workflow.",
              },
            ].map(({ icon: Icon, tag, title, description }) => (
              <article
                key={tag}
                className="problem-card"
                tabIndex={0}
                aria-labelledby={`problem-${tag.replaceAll(" ", "-").toLowerCase()}`}
                onClick={(event) => event.currentTarget.focus({ preventScroll: true })}
              >
                <div className="problem-label">
                  <Icon size={22} strokeWidth={1.5} />
                  <span>{tag}</span>
                </div>
                <h3 id={`problem-${tag.replaceAll(" ", "-").toLowerCase()}`}>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </ScrollReveal>
        </section>
        <div className="clinic-break">
          <img
            src={breakClinic}
            alt="Modern dermatology clinic interior"
            loading="lazy"
            width="1920"
            height="600"
            className="parallax-photo"
          />
        </div>
        <FeatureChapters />
        <section
          id="transition"
          className="transition-section section-shell"
          aria-labelledby="transition-heading"
        >
          <div className="transition-heading">
            <h2 id="transition-heading">
              A fresh start.
              <br />
              <span>Without starting over.</span>
            </h2>
            <p>Switching to Edvak, one considered step at a time.</p>
          </div>
          <div className="transition-steps">
            {[
              {
                icon: DatabaseBackup,
                title: "We map your existing data.",
                body: "Charts, images, pathology history, and billing records are mapped from your current system before anything moves.",
              },
              {
                icon: CopyCheck,
                title: "Your team runs both, briefly.",
                body: "A short parallel period lets staff get comfortable with Edvak while the old system stays available as a safety net.",
              },
              {
                icon: CalendarCheck2,
                title: "You go live, without a gap.",
                body: "No day where the schedule stops. Patients are seen on Edvak from day one, with full history already in place.",
              },
            ].map(({ icon: Icon, title, body }, i) => (
              <ScrollReveal key={title} className="transition-step">
                <div className="step-line">
                  <span>0{i + 1}</span>
                  <Icon size={25} strokeWidth={1.4} />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </ScrollReveal>
            ))}
          </div>
          <div className="testimonial">
            <div className="testimonial-photo">
              <img src={olivia} alt="Olivia Joseph" loading="lazy" width="816" height="816" />
            </div>
            <div className="testimonial-copy">
              <h3>What Edvak does for a dermatology practice.</h3>
              <Quote size={30} strokeWidth={1.4} aria-hidden="true" />
              <blockquote>
                “Edvak has improved the way we care for patients because we're spending less time on
                paperwork and navigating multiple systems.”
              </blockquote>
              <p>
                <strong>Olivia Joseph</strong>
                <span>Physician, Texas Medical Center</span>
              </p>
            </div>
          </div>
        </section>
        <section id="faq" className="faq-section section-shell" aria-labelledby="faq-heading">
          <div className="faq-intro">
            <h2 id="faq-heading">
              Good questions.
              <br />
              <span>Clear answers.</span>
            </h2>
            <p>Common questions about Edvak EHR.</p>
            <a href="#demo" className="text-link">
              Let's talk about your practice <ArrowRight size={16} />
            </a>
          </div>
          <Accordion type="single" collapsible defaultValue="q0" className="faq-list">
            {[
              [
                "What is a dermatology EHR?",
                "A dermatology EHR is an electronic health record designed to support the clinical and operational workflows of dermatology practices, including documentation, clinical images, pathology workflows, prescriptions, scheduling, billing, and patient engagement.",
              ],
              [
                "How does Edvak use AI for dermatology practices?",
                "Edvak integrates AI across documentation, coding, clinical workflows, document processing, and practice insights, rather than limiting AI to a standalone documentation tool.",
              ],
              [
                "Does Edvak support both medical and cosmetic dermatology in one chart?",
                "Yes. Inventory is tracked by lot and expiration date, with usage deducted automatically as it's documented on a patient, and alerts before stock runs low or expires.",
              ],
              [
                "How do we move from our current EHR to Edvak?",
                "Your charts, images, pathology history, and billing records are mapped before anything moves. Your team runs both systems briefly, then goes live with patient history already in place.",
              ],
            ].map(([q, a], i) => (
              <AccordionItem key={q} value={`q${i}`} className="faq-item">
                <AccordionTrigger className="faq-trigger">{q}</AccordionTrigger>
                <AccordionContent className="faq-answer">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        <section id="demo" className="demo-section section-shell" aria-labelledby="demo-heading">
          <div className="demo-copy">
            <h2 id="demo-heading">
              Ready to run your practice on <span>one platform?</span>
            </h2>
            <p>
              See how Edvak handles medical dermatology, cosmetic services, and everything in
              between, in a walkthrough built around your practice.
            </p>
            <a
              className="cta-button cta-light"
              href="https://www.edvak.com/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a demo <ArrowRight size={16} />
            </a>
          </div>
          <img
            src={clinic}
            alt="Modern dermatology clinic reception"
            loading="lazy"
            width="1600"
            height="912"
          />
        </section>
      </main>
      <footer className="site-footer section-shell">
        <a href="#top" aria-label="Edvak home">
          <img src={logo} alt="Edvak" width="125" height="44" />
        </a>
        <span>The AI-powered EHR built for dermatology.</span>
        <a href="#top" className="back-top">
          Back to top <ArrowUp size={15} />
        </a>
      </footer>
    </div>
  );
}
