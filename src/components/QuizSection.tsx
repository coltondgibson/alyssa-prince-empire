import { useEffect, useRef } from "react";
import { useQuiz } from "@/components/QuizContext";

const QuizSection = () => {
  const { openQuiz } = useQuiz();
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
    <section id="quiz" className="bg-navy py-16 md:py-20">
      <div ref={ref} className="opacity-0 max-w-2xl mx-auto px-6 text-center">
        <p className="font-script text-xl md:text-2xl text-primary mb-4">find your path</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-navy-foreground mb-4">
          Not sure where to start?
        </h2>
        <p className="font-body text-lg md:text-xl text-navy-foreground/85 mb-12 leading-relaxed">
          Answer 3 quick questions and I'll show you exactly where I'd begin if I were you.
        </p>
        <a
          href="#quiz"
          onClick={(e) => { e.preventDefault(); document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="inline-block font-body text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-sm transition-all duration-300 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5 mb-8"
        >
          Take the 2-Minute Quiz →
        </a>
        <p className="font-body text-xs tracking-[0.2em] uppercase text-navy-foreground/70">
          Health · Business · Real Estate · Travel
        </p>
      </div>
    </section>
  );
};

export default QuizSection;
