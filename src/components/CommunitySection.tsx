import { useEffect, useRef } from "react";
import womenPhoto from "@/assets/alyssa-women.jpg";
import redCarpetPhoto from "@/assets/alyssa-red-carpet.png";

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
    <section className="relative w-full overflow-hidden">
      {/* Main hero banner */}
      <div className="relative min-h-[60vh] flex items-center justify-center">
        <img src={womenPhoto} alt="Community of women" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-brand-black/60" />
        <div ref={ref} className="opacity-0 relative z-10 text-center px-6 py-16 md:py-20 max-w-3xl mx-auto">
          <p className="font-script text-xl md:text-2xl text-primary mb-4">stronger together</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-card mb-6">
            "The women around you either keep you stuck or push you forward."
          </h2>
          <p className="font-body text-lg md:text-xl text-card mb-10">
            This is my community. You're invited.
          </p>
          <a href="#connect" className="inline-block font-body text-sm tracking-[0.12em] uppercase px-8 py-3 rounded-sm transition-all duration-300 border border-blush text-blush hover:bg-gradient-to-b hover:from-blush hover:to-primary/80 hover:text-primary-foreground hover:border-transparent hover:-translate-y-0.5 shadow-md shadow-transparent hover:shadow-primary/20">
            Join Us
          </a>
        </div>
      </div>

      {/* Community photo accent strip */}
      <div className="bg-cream py-12 flex justify-center gap-6 md:gap-10 px-6 overflow-hidden">
        <div className="polaroid w-36 md:w-48 flex-shrink-0" style={{ transform: "rotate(-3deg)" }}>
          <img src={redCarpetPhoto} alt="Alyssa red carpet event" className="w-full aspect-[3/4] object-cover" loading="lazy" />
          <p className="polaroid-caption text-xs">boss moves 💅</p>
        </div>
        <div className="polaroid w-36 md:w-48 flex-shrink-0" style={{ transform: "rotate(2deg)" }}>
          <img src={womenPhoto} alt="Women supporting women" className="w-full aspect-[3/4] object-cover object-top" loading="lazy" />
          <p className="polaroid-caption text-xs">my girls 💕</p>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
