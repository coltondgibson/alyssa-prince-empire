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
import alyssaPhoto from "@/assets/alyssa-greens-kitchen.png";
import greensMixing from "@/assets/greens-mixing.png";
import greensProduct from "@/assets/greens-product.png";

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

  const ShopButton = ({ className = "" }: { className?: string }) => (
    <div className={`text-center ${className}`}>
      <button
        onClick={() => setModalOpen(true)}
        className="w-full sm:w-auto font-body text-base md:text-lg tracking-[0.14em] uppercase px-16 py-5 rounded-sm transition-all duration-300 bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:-translate-y-1"
      >
        Shop Now →
      </button>
      <p className="font-body text-xs tracking-wide text-foreground/40 mt-3 uppercase">
        30 Day Money Back Guarantee
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky top bar */}
      <div className="sticky top-0 z-50 bg-primary text-primary-foreground py-2.5 px-4 text-center">
        <p className="font-body text-xs md:text-sm tracking-wide">
          Free shipping on your first order · 30 Day Money Back Guarantee · Ships within 24 hours
        </p>
      </div>

      {/* Header */}
      <header className="bg-foreground py-4 px-6 md:px-10 flex items-center gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-body text-sm tracking-wide text-background/60 hover:text-background transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Link>
        <div className="flex-1 text-center pr-16">
          <span className="font-heading text-lg md:text-xl tracking-wide text-background">
            Alyssa Prince
          </span>
        </div>
      </header>

      <main>
        {/* 1 — Dark Hero: Headline + Product image + Shop button */}
        <section
          ref={heroRef}
          className="opacity-0 bg-foreground py-12 md:py-16 lg:py-20 px-6 md:px-10"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-background leading-[1.1] mb-4 md:mb-6">
                The One Thing I Drink Every Single Morning — No Matter What.
              </h1>
              <p className="font-body text-sm md:text-base lg:text-lg text-background/60 leading-relaxed mb-6 md:mb-8 max-w-lg">
                How a simple daily habit gave me back my energy, cleared my brain fog, and became the foundation everything else is built on.
              </p>
              <ShopButton />
              <button
                onClick={() => document.getElementById("opt-in-form")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto font-body text-sm tracking-[0.12em] uppercase px-12 py-4 rounded-sm transition-all duration-300 border border-background/30 text-background/80 hover:bg-background/10 mt-3"
              >
                Not Ready Yet — Follow Up With Me →
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src={greensProduct}
                alt="Tranont Greens"
                className="w-full max-w-sm md:max-w-md drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Hook */}
        <section className="bg-background py-10 md:py-14 px-6 md:px-10">
          <div className="max-w-xl mx-auto text-center space-y-4">
            <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
              I've built businesses, closed real estate deals, raised kids, and earned 7&nbsp;figures.
            </p>
            <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
              And I'll be honest with you — none of it would be possible without showing up every single day feeling like myself.
            </p>
            <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
              For years I was running on caffeine and willpower.
            </p>
            <p className="font-heading text-xl md:text-2xl text-foreground italic pt-1">
              Until I helped build something that actually worked.
            </p>
          </div>
        </section>

        {/* Photo + Story side by side */}
        <section className="bg-foreground py-10 md:py-14 px-6 md:px-10">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <img
                src={alyssaPhoto}
                alt="Alyssa Prince with Greens"
                className="w-full rounded-sm shadow-xl"
              />
            </div>
            <div className="space-y-4">
              <p className="font-heading text-xl md:text-2xl text-background italic">
                I didn't just find this product. I helped create it.
              </p>
              <p className="font-body text-sm md:text-base text-background/80 leading-relaxed">
                My partners and I spent over two years perfecting this formula before we ever let anyone try it. We hit dead ends. We almost quit. We kept going because we knew what it could do.
              </p>
              <p className="font-body text-sm md:text-base text-background/80 leading-relaxed">
                We tested it. We lived it. We refined it until it was something we were genuinely proud of.
              </p>
              <p className="font-body text-sm md:text-base text-background/80 leading-relaxed">
                When we finally found the right home for it at Tranont — and watched it start changing people's lives — that's when I knew it was real.
              </p>
              <p className="font-body text-sm md:text-base text-background/80 leading-relaxed">
                This isn't just my daily non-negotiable. It's something I helped build from the ground up.
              </p>
              <p className="font-heading text-lg md:text-xl text-background italic pt-1">
                And I drink it every single morning without exception.
              </p>
            </div>
          </div>
        </section>

        {/* What's In It — 2x2 cards */}
        <section className="bg-background py-10 md:py-14 px-6 md:px-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground text-center mb-3">
              What's In It
            </h2>
            <p className="font-body text-sm text-foreground/60 text-center mb-8">
              This isn't just a greens powder.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <Leaf className="w-6 h-6 text-primary" />,
                  title: "35+ Fruits & Vegetables",
                  desc: "More nutrition in one scoop than most people get all day",
                },
                {
                  icon: <Heart className="w-6 h-6 text-primary" />,
                  title: "Prebiotics & Probiotics",
                  desc: "Your gut health affects everything — energy, mood, immunity, digestion",
                },
                {
                  icon: <Sparkles className="w-6 h-6 text-primary" />,
                  title: "Digestive Enzymes",
                  desc: "Actually absorb the nutrients you're putting in your body",
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-primary" />,
                  title: "Clean Formula",
                  desc: "No artificial flavors. No fillers. No compromise.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-secondary rounded-sm p-5 md:p-6 text-center space-y-2"
                >
                  <div className="flex justify-center">{card.icon}</div>
                  <p className="font-heading text-lg text-foreground">{card.title}</p>
                  <p className="font-body text-sm text-foreground/60 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What To Expect — 3 horizontal cards */}
        <section className="bg-foreground py-10 md:py-14 px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl text-background text-center mb-8">
              What You Can Expect
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
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
                  className="bg-background/10 rounded-sm p-5 md:p-6 space-y-3"
                >
                  <p className="font-heading text-xl text-background">{block.label}</p>
                  <ul className="space-y-2">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5 leading-none">→</span>
                        <span className="font-body text-sm text-background/75">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lifestyle photo */}
        <section className="bg-background py-0">
          <img
            src={greensMixing}
            alt="Mixing Tranont Greens"
            className="w-full max-h-[400px] object-cover"
          />
        </section>

        {/* Testimonials — pink background */}
        <section className="bg-primary/10 py-10 md:py-14 px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "I was skeptical at first. One scoop of greens every morning sounded too simple. But within two weeks I noticed I wasn't reaching for coffee at 2pm anymore. This is a staple now.",
                "I've tried every greens powder out there. This is the only one I've actually stuck with. The difference is real.",
                "Alyssa recommended this to me and I trusted her. Best decision I made this year.",
              ].map((quote, i) => (
                <div
                  key={i}
                  className="bg-background rounded-sm p-5 md:p-6 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <span className="font-heading text-4xl text-primary/40 leading-none">"</span>
                    <p className="font-body text-sm text-foreground/75 italic leading-relaxed -mt-3 mb-3">
                      {quote}
                    </p>
                  </div>
                  <cite className="font-body text-xs text-foreground/45 not-italic tracking-wide uppercase">
                    — Community Member
                  </cite>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Primary Shop Button */}
        <section className="bg-foreground py-10 md:py-14 px-6 md:px-10 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="font-body text-sm text-background/50 mb-6 max-w-md mx-auto leading-relaxed">
              One scoop every morning. 35+ fruits and vegetables. Prebiotics. Probiotics. Digestive enzymes. The easiest healthy habit you'll ever build.
            </p>
            <ShopButton />
          </div>
        </section>

        {/* Opt-in */}
        <section className="bg-background py-10 md:py-14 px-6 md:px-10">
          <div className="max-w-md mx-auto text-center">
            <p className="font-heading text-xl md:text-2xl text-foreground mb-1">Not ready to buy yet?</p>
            <p className="font-body text-sm text-foreground/55 mb-6">
              Let Alyssa personally follow up with you.
            </p>

            {optSubmitted ? (
              <div className="py-6">
                <p className="font-script text-2xl md:text-3xl text-foreground mb-3">Perfect! 💌</p>
                <p className="font-body text-sm text-foreground/70">
                  Alyssa will be in touch with you personally. No spam ever.
                </p>
              </div>
            ) : (
              <form onSubmit={handleOptSubmit} className="space-y-3 text-left">
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
                <p className="text-center font-body text-xs text-foreground/45 mt-2">
                  You'll hear from Alyssa personally. No spam ever.
                </p>
              </form>
            )}
          </div>
        </section>

        {/* FAQ — light gray bg */}
        <section className="bg-muted py-10 md:py-14 px-6 md:px-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground text-center mb-8">
              FAQ
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                
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

        {/* Closing */}
        <section className="bg-foreground py-12 md:py-16 px-6 md:px-10">
          <div className="max-w-xl mx-auto text-center space-y-4">
            <p className="font-body text-sm md:text-base text-background/80 leading-relaxed">
              Most people share products they love.
            </p>
            <p className="font-body text-sm md:text-base text-background/80 leading-relaxed">
              I'm sharing something I helped build.
            </p>
            <p className="font-body text-sm md:text-base text-background/80 leading-relaxed">
              Two years of work. Countless formulations. One product I genuinely believe in with everything I have.
            </p>
            <p className="font-heading text-xl md:text-2xl text-background italic pt-1">
              This is my non-negotiable. Every single morning. No exceptions.
            </p>
            <p className="font-heading text-lg md:text-xl text-background italic">
              Maybe it becomes yours too.
            </p>
            <p className="font-script text-lg text-background/70">— Alyssa</p>
            <div className="pt-4">
              <ShopButton />
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
