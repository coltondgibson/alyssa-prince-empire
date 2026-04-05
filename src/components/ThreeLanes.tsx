import { useEffect, useRef } from "react";
import businessPhoto from "@/assets/alyssa-business.jpg";
import tranontPhoto from "@/assets/alyssa-tranont.jpg";
import nashvillePhoto from "@/assets/alyssa-nashville.jpg";
import kitchenPhoto from "@/assets/alyssa-kitchen.png";
import teamCouchPhoto from "@/assets/alyssa-team-couch.png";

const useFadeIn = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("animate-fade-up"); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const ThreeLanes = () => {
  const ref1 = useFadeIn();
  const ref2 = useFadeIn();
  const ref3 = useFadeIn();

  return (
    <section id="wellness" className="bg-card">
      {/* Lane 1 — Wellness: photo left, text right */}
      <div ref={ref1} className="opacity-0 flex flex-col md:flex-row w-full" style={{ minHeight: 480 }}>
        <div className="md:w-1/2 h-64 md:h-auto">
          <img src={kitchenPhoto} alt="Alyssa in the kitchen" className="w-full h-full object-cover object-[center_22%] md:object-center" loading="lazy" />
        </div>
        <div className="md:w-1/2 bg-background flex items-center px-8 lg:px-16 py-16">
          <div className="max-w-lg">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Wellness</p>
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-foreground mb-6">
              Feel better from the inside out.
            </h3>
            <p className="font-body text-base md:text-lg leading-relaxed text-foreground mb-8">
              Products backed by science and real results — that I use every single day. From energy to metabolism to gut health, I've found what works and I want to share it with you.
            </p>
            <a href="#connect" className="inline-block font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm transition-all duration-300 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5">
              See What I Use
            </a>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="bg-background px-6 lg:px-10 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Daily Health System",
              description: "My daily non-negotiable. Activate + Transform — designed to support energy, metabolism, and the way your body processes what you eat. This is where I start everyone.",
            },
            {
              name: "Glow-M",
              description: "Marine collagen that works from the inside out. Skin, hair, nails — this one surprised me most. I noticed a difference within weeks.",
            },
            {
              name: "For Her",
              description: "Built specifically for women navigating hormonal changes. Energy, mood, balance — this one is for the women who feel like something shifted and want it back.",
            },
          ].map((product) => (
            <div key={product.name} className="bg-card p-8 rounded-sm text-center">
              <h4 className="font-heading text-2xl md:text-3xl text-foreground mb-4">{product.name}</h4>
              <p className="font-body text-base leading-relaxed text-foreground/75 mb-6">{product.description}</p>
              <a href="#quiz" className="inline-block font-body text-sm tracking-[0.12em] text-primary hover:text-foreground transition-colors duration-300">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Lane 2 — Business: text left, couch photo right */}
      <div ref={ref2} className="opacity-0 flex flex-col md:flex-row-reverse w-full" style={{ minHeight: 480 }}>
        <div className="md:w-1/2 h-64 md:h-auto">
          <img src={businessPhoto} alt="Alyssa working on her business" className="w-full h-full object-cover object-[center_30%] md:object-[center_35%]" loading="lazy" />
        </div>
        <div className="md:w-1/2 bg-card flex items-center px-8 lg:px-16 py-16">
          <div className="max-w-lg">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Business</p>
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-foreground mb-6">
              Ready to build something real?
            </h3>
            <p className="font-body text-base md:text-lg leading-relaxed text-foreground mb-8">
              I've been in this industry for 15 years. I know what a great opportunity looks like — and this is it. Products you believe in, a team that supports you, and income that grows with you.
            </p>
            <a href="#connect" className="inline-block font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm transition-all duration-300 bg-gradient-to-b from-foreground to-foreground/85 text-background shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Learn About the Opportunity
            </a>
          </div>
        </div>
      </div>

      {/* Business Photo Grid — Tranont & Nashville */}
      <div className="bg-card px-6 lg:px-10 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-sm">
            <img src={tranontPhoto} alt="Alyssa with Tranont leadership — Our mission is to impact 1 billion lives" className="w-full h-80 md:h-96 object-cover" loading="lazy" />
            <p className="font-body text-sm text-muted-foreground mt-4 text-center italic">Why she chose Tranont — "Our mission is to impact 1 billion lives"</p>
          </div>
          <div className="overflow-hidden rounded-sm">
            <img src={nashvillePhoto} alt="Alyssa at 7 Star Director recognition in Nashville" className="w-full h-96 md:h-[28rem] object-cover object-top" loading="lazy" />
            <p className="font-body text-sm text-muted-foreground mt-4 text-center italic">7 Star Director — Nashville recognition</p>
          </div>
        </div>
      </div>

      {/* Lane 3 — Real Estate: no photo, blush pink bg, centered */}
      <div ref={ref3} className="opacity-0 w-full bg-primary flex items-center justify-center px-8 py-20" style={{ minHeight: 380 }}>
        <div className="max-w-xl text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-4">Real Estate</p>
          <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-primary-foreground mb-6">
            Let's find your home.
          </h3>
          <p className="font-body text-base md:text-lg leading-relaxed text-primary-foreground mb-8">
            Licensed realtor serving Florida. I bring the same energy to real estate that I bring to everything — all in, every time.
          </p>
            <a href="#connect" className="inline-block font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm transition-all duration-300 bg-gradient-to-b from-foreground to-foreground/85 text-background shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Let's Talk Real Estate
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThreeLanes;
