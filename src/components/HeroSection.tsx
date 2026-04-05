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
          {/* Left — text */}
          <div ref={contentRef} className="flex-1 py-24 md:py-0 md:pr-12 lg:pr-20">
            <h1 className="mb-5 md:mb-7">
              <span
                className="block font-heading text-[5.5rem] md:text-[7.5rem] lg:text-[9.5rem] leading-[0.88] tracking-tight text-foreground font-semibold"
              >
                Alyssa
              </span>
              <span
                className="block font-script text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] leading-[1] text-primary mt-1"
              >
                &nbsp;Prince
              </span>
            </h1>

            <div className="w-16 h-[2px] bg-primary/40 mb-5 md:mb-7" />

            <p className="mb-4 font-body text-xl font-light italic text-muted-foreground md:text-[1.65rem] lg:text-[1.8rem]">
              Helping women build the life they actually want.
            </p>

            <p className="mb-10 font-script text-lg text-primary md:mb-12 md:text-xl">
              your income, your freedom, your terms
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

          {/* Right — portrait with gradient blend */}
          <div className="hidden md:flex md:w-[50%] lg:w-[48%] self-stretch items-center justify-center overflow-hidden relative">
            <img
              src={portraitImage}
              alt="Alyssa Prince portrait"
              className="h-[85vh] max-h-[900px] w-auto object-cover object-top rounded-sm"
            />
            {/* Gradient overlay to blend photo edges into cream background */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  linear-gradient(to right, hsl(40 33% 98%) 0%, hsl(40 33% 98% / 0.6) 8%, transparent 25%),
                  linear-gradient(to left, hsl(40 33% 98%) 0%, hsl(40 33% 98% / 0.6) 8%, transparent 25%),
                  linear-gradient(to bottom, hsl(40 33% 98%) 0%, hsl(40 33% 98% / 0.4) 5%, transparent 20%),
                  linear-gradient(to top, hsl(40 33% 98%) 0%, hsl(40 33% 98% / 0.6) 8%, transparent 25%)
                `,
              }}
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
