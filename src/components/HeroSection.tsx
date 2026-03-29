import { useEffect, useRef } from "react";
import heroImage from "@/assets/alyssa-kitchen.png";

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
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-background">
      <img
        src={heroImage}
        alt="Alyssa Prince in her kitchen preparing a healthy lifestyle moment"
        className="absolute inset-0 h-full w-full object-cover object-[70%_30%] md:object-[62%_24%]"
        width={1440}
        height={1440}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/48 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/18 via-transparent to-transparent" />

      <div className="relative z-10 flex min-h-[90vh] items-center">
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-28 lg:px-10 lg:pt-32">
          <div ref={contentRef} className="max-w-[34rem]">
            <p className="mb-4 font-body text-xs tracking-[0.3em] uppercase text-primary md:mb-6">
              Entrepreneur · Realtor · Empire Builder
            </p>

            <h1 className="mb-4 font-heading text-[4.5rem] leading-[0.88] text-background md:mb-6 md:text-[6.5rem] lg:text-[8rem]">
              Alyssa
              <br />
              Prince
            </h1>

            <p className="mb-8 max-w-lg font-body text-lg font-light italic text-background/80 md:mb-10 md:text-[1.45rem]">
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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" className="text-background">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
