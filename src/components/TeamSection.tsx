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
    <section className="bg-cream py-24 md:py-32">
      <div ref={ref} className="opacity-0 max-w-4xl mx-auto px-6 text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
          The Team
        </p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-foreground mb-6">
          The right product. The right people. The right time.
        </h2>
        <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-12">
          Alyssa and her team brought their greens formula — and a massive network of partners and customers — to Tranont, creating one of the most exciting launches in the company's history.
        </p>
        <img
          src={teamPhoto}
          alt="Alyssa with the Tranont leadership team"
          className="w-full max-w-3xl mx-auto rounded-lg"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default TeamSection;
