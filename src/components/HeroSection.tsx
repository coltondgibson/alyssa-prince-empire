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
      {/* Decorative blush circle */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/[0.07] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.05] blur-3xl pointer-events-none" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-center">
          {/* Left — text */}
          <div ref={contentRef} className="flex-1 py-24 md:py-0 md:pr-12 lg:pr-20">
            <p className="mb-5 font-body text-xs tracking-[0.3em] uppercase text-primary font-medium md:mb-7">
              Entrepreneur · Realtor · Empire Builder
            </p>

            <h1
              className="mb-5 text-[6rem] leading-[0.88] text-foreground md:mb-7 md:text-[8rem] lg:text-[10rem] tracking-tight drop-shadow-sm"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
            >
              <span className="block">Alyssa</span>
              <span className="block mt-1">Prince</span>
            </h1>

            <div className="w-16 h-[2px] bg-primary/40 mb-5 md:mb-7" />

            <p className="mb-4 font-body text-xl font-light italic text-muted-foreground md:text-[1.65rem] lg:text-[1.8rem]">
              Helping women build the life they actually want.
            </p>

            <p className="mb-10 font-script text-lg text-primary md:mb-12 md:text-xl">
              dream big, hustle harder 💕
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

          {/* Right — portrait */}
          <div className="hidden md:flex md:w-[50%] lg:w-[48%] self-stretch items-end justify-center overflow-hidden">
            <img
              src={portraitImage}
              alt="Alyssa Prince portrait"
              className="h-screen max-h-[1000px] w-auto object-contain object-bottom"
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
