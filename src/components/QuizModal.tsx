import { useState, useEffect } from "react";
import { X, ArrowLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";

type Category = "wellness" | "business" | "healthcoach" | "travel";

const CATEGORY_MAP: Category[] = ["wellness", "business", "healthcoach", "travel"];

const questions = [
  {
    headline: "What brought you here today?",
    options: [
      "I want to feel better and have more energy",
      "I want to build income on my own terms",
      "I'm looking for a personal health coach",
      "I love to travel and want to save money doing it",
    ],
  },
  {
    headline: "What does your life look like right now?",
    options: [
      "I'm busy and running on empty every day",
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
      "Working 1 on 1 with someone who actually gets my goals",
      "Traveling more without breaking the bank",
    ],
  },
];

const results: Record<Category, { headline: string; body: string; button: string; href: string }> = {
  wellness: {
    headline: "Sounds like wellness is your starting point.",
    body: "Alyssa has a few things she personally uses every day that could change how you feel — fast. Let her show you exactly where she'd begin.",
    button: "Show Me Where To Start →",
    href: "/start",
  },
  business: {
    headline: "Sounds like you're ready to build something real.",
    body: "Alyssa has been doing this for 15 years — she knows exactly what works and wants to show you.",
    button: "Let's Talk Business →",
    href: "/business",
  },
  healthcoach: {
    headline: "Sounds like you need someone in your corner.",
    body: "Alyssa works 1 on 1 with a select group of women every month. Let's see if it's a good fit.",
    button: "Book a Free Call →",
    href: "/healthcoach",
  },
  travel: {
    headline: "Travel is coming and you'll want to be first.",
    body: "Alyssa is building something exciting for travelers. Get on the list and be first to know.",
    button: "Save My Spot →",
    href: "/travel",
  },
};

function getResult(answers: number[]): Category {
  const counts: Record<Category, number> = { wellness: 0, business: 0, healthcoach: 0, travel: 0 };
  answers.forEach((a) => {
    counts[CATEGORY_MAP[a]]++;
  });
  const max = Math.max(...Object.values(counts));
  const tied = (Object.keys(counts) as Category[]).filter((k) => counts[k] === max);
  if (tied.length === 1) return tied[0];
  return CATEGORY_MAP[answers[0]];
}

type Step = "q1" | "q2" | "q3" | "result";
const stepProgress: Record<Step, number> = { q1: 25, q2: 50, q3: 75, result: 100 };

interface QuizModalProps {
  open: boolean;
  onClose: () => void;
}

const QuizModal = ({ open, onClose }: QuizModalProps) => {
  const [step, setStep] = useState<Step>("q1");
  const [answers, setAnswers] = useState<number[]>([]);

  useEffect(() => {
    if (open) {
      setStep("q1");
      setAnswers([]);
    }
  }, [open]);

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

  const handleBack = () => {
    if (step === "q2") {
      setStep("q1");
      setAnswers(answers.slice(0, -1));
    } else if (step === "q3") {
      setStep("q2");
      setAnswers(answers.slice(0, -1));
    } else if (step === "result") {
      setStep("q3");
      setAnswers(answers.slice(0, -1));
    }
  };

  const category = answers.length === 3 ? getResult(answers) : "wellness";
  const result = results[category];
  const qIndex = step === "q1" ? 0 : step === "q2" ? 1 : 2;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-[560px] max-h-[90vh] overflow-y-auto bg-card rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar: back + close */}
        <div className="flex items-center justify-between px-6 pt-5">
          {step !== "q1" ? (
            <button onClick={handleBack} className="text-foreground/50 hover:text-foreground transition-colors" aria-label="Back">
              <ArrowLeft size={20} strokeWidth={1.5} />
            </button>
          ) : <span />}
          <button onClick={onClose} className="text-foreground/50 hover:text-foreground transition-colors" aria-label="Close">
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Progress */}
        <div className="px-6 pt-3 pb-2">
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
              <p className="font-body text-foreground/80 text-base leading-relaxed mb-8">
                {result.body}
              </p>
              <a
                href={result.href}
                className="inline-block w-full font-body text-sm tracking-[0.15em] uppercase px-8 py-4 rounded-sm transition-all duration-300 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5 text-center"
              >
                {result.button}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
