import { useEffect, useRef, useState } from "react";
import { useQuiz } from "@/components/QuizContext";

const CONTEXT_URLS: Record<string, string | null> = {
  business: "https://tranont.link/sAs4KVu",
  greens: "https://tranont.link/QUGk7sp",
  transform: "https://tranont.link/2no6UIh",
  protein: "https://tranont.link/oPFjEOY",
  glow: "https://tranont.link/by4KlLt",
  realestate: null,
  travel: "https://tranont.link/srCSRIX",
};

const RADIO_URLS: Record<string, string | null> = {
  wellness: "https://www.tranont.com/amp",
  business: "https://tranont.link/sAs4KVu",
  realestate: null,
  travel: "https://tranont.link/srCSRIX",
};

const EmailOptIn = () => {
  const { selectedProduct, setSelectedProduct } = useQuiz();
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isRealEstateOnly, setIsRealEstateOnly] = useState(false);
  const [radioSelection, setRadioSelection] = useState<string | null>(null);

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

  const handleFormSubmit = () => {
    const context = selectedProduct;
    setSelectedProduct(null);

    // Button context takes priority
    if (context && context in CONTEXT_URLS) {
      const url = CONTEXT_URLS[context];
      if (url) {
        window.open(url, "_blank", "noopener,noreferrer");
      } else {
        setIsRealEstateOnly(true);
        setSubmitted(true);
        return;
      }
    } else if (radioSelection && radioSelection in RADIO_URLS) {
      // Radio selection is secondary
      const url = RADIO_URLS[radioSelection];
      if (url) {
        window.open(url, "_blank", "noopener,noreferrer");
      } else {
        setIsRealEstateOnly(true);
        setSubmitted(true);
        return;
      }
    } else {
      // Default fallback
      window.open("https://www.tranont.com/amp", "_blank", "noopener,noreferrer");
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="connect" className="bg-primary py-14 md:py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="font-script text-3xl md:text-4xl text-foreground mb-4">
            {isRealEstateOnly ? "Thank you! 🏡" : "You're in! 🎉"}
          </p>
          <p className="font-body text-foreground/85 text-base">
            {isRealEstateOnly
              ? "Alyssa will be in touch with you shortly about real estate opportunities in Florida."
              : "Check your phone — I just sent you something 📱"}
          </p>
        </div>
      </section>
    );
  }

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
