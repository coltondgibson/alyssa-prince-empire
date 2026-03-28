import { useEffect, useRef } from "react";

const credentials = [
  "15+ Years in Business",
  "7-Figure Earner",
  "Licensed Realtor",
  "World Traveler",
  "Tranont Partner",
  "Newly Married",
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
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        {credentials.map((item, i) => (
          <span key={item} className="flex items-center gap-2">
            <span className="font-body text-xs md:text-sm tracking-[0.18em] uppercase text-primary-foreground">
              {item}
            </span>
            {i < credentials.length - 1 && (
              <span className="text-primary-foreground/60 text-xs">♥</span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
};

export default CredentialsBar;
