import { useEffect, useRef } from "react";
import teamPhoto from "@/assets/alyssa-team-couch.jpg";

const PartnersStory = () => {
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
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      <img
        src={teamPhoto}
        alt="Alyssa and her business partners"
        className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-brand-black/65" />

      <div ref={ref} className="opacity-0 relative z-10 max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
        <p className="font-script text-3xl md:text-4xl text-primary mb-4">the journey</p>
        <p className="font-body text-sm tracking-[0.3em] uppercase text-blush mb-6">
          ​
        </p>
        <h2 className="font-heading italic text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-card mb-8">
          "15 years. Every lesson earned."
        </h2>
        <p className="font-body text-lg md:text-xl leading-relaxed text-card max-w-2xl mx-auto">
          I didn't stumble into success. I built it — deal by deal, client by client, decision by decision. When I found Tranont, I wasn't looking for another opportunity. I was looking for something I could actually believe in. I found both — and I brought everything I'd learned in 15 years with me.
        </p>
      </div>
    </section>
  );
};

export default PartnersStory;
