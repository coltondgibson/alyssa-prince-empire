const links = [
  { label: "Take the Quiz ✨", href: "/#quiz" },
  { label: "Shop My Favorites", href: "/greens" },
  { label: "Join My Team", href: "/business" },
  { label: "Real Estate", href: "/realestate" },
  { label: "Travel — Coming Soon ✈️", href: "/travel" },
  { label: "Book a Call With Me", href: "#" },
  {
    label: "Instagram",
    href: "https://instagram.com/alyssam_prince",
    external: true,
  },
];

const Links = () => {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center px-5 py-12 md:py-16">
      {/* Avatar initial */}
      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-primary/15 flex items-center justify-center shadow-md mb-5">
        <span className="font-heading italic text-3xl md:text-4xl text-primary">AP</span>
      </div>

      {/* Name */}
      <h1 className="font-heading text-2xl md:text-3xl text-foreground tracking-wide mb-1">
        Alyssa Prince
      </h1>
      <p className="font-body text-xs md:text-sm tracking-[0.15em] text-muted-foreground mb-10">
        Entrepreneur · Realtor · Tranont Partner
      </p>

      {/* Links */}
      <div className="w-full max-w-sm flex flex-col gap-3">
        {links.map(({ label, href, external }) => (
          <a
            key={label}
            href={href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="block w-full text-center font-body text-sm tracking-[0.1em] py-3.5 rounded-sm bg-foreground/[0.03] text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:shadow-primary/20 hover:-translate-y-0.5"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Footer */}
      <p className="font-body text-[10px] tracking-wide text-muted-foreground mt-auto pt-12">
        © 2026 Alyssa Prince
      </p>
    </div>
  );
};

export default Links;
