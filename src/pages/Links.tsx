import alyssaPhoto from "@/assets/alyssa-smiling2.jpg";
import { Instagram, Facebook } from "lucide-react";

const links = [
  {
    label: "Take the Quiz ✨",
    href: "/start",
    sub: "Find your perfect path",
  },
  {
    label: "Shop My Favorites",
    href: "/greens",
    sub: "Products I use every single day",
  },
  {
    label: "Join My Team",
    href: "/business",
    sub: "Build something real with me",
  },
  {
    label: "Work With Me 1 on 1 →",
    href: "/healthcoach",
    sub: "Let's build your healthiest life",
  },
  {
    label: "Travel — Coming Soon ✈️",
    href: "/travel",
    sub: "Be first to know",
  },
  {
    label: "Book a Call With Me",
    href: "#",
    sub: "Coming Soon",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/alyssam_prince",
    external: true,
    sub: "@alyssam_prince",
  },
];

const Links = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-cream">
      <div className="relative z-10 flex flex-col items-center w-full max-w-md mx-auto px-5 py-10 md:py-14">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-[3px] border-primary/30 shadow-xl shadow-black/10 mb-5">
          <img
            src={alyssaPhoto}
            alt="Alyssa Prince"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <a href="https://instagram.com/alyssam_prince" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-primary transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-primary transition-colors">
            <Facebook size={20} />
          </a>
        </div>

        <h1 className="font-heading text-3xl md:text-4xl text-foreground tracking-wide mb-1.5">
          Alyssa Prince
        </h1>

        <p className="font-body text-sm md:text-base text-foreground/75 text-center leading-relaxed mb-2 max-w-xs">
          Helping women build the life they actually want.
        </p>

        <p className="font-body text-[10px] md:text-xs tracking-[0.18em] uppercase text-muted-foreground text-center mb-10">
          Entrepreneur · Health Coach · Empire Builder · World Traveler
        </p>

        <div className="w-full flex flex-col gap-3">
          {links.map(({ label, href, external, sub }) => (
            <a
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group block w-full rounded-xl px-5 py-4 bg-foreground/[0.03] border border-foreground/10 transition-all duration-300 hover:bg-primary/10 hover:border-primary/25 hover:shadow-md hover:shadow-primary/10 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="block font-body text-sm md:text-base font-medium text-foreground tracking-wide">
                    {label}
                  </span>
                  <span className="block font-body text-[11px] md:text-xs text-muted-foreground mt-0.5">
                    {sub}
                  </span>
                </div>
                <span className="text-foreground/30 group-hover:text-primary transition-colors text-sm ml-3">
                  ›
                </span>
              </div>
            </a>
          ))}
        </div>

        <p className="font-body text-[10px] tracking-wide text-muted-foreground/50 mt-auto pt-12">
          © 2026 Alyssa Prince
        </p>
      </div>
    </div>
  );
};

export default Links;
