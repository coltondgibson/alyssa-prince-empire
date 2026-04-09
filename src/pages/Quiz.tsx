import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import QuizModal from "@/components/QuizModal";
import alyssaPhoto from "@/assets/alyssa-smiling2.jpg";

const Quiz = () => {
  const [quizOpen, setQuizOpen] = useState(false);

  useEffect(() => {
    // Auto-open quiz on mount
    setQuizOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      {/* Back arrow */}
      <Link
        to="/"
        className="fixed top-5 left-5 z-50 flex items-center gap-1.5 font-body text-xs tracking-wide text-foreground/60 hover:text-foreground transition-colors"
      >
        <ArrowLeft size={16} strokeWidth={1.5} />
        <span>Back</span>
      </Link>

      {/* Fallback page content (visible when modal is closed) */}
      {!quizOpen && (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-16">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-[3px] border-primary/30 shadow-xl shadow-black/10 mb-8">
            <img
              src={alyssaPhoto}
              alt="Alyssa Prince"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground text-center mb-4">
            Not sure where to start?
          </h1>

          <p className="font-body text-base md:text-lg text-foreground/75 text-center leading-relaxed max-w-md mb-10">
            Answer 3 quick questions and I'll show you exactly where I'd begin if I were you.
          </p>

          <button
            onClick={() => setQuizOpen(true)}
            className="font-body text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-sm transition-all duration-300 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5"
          >
            Take the Quiz →
          </button>
        </div>
      )}

      <QuizModal open={quizOpen} onClose={() => setQuizOpen(false)} />
    </div>
  );
};

export default Quiz;
