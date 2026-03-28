import { useEffect, useRef } from "react";
import weddingPhoto from "@/assets/alyssa-wedding.png";

const WeddingMoment = () => {
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
    <section className="relative w-full min-h-[70vh] flex items-end justify-center overflow-hidden">
      <img src={weddingPhoto} alt="Alyssa and Chase wedding" className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" />
      <div className="absolute inset-0 bg-brand-black/20" />
      <div ref={ref} className="opacity-0 relative z-10 text-center px-6 pb-16 md:pb-24">
        <p className="font-heading italic text-lg md:text-xl lg:text-2xl text-card drop-shadow-lg">
          March 6, 2026 — Said yes to the best adventure yet.
        </p>
      </div>
    </section>
  );
};

export default WeddingMoment;
