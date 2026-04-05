const Footer = () => {
  return (
    <footer className="bg-brand-black py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <span className="font-heading italic text-2xl text-card/90">AP</span>
          <p className="font-body text-sm md:text-base tracking-[0.12em] text-card/60 text-center">
            Alyssa Prince — Entrepreneur · Realtor · Tranont Partner
          </p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/alyssam_prince" target="_blank" rel="noopener noreferrer" className="font-body text-xs tracking-wide text-card/60 hover:text-blush transition-colors">
              @alyssam_prince
            </a>
            <span className="text-card/30">·</span>
            <a href="#" className="font-body text-xs tracking-wide text-card/60 hover:text-blush transition-colors">
              Facebook
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-card/10 mb-8" />

        {/* Disclaimer */}
        <p className="font-body text-xs md:text-sm leading-relaxed text-card/40 text-center max-w-4xl mx-auto">
          Alyssa Prince is an independent partner with Tranont. Statements on this site have not been evaluated by the FDA. Products are not intended to diagnose, treat, cure, or prevent any disease. Results may vary. © 2026 Alyssa Prince. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
