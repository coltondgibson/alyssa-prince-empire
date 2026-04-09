import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Leaf, Heart, Sparkles, ShieldCheck } from "lucide-react";
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

      <main>
        {/* 1 — Hero: Headline + Subheadline */}
        <section
          ref={heroRef}
          className="opacity-0 bg-secondary py-20 md:py-28 lg:py-32 px-6 md:px-10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.1] mb-6 md:mb-8">
              The One Thing I Drink Every Single Morning — No Matter What.
            </h1>
            <p className="font-body text-base md:text-lg lg:text-xl text-foreground/60 leading-relaxed max-w-xl mx-auto">
              How a simple daily habit gave me back my energy, cleared my brain fog, and became the foundation everything else is built on.
            </p>
          </div>
        </section>

        {/* 3 — Hook */}
        <section className="bg-background py-16 md:py-24 px-6 md:px-10">
          <div className="max-w-xl mx-auto text-center space-y-5">
            <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
              I've built businesses, closed real estate deals, raised kids, and earned 7&nbsp;figures.
            </p>
            <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
              And I'll be honest with you — none of it would be possible without showing up every single day feeling like myself.
            </p>
            <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
              For years I was running on caffeine and willpower.
            </p>
            <p className="font-heading text-2xl md:text-3xl text-foreground italic pt-2">
              Until I found something that actually worked.
            </p>
          </div>
        </section>

        {/* 4 — Photo + Story side by side */}
        <section className="bg-secondary py-16 md:py-24 px-6 md:px-10">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Photo */}
            <div>
              <img
                src={alyssaPhoto}
                alt="Alyssa Prince"
                className="w-full rounded-sm shadow-xl"
              />
            </div>
            {/* Story */}
            <div className="space-y-5">
              <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
                I'm not someone who struggles with weight. I never have. But energy? Focus? Showing up as my best self every single day? That's a different story.
              </p>
              <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
                Running multiple businesses, managing a real estate portfolio, building a team, being present for my family — it takes everything. I needed something that worked as hard as I&nbsp;do.
              </p>
              <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
                I tried everything. Vitamins. Powders. Routines. None of it moved the needle the way I needed.
              </p>
              <p className="font-heading text-xl md:text-2xl text-foreground italic">
                Then I found Greens.
              </p>
              <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
                35+ fruits and vegetables. Prebiotics. Probiotics. Digestive enzymes. All in one scoop. One scoop. Thirty seconds. Every single morning.
              </p>
              <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
                Within weeks I noticed:
              </p>
              <ul className="space-y-2.5">
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
              <p className="font-heading text-lg md:text-xl text-foreground italic pt-2">
                I've never missed a day since.
              </p>
            </div>
          </div>
        </section>

        {/* 5 — What's In It — 2x2 cards */}
        <section className="bg-background py-16 md:py-24 px-6 md:px-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-4">
              What's In It
            </h2>
            <p className="font-body text-sm md:text-base text-foreground/60 text-center mb-10 md:mb-14">
              This isn't just a greens powder.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Leaf className="w-7 h-7 text-primary" />,
                  title: "35+ Fruits & Vegetables",
                  desc: "More nutrition in one scoop than most people get all day",
                },
                {
                  icon: <Heart className="w-7 h-7 text-primary" />,
                  title: "Prebiotics & Probiotics",
                  desc: "Your gut health affects everything — energy, mood, immunity, digestion",
                },
                {
                  icon: <Sparkles className="w-7 h-7 text-primary" />,
                  title: "Digestive Enzymes",
                  desc: "Actually absorb the nutrients you're putting in your body",
                },
                {
                  icon: <ShieldCheck className="w-7 h-7 text-primary" />,
                  title: "Clean Formula",
                  desc: "No artificial flavors. No fillers. No compromise.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-secondary rounded-sm p-6 md:p-8 text-center space-y-3"
                >
                  <div className="flex justify-center">{card.icon}</div>
                  <p className="font-heading text-lg md:text-xl text-foreground">{card.title}</p>
                  <p className="font-body text-sm text-foreground/60 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 — What To Expect — 3 horizontal cards */}
        <section className="bg-secondary py-16 md:py-24 px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-10 md:mb-14">
              What You Can Expect
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
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
                <div
                  key={i}
                  className="bg-background rounded-sm p-6 md:p-8 space-y-4"
                >
                  <p className="font-heading text-xl md:text-2xl text-foreground">{block.label}</p>
                  <ul className="space-y-2.5">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-primary mt-0.5 leading-none">→</span>
                        <span className="font-body text-sm text-foreground/75">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7 — Testimonials — 3 cards in a row */}
        <section className="bg-background py-16 md:py-24 px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "I was skeptical at first. One scoop of greens every morning sounded too simple. But within two weeks I noticed I wasn't reaching for coffee at 2pm anymore. This is a staple now.",
                "I've tried every greens powder out there. This is the only one I've actually stuck with. The difference is real.",
                "Alyssa recommended this to me and I trusted her. Best decision I made this year.",
              ].map((quote, i) => (
                <div
                  key={i}
                  className="bg-secondary rounded-sm p-6 md:p-8 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-heading text-5xl text-primary/30 leading-none">"</span>
                    <p className="font-body text-sm text-foreground/75 italic leading-relaxed -mt-4 mb-4">
                      {quote}
                    </p>
                  </div>
                  <cite className="font-body text-xs text-foreground/50 not-italic tracking-wide uppercase">
                    — Community Member
                  </cite>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8 — Primary Shop Button */}
        <section className="bg-secondary py-16 md:py-24 px-6 md:px-10 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="font-heading text-3xl md:text-4xl text-foreground mb-3">Greens</p>
            <p className="font-body text-sm md:text-base text-foreground/55 mb-8 max-w-md mx-auto leading-relaxed">
              One scoop every morning. 35+ fruits and vegetables. Prebiotics. Probiotics. Digestive enzymes. The easiest healthy habit you'll ever build.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="font-body text-base md:text-lg tracking-[0.14em] uppercase px-14 py-5 rounded-sm transition-all duration-300 bg-foreground text-background shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Shop Now →
            </button>
          </div>
        </section>

        {/* 9 — Opt-in */}
        <section className="bg-background py-16 md:py-24 px-6 md:px-10">
          <div className="max-w-md mx-auto text-center">
            <p className="font-heading text-xl md:text-2xl text-foreground mb-1">Not ready to buy yet?</p>
            <p className="font-body text-sm text-foreground/55 mb-8">
              Let Alyssa personally follow up with you.
            </p>

            {optSubmitted ? (
              <div className="py-8">
                <p className="font-script text-2xl md:text-3xl text-foreground mb-3">Perfect! 💌</p>
                <p className="font-body text-sm text-foreground/70">
                  Alyssa will be in touch with you personally. No spam ever.
                </p>
              </div>
            ) : (
              <form onSubmit={handleOptSubmit} className="space-y-3.5 text-left">
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
                  className="w-full font-body text-sm tracking-[0.12em] uppercase px-8 py-4 rounded-sm transition-all duration-300 bg-foreground text-background shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Yes, Follow Up With Me →
                </button>
                <p className="text-center font-body text-xs text-foreground/45 mt-3">
                  You'll hear from Alyssa personally. No spam ever.
                </p>
              </form>
            )}
          </div>
        </section>

        {/* 11 — FAQ */}
        <section className="bg-secondary py-16 md:py-24 px-6 md:px-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-10">
              FAQ
            </h2>
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
        <section className="bg-background py-16 md:py-24 px-6 md:px-10">
          <div className="max-w-xl mx-auto text-center space-y-5">
            <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
              I'm not going to tell you this will change your life.
            </p>
            <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
              I'm going to tell you it changed mine.
            </p>
            <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
              And I wouldn't share something with my community that I don't personally use every single day.
            </p>
            <p className="font-heading text-2xl md:text-3xl text-foreground italic pt-2">
              This is my non-negotiable. Maybe it becomes yours too.
            </p>
            <p className="font-script text-lg text-foreground/70">— Alyssa</p>
            <div className="pt-8">
              <button
                onClick={() => setModalOpen(true)}
                className="font-body text-base md:text-lg tracking-[0.14em] uppercase px-14 py-5 rounded-sm transition-all duration-300 bg-foreground text-background shadow-lg hover:shadow-xl hover:-translate-y-1"
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
