import { useState } from "react";
import alyssaPhoto from "@/assets/alyssa-smiling2.jpg";

const Quiz = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "https://tranont.link/kLj0M0N";
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-sm flex flex-col items-center">
        {/* Photo */}
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-[3px] border-primary/30 shadow-xl shadow-black/10 mb-8">
          <img
            src={alyssaPhoto}
            alt="Alyssa Prince"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Headline */}
        <h1 className="font-heading text-2xl md:text-3xl text-foreground text-center leading-snug mb-8">
          Hey! Before you take the quiz — drop your info below so I can personally follow up with you after you get your results 😊
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            className="w-full px-5 py-3.5 bg-card text-foreground font-body text-sm rounded-sm outline-none border border-border placeholder:text-muted-foreground focus:border-primary transition-colors"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-5 py-3.5 bg-card text-foreground font-body text-sm rounded-sm outline-none border border-border placeholder:text-muted-foreground focus:border-primary transition-colors"
          />
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="w-full px-5 py-3.5 bg-card text-foreground font-body text-sm rounded-sm outline-none border border-border placeholder:text-muted-foreground focus:border-primary transition-colors"
          />
          <button
            type="submit"
            className="w-full font-body text-sm tracking-[0.15em] uppercase px-8 py-4 rounded-sm transition-all duration-300 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5"
          >
            Take The Quiz →
          </button>
        </form>

        {/* Small disclaimer */}
        <p className="font-body text-xs text-muted-foreground text-center mt-4">
          I'll reach out personally. No spam ever.
        </p>
      </div>
    </div>
  );
};

export default Quiz;
