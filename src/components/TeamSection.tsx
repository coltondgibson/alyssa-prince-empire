import { useEffect, useRef } from "react";
import teamPhoto from "@/assets/tranont-team.jpg";

const TeamSection = () => {
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

  return (
    <>
      {/* Decorative spacer */}
      <div className="bg-cream flex items-center justify-center py-6">
        <div className="flex items-center gap-4 max-w-xs w-full">
          <div className="flex-1 h-px bg-primary/20" />
          <span className="font-script text-primary text-xl">✦</span>
          <div className="flex-1 h-px bg-primary/20" />
        </div>
      </div>

      <section className="bg-foreground py-16 md:py-20 relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(338_55%_65%/0.08),transparent_70%)]" />

        <div ref={ref} className="opacity-0 relative z-10 max-w-2xl mx-auto px-6 text-center">
          <p className="font-body tracking-[0.3em] uppercase text-primary mb-3 text-xs">
            A New Chapter
          </p>
          <h2 className="font-heading text-3xl md:text-4xl leading-[1.2] text-primary-foreground mb-5">
            The right product.<br />The right people.<br />The right time.
          </h2>
          <p className="font-body text-sm md:text-base leading-relaxed text-primary-foreground/70 max-w-lg mx-auto mb-6">
            Alyssa and her team brought their greens formula and a massive network of partners and customers to Tranont, creating one of the most exciting launches in the company's history.
          </p>

          <img
            src={teamPhoto}
            alt="Alyssa with the Tranont leadership team"
            className="w-full max-w-xs mx-auto rounded-sm mb-8"
            loading="lazy"
          />

          <a
            href="#quiz"
            className="inline-block font-body text-xs tracking-[0.2em] uppercase bg-primary text-foreground px-8 py-3 rounded-sm hover:bg-primary/90 transition-colors"
          >
            Find out if this is for you →
          </a>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
