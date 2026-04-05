import { useEffect, useRef } from "react";
import { Heart } from "lucide-react";
import birthdayPhoto from "@/assets/alyssa-birthday.jpg";
import confidentAlyssa from "@/assets/Confident_Alyssa.jpg";

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
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            The Real Story
          </p>
          <p className="font-script text-lg text-muted-foreground mb-8">
            the chapter no one expected ✨
          </p>

          <h2 className="font-heading italic text-3xl md:text-4xl lg:text-[52px] leading-[1.15] text-foreground mb-12">
            "They wrote me off as a teen mom. They had no idea what was coming."
          </h2>

          <div className="font-body text-[15px] leading-[2] text-muted-foreground space-y-6 mb-14">
            <p>
              I was a single mom with two kids at 20. I've waited tables. Scrubbed toilets. Used food
              stamps and Medicaid. Lived in government housing. Had business partners lie to me, betray
              me, and steal what I earned. Had businesses fail. Been so heartbroken I was literally
              paralyzed.
            </p>
            <p>I didn't get a college degree. They wrote me off.</p>
            <p>
              A lot of you see where I am now — the relationship, the business, the life — and say
              "must be nice" or "she's so lucky."
            </p>
            <p>You didn't see the hell I went through to get here.</p>
            <p>
              I share this because I want you to know — no matter what you've been through, you can be
              better, do better, want better, and achieve better.
            </p>
            <p>It's not too late.</p>
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

          {/* Small inset polaroid */}
          <div
            className="polaroid absolute -bottom-10 -left-6 w-28 md:w-36 hidden md:block"
            style={{ transform: "rotate(-4deg)", zIndex: 10 }}
          >
            <img
              src={birthdayPhoto}
              alt="Alyssa celebrating"
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
            <p className="polaroid-caption text-xs">She Found Her Prince 👑</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
