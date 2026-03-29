import { useEffect, useRef } from "react";
import heroImage from "@/assets/hero-cute-background.jpg";
import alyssaImage from "@/assets/alyssa-orange-portrait.png";

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
      <img
        src={heroImage}
        alt="Soft blush-toned lifestyle interior"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectFit: 'cover', objectPosition: 'center center' }}
        width={1536}
        height={864}
      />

      <img
        src={alyssaImage}
        alt="Alyssa Prince"
        className="absolute bottom-0 left-[64%] z-[1] h-[82%] w-auto -translate-x-1/2 object-contain md:left-[62%] md:h-[88%]"
        width={960}
        height={960}
      />

      {/* Strong left-to-right gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/36 to-transparent" />

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
