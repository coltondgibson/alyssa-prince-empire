import { useEffect, useRef } from "react";
import birthdayPhoto from "@/assets/alyssa-birthday.jpg";

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
          <p className="font-body text-xs tracking-[0.3em] uppercase text-blush mb-8">
            The Real Story
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

        {/* Birthday Photo */}
        <div className="flex-shrink-0 md:max-w-[38%]">
          <img
            src={birthdayPhoto}
            alt="Alyssa celebrating — She Found Her Prince"
            className="w-full max-w-sm object-cover rounded-sm aspect-[3/4]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default OriginStory;