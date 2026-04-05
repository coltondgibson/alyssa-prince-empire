import { useEffect, useRef } from "react";
import portraitImage from "@/assets/alyssa-hero.jpg";

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
          {/* Portrait — shown first on mobile, right side on desktop */}
          <div className="order-1 md:order-2 w-full md:w-[48%] lg:w-[44%] flex-none flex items-center justify-center pt-24 pb-4 md:py-12">
            <div className="flex h-[40vh] md:h-[78vh] max-h-[820px] w-full max-w-[280px] md:max-w-[560px] items-center justify-center">
              <img
                src={portraitImage}
                alt="Alyssa Prince portrait"
                className="h-full w-full object-contain object-center"
              />
            </div>
          </div>

          {/* Text — shown second on mobile, left side on desktop */}
          <div ref={contentRef} className="order-2 md:order-1 flex-1 pb-16 md:py-0 md:pr-12 lg:pr-20">
            <h1 className="mb-5 md:mb-7">
              <span
                className="block font-heading text-[4rem] md:text-[7.5rem] lg:text-[9.5rem] leading-[0.88] tracking-tight text-foreground font-semibold"
              >
                Alyssa
              </span>
              <span
                className="block font-script text-[2.5rem] md:text-[5rem] lg:text-[6.5rem] leading-[1] text-primary mt-1"
              >
                &nbsp;Prince
              </span>
            </h1>

            <div className="w-16 h-[2px] bg-primary/40 mb-5 md:mb-7" />

            <p className="mb-4 font-body text-lg font-light italic text-muted-foreground md:text-[1.65rem] lg:text-[1.8rem]">
              Helping women build the life they actually want.
            </p>

            <p className="mb-8 font-script text-primary md:mb-12 md:text-xl text-2xl">
              your income, your freedom, your terms
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#connect"
                className="inline-block font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm text-center transition-all duration-300 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5"
              >
                Take the Quiz
              </a>
              <a
                href="#connect"
                className="inline-block font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm text-center transition-all duration-300 bg-gradient-to-b from-foreground to-foreground/85 text-background shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Join My Team
              </a>
            </div>
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
