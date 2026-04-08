import { useState, useEffect } from "react";
import { Instagram, Facebook, Menu, X } from "lucide-react";
import { useQuiz } from "@/components/QuizContext";

const navLinks = [
  { label: "Story", href: "#story" },
  { label: "Wellness", href: "#wellness" },
  { label: "Business", href: "#business" },
  { label: "Real Estate", href: "#realestate" },
  { label: "Travel", href: "#travel" },
  { label: "Connect", href: "#connect" },
  { label: "Book a Call", href: "#book-a-call", highlight: true },
];

const Navigation = () => {
  const { openQuiz } = useQuiz();
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
        {/* Logo */}
        <a href="#" className="flex flex-col items-start leading-none group flex-shrink-0">
          <span className="font-script text-2xl lg:text-3xl text-foreground group-hover:text-primary transition-colors duration-300">
            Alyssa Prince
          </span>
          <span className="font-body text-[0.5rem] tracking-[0.3em] uppercase text-muted-foreground mt-0.5 whitespace-nowrap">
            entrepreneur · realtor · empire builder
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative font-body text-xs tracking-[0.15em] uppercase transition-colors duration-300 py-1 whitespace-nowrap ${
                link.highlight
                  ? "border border-primary/40 text-primary px-4 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground"
                  : "text-foreground/80 hover:text-foreground group"
              }`}
            >
              {link.label}
              {!link.highlight && (
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* Right side: social icons + CTA + hamburger */}
        <div className="flex items-center gap-4">
          {/* Social icons */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="https://instagram.com/alyssam_prince"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.facebook.com/alyssa.adkins.10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={18} strokeWidth={1.5} />
            </a>
          </div>

          {/* CTA */}
          <button
            onClick={() => { openQuiz(); }}
            className="hidden lg:inline-block font-body text-xs font-medium tracking-[0.14em] uppercase px-6 py-2.5 rounded-full transition-all duration-300 bg-gradient-to-b from-foreground to-foreground/85 text-background shadow-md hover:shadow-lg hover:from-primary hover:to-primary/85 hover:text-primary-foreground hover:-translate-y-0.5"
          >
            Take the Quiz
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground/80 hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card/98 backdrop-blur-md px-6 pb-6 pt-2 animate-fade-in">
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

          {/* Mobile social + CTA */}
          <div className="flex items-center gap-5 mt-5">
            <a
              href="https://instagram.com/alyssam_prince"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.facebook.com/alyssa.adkins.10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} strokeWidth={1.5} />
            </a>
          </div>

          <button
            onClick={() => { setMobileOpen(false); openQuiz(); }}
            className="inline-block mt-4 bg-foreground text-background font-body text-sm font-medium tracking-[0.12em] uppercase px-6 py-2.5 rounded-full"
          >
            Take the Quiz
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
