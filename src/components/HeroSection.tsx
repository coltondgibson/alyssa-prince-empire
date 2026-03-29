import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-inspiring-bg.jpg";
import alyssaPortrait from "@/assets/alyssa-orange-portrait.png";

const HeroSection = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      requestAnimationFrame(() => {
        setTimeout(() => {
          el.style.transition = "opacity 1s ease-out, transform 1s ease-out";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, 300);
      });
    }
  }, []);

  return (
    <section className="relative h-[75vh] w-full overflow-hidden">
      {/* Background layer */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />

      {/* Alyssa — positioned independently */}
      <img
        src={alyssaPortrait}
        alt="Alyssa Prince"
        className="pointer-events-none absolute bottom-0 right-[4%] z-[1] h-[88%] w-auto object-contain md:right-[12%] md:h-[95%]"
        width={960}
        height={960}
      />

      {/* Left gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />

      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-10">
          <div ref={contentRef} className="max-w-xl">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 md:mb-6">
              Entrepreneur · Realtor · Empire Builder
            </p>

            <h1 className="font-heading text-6xl md:text-[80px] lg:text-[96px] leading-[0.95] text-white mb-4 md:mb-6">
              Alyssa
              <br />
              Prince
            </h1>

            <p className="font-body font-light italic text-[20px] text-white/80 mb-8 md:mb-10">
              Helping women build the life they actually want.
            </p>

            <div className="flex flex-row gap-4">
              <a
                href="#"
                className="inline-block bg-primary text-primary-foreground font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm text-center hover:opacity-90 transition-opacity duration-300"
              >
                Take the Quiz
              </a>
              <a
                href="#"
                className="inline-block bg-brand-black text-white font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm text-center hover:opacity-90 transition-opacity duration-300"
              >
                Join My Team
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-scroll-hint">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
