import { useEffect, useRef, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const BookACall = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [tooltipOpen, setTooltipOpen] = useState(false);

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
    <section id="book-a-call" className="bg-cream py-16 md:py-20">
      <div ref={ref} className="opacity-0 max-w-2xl mx-auto px-6 text-center">
        <p className="font-script text-xl md:text-2xl text-primary mb-4">ready when you are ✨</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
          Let's talk.
        </h2>
        <p className="font-body text-base md:text-lg text-foreground/85 mb-10 leading-relaxed max-w-xl mx-auto">
          Book a free 15-minute call with Alyssa. No pressure — just a real conversation about where you are and where you want to go.
        </p>
        <Tooltip open={tooltipOpen} onOpenChange={setTooltipOpen}>
          <TooltipTrigger asChild>
            <button
              onClick={() => setTooltipOpen(true)}
              className="inline-block font-body text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-sm transition-all duration-300 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5"
            >
              Book a Call with Alyssa →
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Coming Soon</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </section>
  );
};

export default BookACall;
