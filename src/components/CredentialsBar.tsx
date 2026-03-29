import { useEffect, useRef } from "react";

const credentials = [
  "15+ Years in Business",
  "7-Figure Earner",
  "Realtor",
  "World Traveler",
  "Empire Builder",
];

const CredentialsBar = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("animate-fade-up"); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-primary py-5 opacity-0">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-center gap-x-2 whitespace-nowrap">
        {credentials.map((item, i) => (
          <span key={item} className="flex items-center gap-2">
            <span className="font-body text-[11px] md:text-xs tracking-[0.2em] uppercase text-primary-foreground">
              {item}
            </span>
            {i < credentials.length - 1 && (
              <span className="text-primary-foreground/60 text-[10px]">·</span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
};

export default CredentialsBar;
