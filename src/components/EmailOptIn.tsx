import { useEffect, useRef, useState } from "react";

const EmailOptIn = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");

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
    <section id="connect" className="bg-primary py-20 md:py-28">
      <div ref={ref} className="opacity-0 max-w-xl mx-auto px-6 text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
          Stay Connected With Alyssa
        </h2>
        <p className="font-body text-sm md:text-base text-foreground/70 mb-10 leading-relaxed">
          Real talk, wellness tips, travel hacks, and opportunities — straight from Alyssa. No spam. Just value.
        </p>
        <div className="max-w-[480px] mx-auto space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-5 py-3.5 bg-card text-foreground font-body text-sm rounded-sm outline-none placeholder:text-muted-foreground"
          />
          <button className="w-full bg-brand-black text-card font-body text-sm tracking-[0.15em] uppercase px-8 py-3.5 rounded-sm hover:opacity-90 transition-opacity duration-300">
            YES, I'M IN
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmailOptIn;
