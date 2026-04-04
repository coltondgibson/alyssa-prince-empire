import { useEffect, useRef } from "react";
import portraitImage from "@/assets/alyssa-orange-portrait.png";

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
    <section className="relative min-h-screen w-full overflow-hidden bg-cream">
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-center">
          {/* Left — text */}
          <div ref={contentRef} className="flex-1 py-24 md:py-0 md:pr-12 lg:pr-20">
            <p className="mb-5 font-body text-xs tracking-[0.3em] uppercase text-blush md:mb-7">
              Entrepreneur · Realtor · Empire Builder
            </p>

            <h1 className="mb-5 font-heading text-[6.5rem] leading-[0.82] text-foreground md:mb-7 md:text-[9rem] lg:text-[11rem]">
              Alyssa
              <br />
              Prince
            </h1>

            <p className="mb-10 max-w-lg font-body text-xl font-light italic text-muted-foreground md:mb-12 md:text-[1.65rem] lg:text-[1.8rem]">
              Helping women build the life they actually want.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#connect"
                className="inline-block bg-primary text-primary-foreground font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm text-center hover:opacity-90 transition-opacity duration-300"
              >
                Take the Quiz
              </a>
              <a
                href="#connect"
                className="inline-block bg-brand-black text-background font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm text-center hover:opacity-90 transition-opacity duration-300"
              >
                Join My Team
              </a>
            </div>
          </div>

          {/* Right — portrait, full height */}
          <div className="hidden md:flex md:w-[48%] lg:w-[45%] self-stretch items-end justify-center">
            <img
              src={portraitImage}
              alt="Alyssa Prince portrait"
              className="h-[85vh] max-h-[900px] w-auto object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-scroll-hint">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" className="text-foreground">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
