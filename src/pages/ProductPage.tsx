import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PRODUCTS: Record<string, { name: string; shopUrl: string }> = {
  greens: { name: "Greens", shopUrl: "https://tranont.link/QUGk7sp" },
  transform: { name: "Transform", shopUrl: "https://tranont.link/2no6UIh" },
  "clear-protein": { name: "Clear Protein", shopUrl: "https://tranont.link/oPFjEOY" },
  "glow-m": { name: "Glow-M", shopUrl: "https://tranont.link/by4KlLt" },
  enrich: { name: "Enrich", shopUrl: "https://tranont.link/VreN8i1" },
  balance: { name: "Balance", shopUrl: "https://tranont.link/aObiHqE" },
  activate: { name: "Activate", shopUrl: "https://tranont.link/XZzDqtR" },
  focus: { name: "Focus", shopUrl: "https://tranont.link/SsqAM9O" },
  zest: { name: "Zest", shopUrl: "https://tranont.link/UHHwbeH" },
};

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? PRODUCTS[slug] : undefined;

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!product) return <Navigate to="/wellness" replace />;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-5 px-6 md:px-10 flex items-center gap-4">
        <Link
          to="/wellness"
          className="flex items-center gap-2 font-body text-sm tracking-wide text-foreground/60 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Link>
        <div className="flex-1 text-center pr-16">
          <span className="font-heading text-lg md:text-xl tracking-wide text-foreground">
            Alyssa Prince
          </span>
        </div>
      </header>

      <main className="px-6 md:px-10 pb-20 pt-6 md:pt-10">
        <div className="max-w-md mx-auto text-center">
          {/* Alyssa photo + name */}
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face"
            alt="Alyssa Prince"
            className="w-16 h-16 rounded-full object-cover mx-auto mb-3"
          />
          <p className="font-body text-xs tracking-[0.15em] uppercase text-foreground/50 mb-8">
            Alyssa Prince
          </p>

          {/* Product headline */}
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
            {product.name}
          </h1>

          {/* Shop Now button */}
          <a
            href={product.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm transition-all duration-300 bg-foreground text-background shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Shop Now →
          </a>

          {/* Divider */}
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-foreground/10" />
            <p className="font-body text-xs text-foreground/50 text-center leading-relaxed max-w-[200px]">
              Not ready to buy yet? Let Alyssa personally follow up with you.
            </p>
            <div className="flex-1 h-px bg-foreground/10" />
          </div>

          {/* Form or thank you */}
          {submitted ? (
            <div className="py-8">
              <p className="font-script text-2xl md:text-3xl text-foreground mb-3">
                Thank you! 💌
              </p>
              <p className="font-body text-foreground/75 text-sm md:text-base">
                Perfect! Alyssa will be in touch with you personally.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="w-full px-5 py-3.5 bg-muted text-foreground font-body text-sm rounded-sm outline-none placeholder:text-muted-foreground"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-5 py-3.5 bg-muted text-foreground font-body text-sm rounded-sm outline-none placeholder:text-muted-foreground"
              />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                className="w-full px-5 py-3.5 bg-muted text-foreground font-body text-sm rounded-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="w-full font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm transition-all duration-300 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5"
              >
                Yes, Follow Up With Me →
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
