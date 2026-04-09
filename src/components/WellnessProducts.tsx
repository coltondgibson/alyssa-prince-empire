import { Link } from "react-router-dom";
import { useQuiz } from "@/components/QuizContext";
import greensPhoto from "@/assets/greens-product.png";
import transformPhoto from "@/assets/transform-product.png";
import proteinPhoto from "@/assets/clear-protein-product.png";
import glowPhoto from "@/assets/glow-product.png";

interface Product {
  name: string;
  slug: string;
  description: string;
  image?: string;
}

interface Category {
  label: string;
  products: Product[];
}

const CATEGORIES: Category[] = [
  {
    label: "Feel Better",
    products: [
      {
        name: "Greens",
        slug: "greens",
        description: "My daily non-negotiable. 35+ fruits and vegetables, prebiotics, probiotics, and digestive enzymes all in one scoop. I start every single morning with this.",
        image: greensPhoto,
      },
      {
        name: "Enrich",
        slug: "enrich",
        description: "Your gut will thank you. A full-spectrum digestive enzyme blend with stabilized probiotics that helps with bloat, digestion, and actually absorbing the nutrients you're already eating.",
      },
      {
        name: "Balance",
        slug: "balance",
        description: "The one that replaced every other vitamin I was taking. Complete multi-vitamin, minerals, and antioxidants in one — designed for real absorption, not just passing through.",
      },
    ],
  },
  {
    label: "Look Better",
    products: [
      {
        name: "Glow-M",
        slug: "glow-m",
        description: "Marine collagen that actually works. Clinically studied, faster absorbing than regular collagen, and packed with biotin and antioxidants for your hair, skin, and nails. I noticed a difference within weeks.",
        image: glowPhoto,
      },
      {
        name: "Clear Protein",
        slug: "clear-protein",
        description: "20g of clean whey protein with zero bloat. Light, refreshing, and actually tastes good. Built for women.",
        image: proteinPhoto,
      },
    ],
  },
  {
    label: "Perform Better",
    products: [
      {
        name: "Transform",
        slug: "transform",
        description: "This one changed how I think about food. It converts sugar into fiber before your body processes it — reducing cravings, regulating glucose, and supporting fat burning. I take it before every meal.",
        image: transformPhoto,
      },
      {
        name: "Activate",
        slug: "activate",
        description: "Pairs with Transform as part of the Daily Health System. Supports appetite control and metabolic function so your body is working with you, not against you.",
      },
      {
        name: "Focus",
        slug: "focus",
        description: "Clean mental energy without the crash. B vitamins, Lion's Mane, and green tea extract that sharpen focus and support immunity. No jitters, no withdrawal.",
      },
      {
        name: "Zest",
        slug: "zest",
        description: "My grab-and-go energy stick. Natural caffeine with amino acids, vitamins, and antioxidants. A much smarter alternative to coffee or energy drinks.",
      },
    ],
  },
];

const WellnessProducts = () => {
  const { openQuiz } = useQuiz();

  return (
    <div className="bg-background px-6 lg:px-10 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        {CATEGORIES.map((category) => (
          <div key={category.label} className="mb-16 last:mb-0">
            <p className="font-script text-xl md:text-2xl text-primary mb-8 text-center">
              {category.label}
            </p>
            <div className={`grid grid-cols-1 ${category.products.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : category.products.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'} gap-8`}>
              {category.products.map((product) => (
                <div
                  key={product.name}
                  className="group relative bg-card rounded-lg text-center transition-all duration-500 hover:-translate-y-2 shadow-[0_4px_24px_-6px_hsl(var(--primary)/0.12)] hover:shadow-[0_16px_48px_-12px_hsl(var(--primary)/0.3)] overflow-hidden flex flex-col"
                >
                  {product.image ? (
                    <div className="bg-background/60 p-6 pb-4 flex items-center justify-center h-64 md:h-72">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="bg-background/40 flex items-center justify-center h-48 md:h-56">
                      <span className="font-heading text-4xl md:text-5xl text-primary/20">
                        {product.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="p-8 pt-4 flex flex-col flex-1">
                    <p className="font-body text-[0.65rem] tracking-[0.3em] uppercase text-primary/70 mb-1">
                      {category.label}
                    </p>
                    <h4 className="font-heading text-2xl md:text-3xl text-foreground mb-3">
                      {product.name}
                    </h4>
                    <p className="font-body text-sm md:text-base leading-relaxed text-foreground/75 mb-6 flex-1">
                      {product.description}
                    </p>
                    <Link
                      to={`/wellness/${product.slug}`}
                      className="inline-block font-body text-xs tracking-[0.15em] uppercase px-6 py-3 rounded-sm transition-all duration-300 bg-foreground text-background hover:bg-foreground/85 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Quiz CTA */}
        <div className="text-center mt-16 pt-12 border-t border-primary/10">
          <p className="font-body text-lg md:text-xl leading-relaxed text-foreground/80 mb-6 max-w-xl mx-auto">
            Not sure which product is right for you? Answer 3 quick questions and I'll point you in the right direction.
          </p>
          <Link
            to="/quiz"
            className="inline-block font-body text-sm tracking-[0.12em] uppercase px-10 py-4 rounded-sm transition-all duration-300 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5"
          >
            Take the Quiz →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WellnessProducts;
