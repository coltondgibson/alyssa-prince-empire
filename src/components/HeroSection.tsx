import { useEffect, useRef } from "react";
import heroImage from "@/assets/alyssa-orange-hero-wide.jpg";

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
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-background">
      <div className="absolute left-[-10%] top-[12%] h-72 w-72 rounded-full bg-primary/35 blur-3xl md:h-[28rem] md:w-[28rem]" />
      <div className="absolute inset-y-0 right-0 hidden w-[48%] md:block">
        <div className="absolute inset-x-0 bottom-0 top-24 overflow-hidden">
          <img
            src={heroImage}
            alt="Alyssa Prince smiling in an editorial portrait"
            className="h-full w-full object-cover object-[76%_35%]"
            width={1376}
            height={768}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background" />
        </div>
      </div>

      <div className="relative z-10 flex min-h-[88vh] items-center">
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-28 lg:px-10 lg:pt-32">
          <div ref={contentRef} className="max-w-[36rem]">
            <p className="mb-4 font-body text-xs tracking-[0.3em] uppercase text-primary md:mb-6">
              Entrepreneur · Realtor · Empire Builder
            </p>

            <h1 className="mb-4 font-heading text-[4.5rem] leading-[0.88] text-foreground md:mb-6 md:text-[6.5rem] lg:text-[8rem]">
              Alyssa
              <br />
              Prince
            </h1>

            <p className="mb-8 max-w-lg font-body text-lg font-light italic text-foreground/70 md:mb-10 md:text-[1.45rem]">
              Helping women build the life they actually want.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-block bg-primary text-primary-foreground font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm text-center hover:opacity-90 transition-opacity duration-300"
              >
                Take the Quiz
              </a>
              <a
                href="#"
                className="inline-block bg-brand-black text-background font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm text-center hover:opacity-90 transition-opacity duration-300"
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
