import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface LandingPageProps {
  headline: string;
  subheadline: string;
  description: string;
  bullets: string[];
  submitLabel: string;
  onSubmit: () => void;
  afterSubmitMessage?: string;
  footerNote: string;
}

const LandingPageLayout = ({
  headline,
  subheadline,
  description,
  bullets,
  submitLabel,
  onSubmit,
  afterSubmitMessage,
  footerNote,
}: LandingPageProps) => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("animate-fade-up");
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = () => {
    onSubmit();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-5 px-6 md:px-10 flex items-center gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-body text-sm tracking-wide text-foreground/60 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Link>
        <div className="flex-1 text-center pr-16">
          <span className="font-heading text-lg md:text-xl tracking-wide text-foreground">
            Alyssa Prince
          </span>
        </div>
      </header>

      {/* Content */}
      <main className="px-6 md:px-10 pb-16 pt-6 md:pt-10">
        <div ref={ref} className="opacity-0 max-w-2xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-10 md:mb-14">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
              {headline}
            </h1>
            <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed max-w-lg mx-auto">
              {subheadline}
            </p>
          </div>

          {/* Description + Bullets */}
          <div className="mb-10 md:mb-14">
            {description && (
              <p className="font-body text-sm md:text-base text-foreground/75 text-center mb-8 leading-relaxed max-w-lg mx-auto">
                {description}
              </p>
            )}
            <ul className="max-w-md mx-auto space-y-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-0.5 text-lg leading-none">—</span>
                  <span className="font-body text-sm md:text-base text-foreground/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form or Thank You */}
          {submitted ? (
            <div className="text-center py-10">
              <p className="font-script text-2xl md:text-3xl text-foreground mb-3">
                {afterSubmitMessage ? "Thank you! 💌" : "You're in! 🎉"}
              </p>
              <p className="font-body text-foreground/75 text-sm md:text-base">
                {afterSubmitMessage || "Check your phone — something's on the way 📱"}
              </p>
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="space-y-3.5">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  className="w-full px-5 py-3.5 bg-muted text-foreground font-body text-sm rounded-sm outline-none placeholder:text-muted-foreground"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-5 py-3.5 bg-muted text-foreground font-body text-sm rounded-sm outline-none placeholder:text-muted-foreground"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                  className="w-full px-5 py-3.5 bg-muted text-foreground font-body text-sm rounded-sm outline-none placeholder:text-muted-foreground"
                />
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm transition-all duration-300 bg-foreground text-background shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  {submitLabel}
                </button>
              </div>
              <p className="text-center font-body text-xs text-foreground/45 mt-4">
                {footerNote}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default LandingPageLayout;
