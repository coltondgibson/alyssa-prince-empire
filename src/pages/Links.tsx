import alyssaPhoto from "@/assets/alyssa-smiling2.jpg";

const links = [
  {
    label: "Take the Quiz ✨",
    href: "/#quiz",
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
    label: "Real Estate",
    href: "/realestate",
    sub: "Licensed realtor serving Florida",
  },
  {
    label: "Travel — Coming Soon ✈️",
    href: "/travel",
    sub: "Be first to know",
  },
  {
    label: "Book a Call With Me",
    href: "#",
    sub: "Free 15 minute conversation",
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
    <div className="relative min-h-screen flex flex-col items-center">
      {/* Clean background */}
      <div className="fixed inset-0 bg-cream" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md mx-auto px-5 py-10 md:py-14">
        {/* Profile photo */}
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-[3px] border-white/40 shadow-xl shadow-black/30 mb-5">
          <img
            src={alyssaPhoto}
            alt="Alyssa Prince"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Name */}
        <h1 className="font-heading text-3xl md:text-4xl text-white tracking-wide mb-1.5">
          Alyssa Prince
        </h1>

        {/* Tagline */}
        <p className="font-body text-sm md:text-base text-white/85 text-center leading-relaxed mb-2 max-w-xs">
          Helping women build the life they actually want.
        </p>

        {/* Credentials */}
        <p className="font-body text-[10px] md:text-xs tracking-[0.18em] uppercase text-white/55 text-center mb-10">
          Entrepreneur · Realtor · Empire Builder · World Traveler
        </p>

        {/* Buttons */}
        <div className="w-full flex flex-col gap-3">
          {links.map(({ label, href, external, sub }) => (
            <a
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group block w-full rounded-xl px-5 py-4 bg-white/12 backdrop-blur-md border border-white/15 transition-all duration-300 hover:bg-white/22 hover:border-white/30 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="block font-body text-sm md:text-base font-medium text-white tracking-wide">
                    {label}
                  </span>
                  <span className="block font-body text-[11px] md:text-xs text-white/55 mt-0.5">
                    {sub}
                  </span>
                </div>
                <span className="text-white/40 group-hover:text-white/70 transition-colors text-sm ml-3">
                  ›
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="font-body text-[10px] tracking-wide text-white/35 mt-auto pt-12">
          © 2026 Alyssa Prince
        </p>
      </div>
    </div>
  );
};

export default Links;
