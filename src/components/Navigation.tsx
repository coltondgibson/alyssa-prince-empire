import { useState, useEffect } from "react";

const navLinks = [
  { label: "Story", href: "#story" },
  { label: "Wellness", href: "#wellness" },
  { label: "Business", href: "#business" },
  { label: "Real Estate", href: "#realestate" },
  { label: "Travel", href: "#travel" },
  { label: "Connect", href: "#connect" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10">
        {/* Logo — elegant script monogram */}
        <a href="#" className="flex flex-col items-center leading-none group">
          <span className="font-script text-3xl lg:text-4xl text-foreground group-hover:text-primary transition-colors duration-300">
            Alyssa Prince
          </span>
          <span className="font-body text-[0.55rem] tracking-[0.35em] uppercase text-muted-foreground mt-0.5">
            entrepreneur · realtor · builder
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative font-body text-xs tracking-[0.18em] uppercase text-foreground/80 hover:text-foreground transition-colors duration-300 group py-1"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#"
          className="hidden md:inline-block bg-foreground text-background font-body text-xs font-medium tracking-[0.14em] uppercase px-6 py-2.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Take the Quiz
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-md px-6 pb-6 pt-2 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 font-body text-sm tracking-[0.15em] uppercase text-foreground/80 hover:text-foreground transition-colors border-b border-border/30 last:border-b-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="inline-block mt-4 bg-foreground text-background font-body text-sm font-medium tracking-[0.12em] uppercase px-6 py-2.5 rounded-full"
          >
            Take the Quiz
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
