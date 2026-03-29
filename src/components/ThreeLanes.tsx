import { useEffect, useRef } from "react";
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
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Wellness</p>
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-foreground mb-6">
              Feel better from the inside out.
            </h3>
            <p className="font-body text-[15px] leading-relaxed text-foreground mb-8">
              Products backed by science and real results — that I use every single day. From energy to metabolism to gut health, I've found what works and I want to share it with you.
            </p>
            <a href="#" className="inline-block bg-primary text-primary-foreground font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm hover:opacity-90 transition-opacity duration-300">
              See What I Use
            </a>
          </div>
        </div>
      </div>

      {/* Lane 2 — Business: text left, couch photo right */}
      <div ref={ref2} className="opacity-0 flex flex-col md:flex-row-reverse w-full" style={{ minHeight: 480 }}>
        <div className="md:w-1/2 h-64 md:h-auto">
          <img src={teamCouchPhoto} alt="Alyssa and partners on couch" className="w-full h-full object-cover object-[center_30%] md:object-[center_35%]" loading="lazy" />
        </div>
        <div className="md:w-1/2 bg-card flex items-center px-8 lg:px-16 py-16">
          <div className="max-w-lg">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Business</p>
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-foreground mb-6">
              Ready to build something real?
            </h3>
            <p className="font-body text-[15px] leading-relaxed text-foreground mb-8">
              I've been in this industry for 15 years. I know what a great opportunity looks like — and this is it. Products you believe in, a team that supports you, and income that grows with you.
            </p>
            <a href="#" className="inline-block bg-brand-black text-white font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm hover:opacity-90 transition-opacity duration-300">
              Learn About the Opportunity
            </a>
          </div>
        </div>
      </div>

      {/* Lane 3 — Real Estate: no photo, blush pink bg, centered */}
      <div ref={ref3} className="opacity-0 w-full bg-primary flex items-center justify-center px-8 py-20" style={{ minHeight: 380 }}>
        <div className="max-w-xl text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/70 mb-4">Real Estate</p>
          <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-primary-foreground mb-6">
            Let's find your home.
          </h3>
          <p className="font-body text-[15px] leading-relaxed text-primary-foreground mb-8">
            Licensed realtor serving Florida. I bring the same energy to real estate that I bring to everything — all in, every time.
          </p>
          <a href="#" className="inline-block bg-brand-black text-white font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm hover:opacity-90 transition-opacity duration-300">
            Let's Talk Real Estate
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThreeLanes;
