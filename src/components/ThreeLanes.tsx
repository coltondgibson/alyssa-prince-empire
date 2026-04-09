import { useEffect, useRef } from "react";
import { useQuiz } from "@/components/QuizContext";
import businessPhoto from "@/assets/alyssa-business.jpg";
import tranontPhoto from "@/assets/alyssa-tranont.jpg";
import nashvillePhoto from "@/assets/alyssa-nashville.jpg";
import kitchenPhoto from "@/assets/alyssa-kitchen.png";
import WellnessProducts from "@/components/WellnessProducts";

const useFadeIn = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("animate-fade-up"); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const ThreeLanes = () => {
  const { setSelectedProduct } = useQuiz();

  const scrollToConnect = (context?: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (context) setSelectedProduct(context);
    document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' });
  };
  const ref1 = useFadeIn();
  const ref2 = useFadeIn();
  const ref3 = useFadeIn();

  return (
    <section id="wellness" className="bg-card">
      {/* Lane 1 — Wellness: photo left, text right */}
      <div ref={ref1} className="opacity-0 flex flex-col md:flex-row w-full max-w-7xl mx-auto px-6 lg:px-10" style={{ minHeight: 420 }}>
        <div className="md:w-1/2 h-96 md:h-auto md:max-h-[560px]">
          <img src={kitchenPhoto} alt="Alyssa in the kitchen" className="w-full h-full object-cover object-[center_16%] md:object-[center_22%]" loading="lazy" />
        </div>
        <div className="md:w-1/2 bg-background flex items-center px-8 lg:px-16 py-16">
          <div className="max-w-lg">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Wellness</p>
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-foreground mb-4">
              Feel better from the inside out.
            </h3>
            <p className="font-body text-base md:text-lg leading-relaxed text-foreground/80">
              These are the four products I refuse to go a day without.
            </p>
          </div>
        </div>
      </div>

      {/* Product Cards by Category */}
      <WellnessProducts />

      {/* Lane 2 — Business: text left, couch photo right */}
      <div ref={ref2} className="opacity-0 flex flex-col md:flex-row-reverse w-full" style={{ minHeight: 320 }}>
        <div className="md:w-1/2 h-64 md:h-auto">
          <img src={businessPhoto} alt="Alyssa working on her business" className="w-full h-full object-cover object-[center_30%] md:object-[center_35%] max-h-[360px] md:max-h-none" loading="lazy" />
        </div>
        <div className="md:w-1/2 bg-card flex items-center px-8 lg:px-16 py-16">
          <div className="max-w-lg">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Business</p>
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-foreground mb-6">
              Ready to build something real?
            </h3>
            <p className="font-body text-base md:text-lg leading-relaxed text-foreground mb-8">
              I've been in this industry for 15 years. I know what a great opportunity looks like — and this is it. Products you believe in, a team that supports you, and income that grows with you.
            </p>
            <a href="#connect" onClick={scrollToConnect("business")} className="inline-block font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm transition-all duration-300 bg-gradient-to-b from-foreground to-foreground/85 text-background shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Learn About the Opportunity
            </a>
          </div>
        </div>
      </div>

      {/* Business Photo Grid */}
      <div className="bg-card px-6 lg:px-10 py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-sm">
            <img src={tranontPhoto} alt="Alyssa with Tranont leadership" className="w-full h-80 md:h-96 object-cover" loading="lazy" />
            <p className="font-body text-sm text-foreground/70 mt-4 text-center italic">Why she chose Tranont — "Our mission is to impact 1 billion lives"</p>
          </div>
          <div className="overflow-hidden rounded-sm">
            <img src={nashvillePhoto} alt="Alyssa at 7 Star Director recognition in Nashville" className="w-full h-80 md:h-96 object-cover object-top" loading="lazy" />
            <p className="font-body text-sm text-foreground/70 mt-4 text-center italic">7 Star Director — Nashville recognition</p>
          </div>
        </div>
      </div>

      {/* Lane 3 — Real Estate */}
      <div ref={ref3} className="opacity-0 w-full bg-primary flex items-center justify-center px-8 py-20" style={{ minHeight: 380 }}>
        <div className="max-w-xl text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/85 mb-4">Real Estate</p>
          <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-primary-foreground mb-6">
            Let's find your home.
          </h3>
          <p className="font-body text-base md:text-lg leading-relaxed text-primary-foreground mb-8">
            Licensed realtor serving Florida. I bring the same energy to real estate that I bring to everything — all in, every time.
          </p>
          <a href="#connect" onClick={scrollToConnect("realestate")} className="inline-block font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm transition-all duration-300 bg-gradient-to-b from-foreground to-foreground/85 text-background shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Let's Talk Real Estate
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThreeLanes;
