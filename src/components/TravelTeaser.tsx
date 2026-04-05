import { useEffect, useRef } from "react";

const TravelTeaser = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("animate-fade-up"); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="travel" className="bg-background py-16 md:py-20">
      <div ref={ref} className="opacity-0 max-w-2xl mx-auto px-6 text-center">
        <p className="font-script text-xl md:text-2xl text-primary mb-4">✈️ adventure awaits</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-foreground mb-6">
          The next chapter is travel.
        </h2>
        <p className="font-body text-base md:text-lg leading-relaxed text-foreground/85 mb-10 max-w-xl mx-auto">
          I've always believed that real freedom means choosing where you go, when you go, and how you get there. Something exciting is coming for those of you who love to travel. Stay tuned.
        </p>
        <a
          href="#connect"
          className="inline-block font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm transition-all duration-300 bg-gradient-to-b from-foreground to-foreground/85 text-card shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          Notify Me →
        </a>
      </div>
    </section>
  );
};

export default TravelTeaser;
