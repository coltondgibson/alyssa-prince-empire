import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Progress } from "@/components/ui/progress";

type Category = "wellness" | "business" | "realestate" | "travel";

const CATEGORY_MAP: Category[] = ["wellness", "business", "realestate", "travel"];

const questions = [
  {
    headline: "What brought you here today?",
    options: [
      "I want to feel better and have more energy",
      "I want to build income on my own terms",
      "I'm looking to buy or sell a home in Florida",
      "I love to travel and want to do more of it",
    ],
  },
  {
    headline: "What does your life look like right now?",
    options: [
      "I'm a mom juggling everything and running on empty",
      "I have a job but want something more",
      "I'm ready for a big change but don't know where to start",
      "I'm already building — I just need better tools",
    ],
  },
  {
    headline: "What would change everything for you in the next 90 days?",
    options: [
      "Waking up with real energy and feeling good in my body",
      "Having an extra income stream that's actually mine",
      "Getting into the right home for my family",
      "Traveling more without breaking the bank",
    ],
  },
];

const results: Record<Category, { headline: string; body: string }> = {
  wellness: {
    headline: "Sounds like wellness is your starting point.",
    body: "Alyssa has a few things she personally uses every day that could change how you feel — fast. Let her show you exactly where she'd start.",
  },
  business: {
    headline: "Sounds like you're ready to build something.",
    body: "Alyssa has been doing this for 15 years — and she wants to show you exactly how she did it. This could be the conversation that changes everything.",
  },
  realestate: {
    headline: "Sounds like home is on your mind.",
    body: "Alyssa is a licensed realtor in Florida and finding the right home for families is one of her favorite things. She'd love to help.",
  },
  travel: {
    headline: "Sounds like you're ready to go.",
    body: "Alyssa has something exciting coming specifically for people who love to travel — and you'll want to be first to know about it.",
  },
};

function getResult(answers: number[]): Category {
  const counts: Record<Category, number> = { wellness: 0, business: 0, realestate: 0, travel: 0 };
  answers.forEach((a) => {
    counts[CATEGORY_MAP[a]]++;
  });
  const max = Math.max(...Object.values(counts));
  const tied = (Object.keys(counts) as Category[]).filter((k) => counts[k] === max);
  if (tied.length === 1) return tied[0];
  // Tiebreaker: Q1 answer
  return CATEGORY_MAP[answers[0]];
}

type Step = "q1" | "q2" | "q3" | "result" | "form" | "done";
const stepProgress: Record<Step, number> = { q1: 20, q2: 40, q3: 60, result: 80, form: 100, done: 100 };

interface QuizModalProps {
  open: boolean;
  onClose: () => void;
}

const QuizModal = ({ open, onClose }: QuizModalProps) => {
  const [step, setStep] = useState<Step>("q1");
  const [answers, setAnswers] = useState<number[]>([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "" });

  useEffect(() => {
    if (open) {
      setStep("q1");
      setAnswers([]);
      setForm({ name: "", email: "", phone: "", interest: "" });
    }
  }, [open]);

  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [open]);

  if (!open) return null;

  const handleAnswer = (optionIndex: number) => {
    const next = [...answers, optionIndex];
    setAnswers(next);
    if (step === "q1") setStep("q2");
    else if (step === "q2") setStep("q3");
    else if (step === "q3") setStep("result");
  };

  const category = answers.length === 3 ? getResult(answers) : "wellness";
  const result = results[category];

  const REDIRECT_URLS: Record<Category, string | null> = {
    wellness: "https://www.tranont.com/amp",
    business: "https://tranont.link/sAs4KVu",
    travel: "https://tranont.link/srCSRIX",
    realestate: null,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("done");
    const url = REDIRECT_URLS[category];
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const qIndex = step === "q1" ? 0 : step === "q2" ? 1 : 2;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-[560px] max-h-[90vh] overflow-y-auto bg-card rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-foreground/50 hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        {/* Progress */}
        <div className="px-6 pt-6 pb-2">
          <Progress value={stepProgress[step]} className="h-1.5 bg-muted" />
        </div>

        <div className="px-6 pb-8 pt-4">
          {/* Questions */}
          {(step === "q1" || step === "q2" || step === "q3") && (
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl md:text-3xl text-foreground text-center mb-8">
                {questions[qIndex].headline}
              </h3>
              <div className="flex flex-col gap-3">
                {questions[qIndex].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className="w-full text-left px-5 py-4 rounded-lg border border-primary/30 bg-background text-foreground font-body text-sm md:text-base transition-all duration-200 hover:bg-primary/10 hover:border-primary active:bg-primary active:text-primary-foreground"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Result */}
          {step === "result" && (
            <div className="animate-fade-in text-center">
              <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4">
                YOUR RESULT
              </p>
              <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
                {result.headline}
              </h3>
              <p className="font-body text-foreground/80 text-base leading-relaxed mb-6">
                {result.body}
              </p>
              <p className="font-script text-primary italic text-base mb-10">
                Interested in something else? Let us know below.
              </p>

              {/* Opt-in form */}
              <h4 className="font-heading text-xl md:text-2xl text-foreground mb-6">
                Send me the details →
              </h4>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                <input
                  required
                  type="text"
                  placeholder="First Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                <select
                  required
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground"
                >
                  <option value="" disabled>What interests you most?</option>
                  <option value="health">Better health &amp; energy</option>
                  <option value="business">Building a business</option>
                  <option value="realestate">Buying or selling a home</option>
                  <option value="travel">Travel opportunities</option>
                  <option value="all">All of the above</option>
                </select>
                <button
                  type="submit"
                  className="w-full mt-2 font-body text-sm tracking-[0.15em] uppercase px-8 py-4 rounded-sm transition-all duration-300 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5"
                >
                  YES, I'M IN →
                </button>
              </form>
            </div>
          )}

          {/* Done */}
          {step === "done" && (
            <div className="animate-fade-in text-center py-8">
              {category === "realestate" ? (
                <>
                  <p className="font-script text-3xl md:text-4xl text-primary mb-4">
                    Thank you! 🏡
                  </p>
                  <p className="font-body text-foreground/80 text-base mb-8">
                    Alyssa will be in touch with you shortly about real estate.
                  </p>
                </>
              ) : (
                <>
                  <p className="font-script text-3xl md:text-4xl text-primary mb-4">
                    You're in! 🎉
                  </p>
                  <p className="font-body text-foreground/80 text-base mb-8">
                    Check your phone — I just sent you something 📱
                  </p>
                </>
              )}
              <button
                onClick={onClose}
                className="font-body text-sm tracking-[0.12em] uppercase px-8 py-3 rounded-sm bg-foreground text-background hover:bg-foreground/85 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
