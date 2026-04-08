import { useEffect, useRef, useState } from "react";

const EmailOptIn = () => {
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interests, setInterests] = useState<string[]>([]);

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

  const toggleInterest = (value: string) => {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const interestOptions = [
    { value: "health", label: "Health & Wellness" },
    { value: "business", label: "Business Opportunity" },
    { value: "realestate", label: "Real Estate" },
    { value: "travel", label: "Travel" },
  ];

  return (
    <section id="connect" className="bg-primary py-14 md:py-20">
      <div ref={ref} className="opacity-0 max-w-xl mx-auto px-6 text-center">
        <p className="font-script text-xl md:text-2xl text-foreground/85 mb-3">let's stay in touch 💌</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
          Stay Connected With Alyssa
        </h2>
        <p className="font-body text-base md:text-lg text-foreground/85 mb-10 leading-relaxed">
          Real talk, wellness tips, travel hacks, and opportunities — straight from Alyssa. No spam. Just value.
        </p>
        <div className="max-w-[480px] mx-auto space-y-4">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="w-full px-5 py-3.5 bg-card text-foreground font-body text-sm rounded-sm outline-none placeholder:text-muted-foreground"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-5 py-3.5 bg-card text-foreground font-body text-sm rounded-sm outline-none placeholder:text-muted-foreground"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            className="w-full px-5 py-3.5 bg-card text-foreground font-body text-sm rounded-sm outline-none placeholder:text-muted-foreground"
          />
          <div className="bg-card rounded-sm px-5 py-4 text-left space-y-3">
            <p className="font-body text-sm text-muted-foreground">What interests you most?</p>
            {interestOptions.map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div
                  onClick={() => toggleInterest(option.value)}
                  className={`w-4 h-4 rounded-sm border flex-shrink-0 flex items-center justify-center transition-colors duration-200 ${
                    interests.includes(option.value)
                      ? "bg-primary border-primary"
                      : "border-muted-foreground/40 bg-background"
                  }`}
                >
                  {interests.includes(option.value) && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="text-primary-foreground">
                      <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span className="font-body text-sm text-foreground">{option.label}</span>
              </label>
            ))}
          </div>
          <button
            type="button"
            onClick={handleFormSubmit}
            className="w-full font-body text-sm tracking-[0.15em] uppercase px-8 py-3.5 rounded-sm transition-all duration-300 bg-gradient-to-b from-foreground to-foreground/85 text-card shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            YES, I'M IN →
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmailOptIn;
