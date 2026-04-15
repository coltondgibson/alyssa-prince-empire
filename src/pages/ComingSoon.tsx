import { Instagram, Facebook } from "lucide-react";
import portraitImage from "@/assets/alyssa-hero.jpg";

const ComingSoon = () => (
  <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
    {/* Decorative blush circles */}
    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/[0.07] blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.05] blur-3xl pointer-events-none" />

    <div className="relative z-10 max-w-lg mx-auto">
      <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-lg shadow-primary/20">
        <img src={portraitImage} alt="Alyssa Prince" className="w-full h-full object-cover object-top" />
      </div>

      <h1 className="font-heading text-4xl md:text-6xl text-foreground mb-2">Alyssa</h1>
      <span className="block font-script text-2xl md:text-4xl text-primary mb-6">Prince</span>

      <div className="w-16 h-[2px] bg-primary/60 mx-auto mb-6" />

      <p className="font-script text-3xl md:text-4xl text-primary mb-4">
        coming soon
      </p>
      <p className="font-body text-sm md:text-base text-muted-foreground mb-10 leading-relaxed">
        Entrepreneur · Health Coach · Empire Builder
      </p>

      <div className="flex items-center justify-center gap-6">
        <a
          href="https://instagram.com/alyssam_prince"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-600 transition-colors duration-300"
          aria-label="Instagram"
        >
          <Instagram size={24} strokeWidth={1.5} />
        </a>
        <a
          href="https://www.facebook.com/alyssa.adkins.10"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
          aria-label="Facebook"
        >
          <Facebook size={24} strokeWidth={1.5} />
        </a>
      </div>
    </div>
  </div>
);

export default ComingSoon;
