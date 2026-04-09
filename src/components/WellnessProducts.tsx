import { useState } from "react";
import { Link } from "react-router-dom";
import ProductModal from "@/components/ProductModal";
import greensPhoto from "@/assets/greens-product.png";
import transformPhoto from "@/assets/transform-product.png";
import proteinPhoto from "@/assets/clear-protein-product.png";
import glowPhoto from "@/assets/glow-product.png";

const PRODUCTS = [
  {
    name: "Greens",
    slug: "greens",
    shopUrl: "https://tranont.link/QUGk7sp",
    description: "My daily non-negotiable. 35+ fruits and vegetables, prebiotics, probiotics, and digestive enzymes all in one scoop. I start every single morning with this.",
    image: greensPhoto,
  },
  {
    name: "Transform",
    slug: "transform",
    shopUrl: "https://tranont.link/2no6UIh",
    description: "This one changed how I think about food. It converts sugar into fiber before your body processes it — reducing cravings, regulating glucose, and supporting fat burning. I take it before every meal.",
    image: transformPhoto,
  },
  {
    name: "Clear Protein",
    slug: "clear-protein",
    shopUrl: "https://tranont.link/oPFjEOY",
    description: "20g of clean whey protein with zero bloat. Light, refreshing, and actually tastes good. Built for women.",
    image: proteinPhoto,
  },
  {
    name: "Glow-M",
    slug: "glow-m",
    shopUrl: "https://tranont.link/by4KlLt",
    description: "Marine collagen that actually works. Faster absorbing than regular collagen, packed with biotin and antioxidants for your hair, skin, and nails. I noticed a difference within weeks.",
    image: glowPhoto,
  },
];

const WellnessProducts = () => {
  const [modalUrl, setModalUrl] = useState<string | null>(null);

  return (
    <>
      <div className="bg-background px-6 lg:px-10 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <div
                key={product.name}
                className="group relative bg-card rounded-lg text-center transition-all duration-500 hover:-translate-y-2 shadow-[0_4px_24px_-6px_hsl(var(--primary)/0.12)] hover:shadow-[0_16px_48px_-12px_hsl(var(--primary)/0.3)] overflow-hidden flex flex-col"
              >
                <div className="bg-background/60 p-6 pb-4 flex items-center justify-center h-64 md:h-72">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 pt-4 flex flex-col flex-1">
                  <h4 className="font-heading text-2xl md:text-3xl text-foreground mb-3">
                    {product.name}
                  </h4>
                  <p className="font-body text-sm md:text-base leading-relaxed text-foreground/75 mb-6 flex-1">
                    {product.description}
                  </p>
                  <div className="flex flex-col gap-2.5">
                    <button
                      onClick={() => setModalUrl(product.shopUrl)}
                      className="inline-block font-body text-xs tracking-[0.15em] uppercase px-6 py-3 rounded-sm transition-all duration-300 bg-foreground text-background hover:bg-foreground/85 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                    >
                      Shop Now →
                    </button>
                    <Link
                      to={`/wellness/${product.slug}`}
                      className="inline-block font-body text-xs tracking-[0.15em] uppercase px-6 py-2.5 rounded-sm transition-all duration-300 border border-foreground/20 text-foreground/70 hover:border-foreground/40 hover:text-foreground"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/wellness"
              className="inline-block font-body text-sm tracking-[0.12em] uppercase px-10 py-4 rounded-sm transition-all duration-300 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5"
            >
              See My Full Routine →
            </Link>
          </div>
        </div>
      </div>
      <ProductModal
        open={!!modalUrl}
        onClose={() => setModalUrl(null)}
        shopUrl={modalUrl || ""}
      />
    </>
  );
};

export default WellnessProducts;
