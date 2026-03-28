import { useEffect, useRef } from "react";
import teamPhoto from "@/assets/alyssa-team-couch.png";

const PartnersStory = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("animate-fade-up"); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      <img
        src={teamPhoto}
        alt="Alyssa and her business partners"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-brand-black/65" />

      <div ref={ref} className="opacity-0 relative z-10 max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-blush mb-6">
          The Journey
        </p>
        <h2 className="font-heading italic text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-card mb-8">
          "2+ years. We never quit."
        </h2>
        <p className="font-body text-base md:text-lg leading-relaxed text-card/85 max-w-2xl mx-auto">
          My partners and I spent over two years building our greens formula. We hit walls. We
          almost quit. We kept going because the product was changing lives. When we found the right
          home for it — everything clicked. The right product. The right people. The right time.
        </p>
      </div>
    </section>
  );
};

export default PartnersStory;
