import { useEffect, useRef } from "react";
import girlsNight from "@/assets/girls-night.jpg";

const CommunitySection = () => {
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
    <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
      <img src={girlsNight} alt="Community of women" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
      <div className="absolute inset-0 bg-brand-black/60" />
      <div ref={ref} className="opacity-0 relative z-10 text-center px-6 py-24 md:py-32 max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-card mb-6">
          "The women around you either keep you stuck or push you forward."
        </h2>
        <p className="font-body text-base md:text-lg text-card/80 mb-10">
          This is my community. You're invited.
        </p>
        <a href="#connect" className="inline-block font-body text-sm tracking-[0.12em] uppercase px-8 py-3 rounded-sm border border-blush text-blush hover:bg-blush hover:text-primary-foreground transition-all duration-300">
          Join Us
        </a>
      </div>
    </section>
  );
};

export default CommunitySection;
