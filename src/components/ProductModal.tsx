import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ProductModalProps {
  open: boolean;
  onClose: () => void;
  headline: string;
  subtext: string;
  submitUrl: string;
}

const ProductModal = ({ open, onClose, headline, subtext, submitUrl }: ProductModalProps) => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    setFirstName("");
    setEmail("");
    setPhone("");
    window.open(submitUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) onClose(); }}>
      <DialogContent className="bg-[#fdfaf6] border-none shadow-2xl max-w-md w-[92vw] rounded-xl p-8 sm:p-10">
        <DialogHeader className="text-center sm:text-center space-y-3">
          <DialogTitle className="font-heading text-2xl sm:text-3xl text-foreground leading-tight">
            {headline}
          </DialogTitle>
          <DialogDescription className="font-body text-sm sm:text-base text-foreground/70 leading-relaxed">
            {subtext}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            required
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="font-body w-full px-4 py-3 rounded-sm bg-white border border-foreground/10 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
          />
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="font-body w-full px-4 py-3 rounded-sm bg-white border border-foreground/10 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
          />
          <input
            type="tel"
            required
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="font-body w-full px-4 py-3 rounded-sm bg-white border border-foreground/10 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
          />
          <button
            type="submit"
            className="mt-2 font-body text-sm tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm transition-all duration-300 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5 w-full"
          >
            Send Me The Details →
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
