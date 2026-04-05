import { useEffect, useRef } from "react";

const QuizSection = () => {
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
    <section id="quiz" className="bg-navy py-24 md:py-32">
      <div ref={ref} className="opacity-0 max-w-2xl mx-auto px-6 text-center">
        <p className="font-script text-xl md:text-2xl text-primary mb-4">find your path</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-navy-foreground mb-4">
          Not sure where to start?
        </h2>
        <p className="font-body text-lg md:text-xl text-navy-foreground/70 mb-12 leading-relaxed">
          Answer 3 quick questions and I'll show you exactly where I'd begin if I were you.
        </p>
        <a
          href="#connect"
          className="inline-block bg-gold text-gold-foreground font-body text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-sm hover:opacity-90 transition-opacity duration-300 mb-8"
        >
          Take the 2-Minute Quiz →
        </a>
        <p className="font-body text-xs tracking-[0.2em] uppercase text-navy-foreground/50">
          Health · Business · Real Estate · Travel
        </p>
      </div>
    </section>
  );
};

export default QuizSection;
