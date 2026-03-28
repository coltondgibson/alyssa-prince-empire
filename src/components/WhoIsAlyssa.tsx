import { useEffect, useRef } from "react";
import portraitImage from "@/assets/alyssa-orange-portrait.png";

const WhoIsAlyssa = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [sectionRef.current, quoteRef.current].filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-fade-up");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="story" className="bg-cream">
      {/* Two-column content */}
      <div
        ref={sectionRef}
        className="opacity-0 max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12 lg:gap-20"
      >
        {/* Left text */}
        <div className="flex-1 md:max-w-[55%]">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-blush mb-4">
            Who Is Alyssa Prince
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-6">
            Builder. Dreamer.
            <br />
            The real deal.
          </h2>
          <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl">
            I've spent 15 years building businesses, closing real estate deals, earning 7 figures,
            and winning top ranks in an industry I love. I've also burned out and walked away — and
            came back when something real finally pulled me in again. My passion for helping women
            win has never been stronger. And I want to bring you with me.
          </p>
        </div>

        {/* Right image */}
        <div className="flex-shrink-0 md:max-w-[40%]">
          <img
            src={portraitImage}
            alt="Alyssa Prince portrait"
            className="w-full max-w-md object-contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* Pull quote */}
      <div
        ref={quoteRef}
        className="opacity-0 pb-20 md:pb-28 px-6"
      >
        <p className="font-heading italic text-2xl md:text-3xl lg:text-4xl text-center text-blush max-w-4xl mx-auto leading-snug">
          "You don't need full clarity to start. Confidence comes after you move."
        </p>
      </div>
    </section>
  );
};

export default WhoIsAlyssa;
