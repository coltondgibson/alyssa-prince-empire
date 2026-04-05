import { useEffect, useRef } from "react";
import couplePhoto from "@/assets/alyssa-couple.jpg";

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
    <section className="bg-cream py-20 md:py-28">
      <div ref={ref} className="opacity-0 max-w-4xl mx-auto px-6 text-center">
        <p className="font-script text-2xl md:text-3xl text-primary mb-8">our love story</p>
        <div className="polaroid mx-auto max-w-lg" style={{ transform: "rotate(-1deg)" }}>
          <img
            src={couplePhoto}
            alt="Alyssa and Chase"
            className="w-full aspect-[4/3] object-cover"
            loading="lazy"
          />
          <p className="polaroid-caption text-base md:text-lg">
            March 6, 2026 — Said yes to the best adventure yet 💍
          </p>
        </div>
        <p className="mt-10 font-heading italic text-xl md:text-2xl text-muted-foreground">
          "Every love story is beautiful, but ours is my favorite."
        </p>
      </div>
    </section>
  );
};

export default WeddingMoment;
