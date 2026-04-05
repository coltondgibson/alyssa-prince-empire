import { useEffect, useRef } from "react";
import familyImage from "@/assets/alyssa-family.jpg";
import selfieImage from "@/assets/alyssa-selfie.png";

const WhoIsAlyssa = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
    <section id="story" className="relative bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-cream" />

      <div
        ref={sectionRef}
        className="opacity-0 relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12 lg:gap-20"
      >
        {/* Left text */}
        <div className="flex-1 md:max-w-[55%]">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Who Is Alyssa Prince
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-6">
            Builder. Dreamer.
            <br />
            The real deal.
          </h2>
          <p className="font-body text-lg md:text-xl leading-relaxed text-foreground/80 max-w-xl mb-6">
            I've spent 15 years building businesses, closing real estate deals, earning 7 figures,
            and winning top ranks in an industry I love. I've also burned out and walked away — and
            came back when something real finally pulled me in again. My passion for helping women
            win has never been stronger. And I want to bring you with me.
          </p>
          <p className="font-script text-2xl text-primary">— xo, Alyssa</p>
        </div>

        {/* Right — stacked photos with slight rotation */}
        <div className="flex-shrink-0 md:max-w-[40%] relative">
          <div className="polaroid" style={{ transform: "rotate(2deg)" }}>
            <img
              src={familyImage}
              alt="Alyssa Prince and her family"
              className="w-full max-w-sm md:max-w-md object-cover aspect-[3/4]"
              loading="lazy"
            />
            <p className="polaroid-caption">My crew 💛</p>
          </div>
          {/* Small inset polaroid */}
          <div
            className="polaroid absolute -bottom-6 -left-8 w-28 md:w-36 hidden md:block"
            style={{ transform: "rotate(-5deg)", zIndex: 10 }}
          >
            <img
              src={selfieImage}
              alt="Alyssa selfie"
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
            <p className="polaroid-caption text-xs">hi! 👋</p>
          </div>
        </div>
      </div>

      {/* Pull quote */}
      <div
        ref={quoteRef}
        className="opacity-0 relative z-10 pb-20 md:pb-28 px-6"
      >
        <p className="font-heading italic text-2xl md:text-3xl lg:text-4xl text-center text-primary max-w-4xl mx-auto leading-snug">
          "You don't need full clarity to start. Confidence comes after you move."
        </p>
      </div>
    </section>
  );
};

export default WhoIsAlyssa;
