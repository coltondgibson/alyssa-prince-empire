import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProductModal from "@/components/ProductModal";
import alyssaPhoto from "@/assets/alyssa-smiling2.jpg";

const SHOP_URL = "https://tranont.link/QUGk7sp";

const Greens = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [optFirstName, setOptFirstName] = useState("");
  const [optLastName, setOptLastName] = useState("");
  const [optEmail, setOptEmail] = useState("");
  const [optPhone, setOptPhone] = useState("");
  const [optSubmitted, setOptSubmitted] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("animate-fade-up");
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleOptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOptSubmitted(true);
  };

  const sectionClass = "max-w-2xl mx-auto px-6 md:px-10";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-5 px-6 md:px-10 flex items-center gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-body text-sm tracking-wide text-foreground/60 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Link>
        <div className="flex-1 text-center pr-16">
          <span className="font-heading text-lg md:text-xl tracking-wide text-foreground">
            Alyssa Prince
          </span>
        </div>
      </header>

      <main className="pb-20">
        {/* 1 — Headline + Subheadline */}
        <section ref={heroRef} className={`${sectionClass} opacity-0 pt-10 md:pt-16 pb-12 md:pb-16 text-center`}>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
            The One Thing I Drink Every Single Morning — No Matter What.
          </h1>
          <p className="font-body text-base md:text-lg text-foreground/65 leading-relaxed max-w-lg mx-auto">
            How a simple daily habit gave me back my energy, cleared my brain fog, and became the foundation everything else is built on.
          </p>
        </section>

        {/* 3 — Hook */}
        <section className={`${sectionClass} pb-14 md:pb-20`}>
          <div className="max-w-lg mx-auto text-center space-y-5">
            <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
              I've built businesses, closed real estate deals, raised kids, and earned 7&nbsp;figures.
            </p>
            <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
              And I'll be honest with you — none of it would be possible without showing up every single day feeling like myself.
            </p>
            <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
              For years I was running on caffeine and willpower.
            </p>
            <p className="font-heading text-xl md:text-2xl text-foreground italic">
              Until I found something that actually worked.
            </p>
          </div>
        </section>

        {/* Alyssa Photo */}
        <section className={`${sectionClass} pb-14 md:pb-20`}>
          <div className="max-w-md mx-auto">
            <img
              src={alyssaPhoto}
              alt="Alyssa Prince"
              className="w-full rounded-sm shadow-lg"
            />
          </div>
        </section>

        {/* 4 — Her Story */}
        <section className={`${sectionClass} pb-14 md:pb-20`}>
          <div className="max-w-lg mx-auto space-y-5">
            <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
              I'm not someone who struggles with weight. I never have. But energy? Focus? Showing up as my best self every single day? That's a different story.
            </p>
            <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
              Running multiple businesses, managing a real estate portfolio, building a team, being present for my family — it takes everything. I needed something that worked as hard as I&nbsp;do.
            </p>
            <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
              I tried everything. Vitamins. Powders. Routines. None of it moved the needle the way I needed.
            </p>
            <p className="font-heading text-xl md:text-2xl text-foreground italic text-center">
              Then I found Greens.
            </p>
            <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
              35+ fruits and vegetables. Prebiotics. Probiotics. Digestive enzymes. All in one scoop. One scoop. Thirty seconds. Every single morning.
            </p>
            <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
              Within weeks I noticed:
            </p>
            <ul className="space-y-2.5 pl-1">
              {[
                "More consistent energy throughout the day",
                "Less bloating and digestive discomfort",
                "Mental clarity I hadn't felt in years",
                "A foundation that made everything else work better",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-0.5 text-lg leading-none">→</span>
                  <span className="font-body text-sm md:text-base text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-heading text-lg md:text-xl text-foreground italic text-center pt-2">
              I've never missed a day since.
            </p>
          </div>
        </section>

        {/* 5 — What's In It */}
        <section className={`${sectionClass} pb-14 md:pb-20`}>
          <h2 className="font-heading text-2xl md:text-3xl text-foreground text-center mb-8 md:mb-10">
            What's In It
          </h2>
          <p className="font-body text-sm md:text-base text-foreground/70 text-center mb-8 max-w-md mx-auto">
            This isn't just a greens powder.
          </p>
          <div className="max-w-lg mx-auto space-y-6">
            {[
              {
                title: "35+ Fruits & Vegetables",
                desc: "More nutrition in one scoop than most people get all day",
              },
              {
                title: "Prebiotics & Probiotics",
                desc: "Your gut health affects everything — energy, mood, immunity, digestion",
              },
              {
                title: "Digestive Enzymes",
                desc: "Actually absorb the nutrients you're putting in your body",
              },
            ].map((item, i) => (
              <div key={i}>
                <p className="font-heading text-lg md:text-xl text-foreground mb-1">{item.title}</p>
                <p className="font-body text-sm text-foreground/65 leading-relaxed">{item.desc}</p>
              </div>
            ))}
            <p className="font-body text-sm md:text-base text-foreground/80 italic pt-2">
              No artificial flavors. No fillers. No compromise.
            </p>
          </div>
        </section>

        {/* 6 — What To Expect */}
        <section className={`${sectionClass} pb-14 md:pb-20`}>
          <h2 className="font-heading text-2xl md:text-3xl text-foreground text-center mb-8 md:mb-10">
            What You Can Expect
          </h2>
          <div className="max-w-lg mx-auto space-y-8">
            {[
              {
                label: "Week 1",
                items: ["Better digestion", "Less bloating", "More consistent energy"],
              },
              {
                label: "Week 2–3",
                items: ["Mental clarity improves", "Morning routine feels easier", "You start to notice the difference"],
              },
              {
                label: "Month 1+",
                items: ["This becomes non-negotiable", "You feel it on the days you skip", "Everything else works better"],
              },
            ].map((block, i) => (
              <div key={i}>
                <p className="font-heading text-lg md:text-xl text-foreground mb-3">{block.label}</p>
                <ul className="space-y-2">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-primary mt-0.5 text-lg leading-none">→</span>
                      <span className="font-body text-sm md:text-base text-foreground/75">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 7 — Testimonials */}
        <section className={`${sectionClass} pb-14 md:pb-20`}>
          <div className="max-w-lg mx-auto space-y-8">
            {[
              "I was skeptical at first. One scoop of greens every morning sounded too simple. But within two weeks I noticed I wasn't reaching for coffee at 2pm anymore. This is a staple now.",
              "I've tried every greens powder out there. This is the only one I've actually stuck with. The difference is real.",
              "Alyssa recommended this to me and I trusted her. Best decision I made this year.",
            ].map((quote, i) => (
              <blockquote key={i} className="border-l-2 border-primary/40 pl-5 py-2">
                <p className="font-body text-sm md:text-base text-foreground/75 italic leading-relaxed mb-2">
                  "{quote}"
                </p>
                <cite className="font-body text-xs text-foreground/50 not-italic tracking-wide uppercase">
                  — Community Member
                </cite>
              </blockquote>
            ))}
          </div>
        </section>

        {/* 8 — Primary Shop Button */}
        <section className={`${sectionClass} pb-14 md:pb-20 text-center`}>
          <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2">
            The Greens — Daily Health Foundation
          </h3>
          <p className="font-body text-sm text-foreground/60 mb-6 max-w-sm mx-auto leading-relaxed">
            One scoop every morning. 35+ fruits and vegetables. Prebiotics. Probiotics. Digestive enzymes. The easiest healthy habit you'll ever build.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="font-body text-sm tracking-[0.12em] uppercase px-10 py-4 rounded-sm transition-all duration-300 bg-foreground text-background shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Shop Now →
          </button>
        </section>

        {/* 9 — Divider + Opt-in */}
        <section className={`${sectionClass} pb-14 md:pb-20`}>
          <div className="max-w-md mx-auto">
            <div className="border-t border-foreground/10 pt-10 text-center">
              <p className="font-heading text-lg md:text-xl text-foreground mb-1">Not ready to buy yet?</p>
              <p className="font-body text-sm text-foreground/60 mb-8">
                Let Alyssa personally follow up with you.
              </p>

              {optSubmitted ? (
                <div className="py-8 text-center">
                  <p className="font-script text-2xl md:text-3xl text-foreground mb-3">Perfect! 💌</p>
                  <p className="font-body text-sm text-foreground/70">
                    Alyssa will be in touch with you personally. No spam ever.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleOptSubmit} className="space-y-3.5">
                  <input
                    type="text"
                    required
                    placeholder="First Name"
                    value={optFirstName}
                    onChange={(e) => setOptFirstName(e.target.value)}
                    className="w-full px-5 py-3.5 bg-muted text-foreground font-body text-sm rounded-sm outline-none placeholder:text-muted-foreground"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Last Name"
                    value={optLastName}
                    onChange={(e) => setOptLastName(e.target.value)}
                    className="w-full px-5 py-3.5 bg-muted text-foreground font-body text-sm rounded-sm outline-none placeholder:text-muted-foreground"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={optEmail}
                    onChange={(e) => setOptEmail(e.target.value)}
                    className="w-full px-5 py-3.5 bg-muted text-foreground font-body text-sm rounded-sm outline-none placeholder:text-muted-foreground"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone"
                    value={optPhone}
                    onChange={(e) => setOptPhone(e.target.value)}
                    className="w-full px-5 py-3.5 bg-muted text-foreground font-body text-sm rounded-sm outline-none placeholder:text-muted-foreground"
                  />
                  <button
                    type="submit"
                    className="w-full font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm transition-all duration-300 bg-foreground text-background shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Yes, Follow Up With Me →
                  </button>
                  <p className="text-center font-body text-xs text-foreground/45 mt-3">
                    You'll hear from Alyssa personally. No spam ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* 11 — FAQ */}
        <section className={`${sectionClass} pb-14 md:pb-20`}>
          <h2 className="font-heading text-2xl md:text-3xl text-foreground text-center mb-8">
            FAQ
          </h2>
          <div className="max-w-lg mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Is this just for women?", a: "No — but women love it most." },
                { q: "How does it taste?", a: "Clean and light. Not like drinking a lawn." },
                { q: "When do I take it?", a: "Morning. Every morning. That's it." },
                { q: "How soon will I notice a difference?", a: "Most people notice within 1–2 weeks." },
                { q: "Is there a guarantee?", a: "Yes — 30 day money back guarantee through Tranont." },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-foreground/10">
                  <AccordionTrigger className="font-body text-sm md:text-base text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-sm text-foreground/70">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 12 — Closing */}
        <section className={`${sectionClass} pb-16 md:pb-24`}>
          <div className="max-w-lg mx-auto text-center space-y-5">
            <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
              I'm not going to tell you this will change your life.
            </p>
            <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
              I'm going to tell you it changed mine.
            </p>
            <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
              And I wouldn't share something with my community that I don't personally use every single day.
            </p>
            <p className="font-heading text-xl md:text-2xl text-foreground italic">
              This is my non-negotiable. Maybe it becomes yours too.
            </p>
            <p className="font-script text-lg text-foreground/70">— Alyssa</p>
            <div className="pt-6">
              <button
                onClick={() => setModalOpen(true)}
                className="font-body text-sm tracking-[0.12em] uppercase px-10 py-4 rounded-sm transition-all duration-300 bg-foreground text-background shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Shop Now →
              </button>
            </div>
          </div>
        </section>
      </main>

      <ProductModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        shopUrl={SHOP_URL}
      />
    </div>
  );
};

export default Greens;
