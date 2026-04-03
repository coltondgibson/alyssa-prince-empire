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
          ? "bg-card/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
        {/* Logo */}
        <a href="#" className="font-heading italic text-2xl lg:text-3xl tracking-wide text-foreground">
          AP
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#"
          className="hidden md:inline-block bg-primary text-primary-foreground font-body text-sm tracking-[0.12em] uppercase px-6 py-2.5 rounded-sm hover:opacity-90 transition-opacity duration-300"
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
        <div className="md:hidden bg-card/98 backdrop-blur-md px-6 pb-6 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 font-body text-sm tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="inline-block mt-4 bg-primary text-primary-foreground font-body text-sm tracking-[0.12em] uppercase px-6 py-2.5 rounded-sm"
          >
            Take the Quiz
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
