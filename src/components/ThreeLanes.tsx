import { useEffect, useRef, useState } from "react";
import { useQuiz } from "@/components/QuizContext";
import ProductModal from "@/components/ProductModal";
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

const PRODUCT_MODALS: Record<string, { headline: string; subtext: string; submitUrl: string }> = {
  greens: {
    headline: "Start with what Alyssa drinks every morning.",
    subtext: "Enter your info and she'll send you everything you need to know about Greens.",
    submitUrl: "https://tranont.link/QUGk7sp",
  },
  transform: {
    headline: "The supplement that changed how Alyssa thinks about eating.",
    subtext: "Enter your info and she'll send you the full breakdown on Transform.",
    submitUrl: "https://tranont.link/2no6UIh",
  },
  protein: {
    headline: "Clean protein. No bloat. Actually tastes good.",
    subtext: "Enter your info and Alyssa will send you everything about Clear Protein.",
    submitUrl: "https://tranont.link/oPFjEOY",
  },
  glow: {
    headline: "Marine collagen that actually works.",
    subtext: "Enter your info and Alyssa will send you the full story on Glow-M.",
    submitUrl: "https://tranont.link/by4KlLt",
  },
};

const ThreeLanes = () => {
  const { openQuiz, setSelectedProduct } = useQuiz();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openProductModal = (context: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveModal(context);
  };

  const scrollToConnect = (context?: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (context) setSelectedProduct(context);
    document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' });
  };
  const ref1 = useFadeIn();
  const ref2 = useFadeIn();
  const ref3 = useFadeIn();

  return (
    <>
    <section id="wellness" className="bg-card">
      {/* Lane 1 — Wellness: photo left, text right */}
      <div ref={ref1} className="opacity-0 flex flex-col md:flex-row w-full max-w-7xl mx-auto px-6 lg:px-10" style={{ minHeight: 420 }}>
        <div className="md:w-1/2 h-96 md:h-auto md:max-h-[560px]">
          <img src={kitchenPhoto} alt="Alyssa in the kitchen" className="w-full h-full object-cover object-[center_16%] md:object-[center_22%]" loading="lazy" />
        </div>
        <div className="md:w-1/2 bg-background flex items-center px-8 lg:px-16 py-16">
          <div className="max-w-lg">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Wellness</p>
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-foreground mb-6">
              Feel better from the inside out.
            </h3>
            <p className="font-body text-base md:text-lg leading-relaxed text-foreground mb-8">
              Products backed by science and real results — that I use every single day. From energy to metabolism to gut health, I've found what works and I want to share it with you.
            </p>
            <a href="#connect" onClick={scrollToConnect()} className="inline-block font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm transition-all duration-300 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5">
              See What I Use
            </a>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="bg-background px-6 lg:px-10 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Three smaller product cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                name: "Transform",
                image: transformPhoto,
                context: "transform",
                description: "The supplement that changed how I think about eating. It converts sugars into fiber — reducing glucose spikes, curbing cravings, and supporting metabolism all day. Non-negotiable.",
              },
              {
                name: "Clear Protein",
                image: proteinPhoto,
                context: "protein",
                description: "Clean protein without the bloat. 20g of clear whey protein that actually tastes good and digests clean. I use this daily.",
              },
              {
                name: "Glow-M",
                image: glowPhoto,
                context: "glow",
                description: "Marine collagen for skin, hair, and nails. I noticed a difference within weeks.",
              },
            ].map((product) => (
              <div
                key={product.name}
                className="group relative bg-card rounded-lg text-center transition-all duration-500 hover:-translate-y-2 shadow-[0_4px_24px_-6px_hsl(var(--primary)/0.12)] hover:shadow-[0_16px_48px_-12px_hsl(var(--primary)/0.3)] overflow-hidden"
              >
                <div className="bg-background/60 p-6 pb-4 flex items-center justify-center h-64 md:h-72">
                  <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-8 pt-4">
                  <h4 className="font-heading text-2xl md:text-3xl text-foreground mb-3">{product.name}</h4>
                  <p className="font-body text-sm md:text-base leading-relaxed text-foreground/75 mb-6">{product.description}</p>
                  <a href="#" onClick={openProductModal(product.context)} className="inline-block font-body text-xs tracking-[0.15em] uppercase px-6 py-3 rounded-sm transition-all duration-300 bg-foreground text-background hover:bg-foreground/85 hover:-translate-y-0.5 shadow-sm hover:shadow-md">
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Greens Card */}
          <div className="group relative rounded-md text-center overflow-hidden transition-all duration-500 hover:-translate-y-1.5 shadow-[0_8px_40px_-8px_hsl(var(--primary)/0.25)] hover:shadow-[0_20px_60px_-12px_hsl(var(--primary)/0.4)] ring-2 ring-primary/20 hover:ring-primary/40">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] to-primary/[0.08] pointer-events-none" />
            <img src={greensPhoto} alt="Tranont Greens product" className="relative w-full h-64 md:h-96 object-contain bg-background" loading="lazy" />
            <div className="relative p-10 md:p-12 bg-card">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">✦ Featured</p>
              <h4 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Greens</h4>
              <p className="font-body text-base md:text-lg leading-relaxed text-foreground/80 mb-8 max-w-2xl mx-auto">
                My daily non-negotiable. Packed with over 35 fruits and vegetables, prebiotics, probiotics, and digestive enzymes — it's the easiest way to start your day right. I never skip this one.
              </p>
              <a href="#" onClick={openProductModal("greens")} className="inline-block font-body text-xs tracking-[0.15em] uppercase px-8 py-3.5 rounded-sm transition-all duration-300 bg-foreground text-background hover:bg-foreground/85 hover:-translate-y-0.5 shadow-sm hover:shadow-md">
                Learn More →
              </a>
            </div>
          </div>

          {/* Quiz CTA */}
          <div className="text-center mt-12">
            <p className="font-script text-xl md:text-2xl text-primary mb-4">Not sure which is right for you?</p>
            <button onClick={openQuiz} className="inline-block font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm transition-all duration-300 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5">
              Take the Quiz →
            </button>
          </div>
        </div>
      </div>

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

      {/* Business Photo Grid — Tranont & Nashville */}
      <div className="bg-card px-6 lg:px-10 py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-sm">
            <img src={tranontPhoto} alt="Alyssa with Tranont leadership — Our mission is to impact 1 billion lives" className="w-full h-80 md:h-96 object-cover" loading="lazy" />
            <p className="font-body text-sm text-foreground/70 mt-4 text-center italic">Why she chose Tranont — "Our mission is to impact 1 billion lives"</p>
          </div>
          <div className="overflow-hidden rounded-sm">
            <img src={nashvillePhoto} alt="Alyssa at 7 Star Director recognition in Nashville" className="w-full h-80 md:h-96 object-cover object-top" loading="lazy" />
            <p className="font-body text-sm text-foreground/70 mt-4 text-center italic">7 Star Director — Nashville recognition</p>
          </div>
        </div>
      </div>

      {/* Lane 3 — Real Estate: no photo, blush pink bg, centered */}
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
    {activeModal && PRODUCT_MODALS[activeModal] && (
      <ProductModal
        open={true}
        onClose={() => setActiveModal(null)}
        headline={PRODUCT_MODALS[activeModal].headline}
        subtext={PRODUCT_MODALS[activeModal].subtext}
        submitUrl={PRODUCT_MODALS[activeModal].submitUrl}
      />
    )}
    </>
  );
};

export default ThreeLanes;
