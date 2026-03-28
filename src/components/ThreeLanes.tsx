import { useEffect, useRef } from "react";
import kitchenPhoto from "@/assets/alyssa-kitchen.png";
import redCarpetPhoto from "@/assets/alyssa-red-carpet.png";
import carSelfiePhoto from "@/assets/alyssa-car-selfie.png";

interface LaneProps {
  eyebrow: string;
  heading: string;
  copy: string;
  ctaText: string;
  ctaStyle: "pink" | "black";
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right" | "background";
}

const Lane = ({ eyebrow, heading, copy, ctaText, ctaStyle, image, imageAlt, imagePosition }: LaneProps) => {
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

  const ctaClasses = ctaStyle === "pink"
    ? "bg-primary text-primary-foreground"
    : "bg-brand-black text-card";

  if (imagePosition === "background") {
    return (
      <div className="relative w-full min-h-[50vh] flex items-center overflow-hidden">
        <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-cream/80" />
        <div ref={ref} className="opacity-0 relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-blush mb-4">{eyebrow}</p>
          <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-foreground mb-6">{heading}</h3>
          <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl mb-8">{copy}</p>
          <a href="#" className={`inline-block font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm hover:opacity-90 transition-opacity duration-300 ${ctaClasses}`}>
            {ctaText}
          </a>
        </div>
      </div>
    );
  }

  const isLeft = imagePosition === "left";

  return (
    <div ref={ref} className="opacity-0 max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
      <div className={`flex flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 lg:gap-20`}>
        <div className="flex-shrink-0 md:w-[42%]">
          <img src={image} alt={imageAlt} className="w-full max-w-md object-contain" loading="lazy" />
        </div>
        <div className="flex-1">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-blush mb-4">{eyebrow}</p>
          <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-foreground mb-6">{heading}</h3>
          <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl mb-8">{copy}</p>
          <a href="#" className={`inline-block font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm hover:opacity-90 transition-opacity duration-300 ${ctaClasses}`}>
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  );
};

const ThreeLanes = () => {
  return (
    <section id="wellness" className="bg-card">
      <Lane
        eyebrow="Wellness"
        heading="Feel better from the inside out."
        copy="Products backed by science and real results — that I use every single day. From energy to metabolism to gut health, I've found what works and I want to share it with you."
        ctaText="See What I Use"
        ctaStyle="pink"
        image={kitchenPhoto}
        imageAlt="Alyssa in the kitchen with healthy food"
        imagePosition="left"
      />

      <Lane
        eyebrow="Business"
        heading="Ready to build something real?"
        copy="I've been in this industry for 15 years. I know what a great opportunity looks like — and this is it. Products you believe in, a team that supports you, and income that grows with you."
        ctaText="Learn About the Opportunity"
        ctaStyle="black"
        image={redCarpetPhoto}
        imageAlt="Alyssa at a Tranont event"
        imagePosition="right"
      />

      <Lane
        eyebrow="Real Estate"
        heading="Let's find your home."
        copy="Licensed realtor serving Florida. I bring the same energy to real estate that I bring to everything — all in, every time."
        ctaText="Let's Talk Real Estate"
        ctaStyle="pink"
        image={carSelfiePhoto}
        imageAlt="Alyssa working on real estate"
        imagePosition="background"
      />
    </section>
  );
};

export default ThreeLanes;
