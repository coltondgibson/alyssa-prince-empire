import { useEffect, useRef } from "react";
import { Heart, Quote } from "lucide-react";
import glamPortrait from "@/assets/alyssa-glam-portrait.jpg";
import confidentAlyssa from "@/assets/Confident_Alyssa.jpg";
import carSelfiePhoto from "@/assets/alyssa-car-selfie.png";

const OriginStory = () => {
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

  return (
    <section className="bg-card py-24 md:py-32">
      <div ref={ref} className="opacity-0 max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="font-body tracking-[0.3em] uppercase text-primary mb-4 text-xl">
            The Real Story
          </p>
          <p className="font-script text-muted-foreground mb-8 text-xl">
            the chapter no one expected ✨
          </p>

          <h2 className="font-heading italic text-3xl md:text-4xl lg:text-[52px] leading-[1.15] text-foreground mb-12">
            "They wrote me off as a teen mom. They had no idea what was coming."
          </h2>

          <div className="font-body text-[15px] leading-[2] text-muted-foreground space-y-6 mb-14">
            <p className="text-2xl">
              I was a single mom with two kids at 20. I've waited tables. Scrubbed toilets. Used food
              stamps and Medicaid. Lived in government housing. Had business partners lie to me, betray
              me, and steal what I earned. Had businesses fail. Been so heartbroken I was literally
              paralyzed.
            </p>
            <p className="text-2xl">I didn't get a college degree. They wrote me off.</p>
            <p className="text-2xl">
              A lot of you see where I am now — the relationship, the business, the life — and say
              "must be nice" or "she's so lucky."
            </p>
            <p className="text-2xl">You didn't see the hell I went through to get here.</p>
            <p className="text-2xl">
              I share this because I want you to know — no matter what you've been through, you can be
              better, do better, want better, and achieve better.
            </p>
            <p className="text-2xl">It's not too late.</p>
          </div>

          <a
            href="#connect"
            className="inline-block bg-primary text-primary-foreground font-body text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-sm hover:opacity-90 transition-opacity duration-300"
          >
            I'm Ready For Better
          </a>
        </div>

        {/* Photos — confident Alyssa as hero + small birthday polaroid */}
        <div className="flex-shrink-0 md:max-w-[38%] relative">
          {/* Main confident photo */}
          <div className="relative">
            <img
              src={confidentAlyssa}
              alt="Alyssa Prince on stage — look at her now"
              className="w-full max-w-sm rounded-sm object-cover aspect-[3/4] shadow-lg"
              loading="lazy"
            />
            {/* Heart accent */}
            <div className="absolute -bottom-4 -right-4 bg-primary rounded-full p-3 shadow-md">
              <Heart size={22} className="text-primary-foreground fill-primary-foreground" strokeWidth={1.5} />
            </div>
          </div>

          {/* Small inset polaroid — glam portrait */}
          <div
            className="polaroid absolute -bottom-16 -left-6 w-28 md:w-36 hidden md:block"
            style={{ transform: "rotate(-4deg)", zIndex: 10 }}
          >
            <img
              src={glamPortrait}
              alt="Alyssa glam portrait"
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
            <p className="polaroid-caption text-xs">Built from nothing 💪</p>
          </div>

          {/* Small inset polaroid — car selfie */}
          <div
            className="polaroid absolute -top-8 -left-8 w-24 md:w-32 hidden md:block"
            style={{ transform: "rotate(3deg)", zIndex: 10 }}
          >
            <img
              src={carSelfiePhoto}
              alt="Alyssa car selfie"
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
            <p className="polaroid-caption text-xs">Living my best life ✨</p>
          </div>

          {/* Testimonial below photos */}
          <div className="mt-16 hidden md:block">
            <Quote size={20} className="text-primary mb-2 opacity-60" />
            <p className="font-script text-lg text-muted-foreground leading-relaxed mb-3">
              "Alyssa showed me that my past doesn't define my future. She's the real deal — she lived it."
            </p>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-primary">
              — Community Member
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
