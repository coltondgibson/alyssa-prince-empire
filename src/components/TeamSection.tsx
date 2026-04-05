import { useEffect, useRef } from "react";
import teamPhoto from "@/assets/tranont-team-hq.png";

const TeamSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("animate-fade-up"); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Decorative spacer */}
      <div className="bg-cream flex items-center justify-center py-6">
        <div className="flex items-center gap-4 max-w-xs w-full">
          <div className="flex-1 h-px bg-primary/40" />
          <span className="font-script text-primary text-xl">✦</span>
          <div className="flex-1 h-px bg-primary/40" />
        </div>
      </div>

      <section className="relative overflow-hidden py-16 md:py-20 bg-cream">

        <div ref={ref} className="opacity-0 relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
          {/* Label */}
          <p className="font-body tracking-[0.3em] uppercase text-primary mb-4 text-sm text-center">
            A New Chapter
          </p>

          {/* Headline */}
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-foreground mb-6 text-center">
            The right product.<br />The right people.<br />The right time.
          </h2>

          {/* Description */}
          <p className="font-body text-lg md:text-xl leading-relaxed text-foreground/80 max-w-2xl mx-auto mb-12 text-center">
            Alyssa and her team brought their greens formula and a massive network of partners and customers to Tranont, creating one of the most exciting launches in the company's history.
          </p>

          {/* Large photo with elegant frame */}
          <div className="max-w-3xl mx-auto mb-14">
            <div className="relative rounded-sm overflow-hidden shadow-2xl">
              <img
                src={teamPhoto}
                alt="Alyssa with the Tranont leadership team — Our mission is to impact 1 billion lives"
                className="w-full aspect-[4/3] object-cover object-[center_30%]"
                loading="lazy"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <p className="font-script text-lg text-primary text-center mt-5">
              "Our mission is to impact 1 billion lives" ✨
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="#quiz"
              className="inline-block font-body text-sm tracking-[0.2em] uppercase px-10 py-4 rounded-sm transition-all duration-300 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5"
            >
              Find out if this is for you →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
