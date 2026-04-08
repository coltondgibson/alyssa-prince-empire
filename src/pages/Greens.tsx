import LandingPageLayout from "@/components/LandingPageLayout";

const Greens = () => (
  <LandingPageLayout
    headline="The one thing Alyssa drinks every single morning."
    subheadline="Over 35 fruits and vegetables. Prebiotics. Probiotics. Digestive enzymes. In one scoop."
    description=""
    bullets={[
      "More energy without the caffeine crash",
      "Better digestion from day one",
      "The easiest healthy habit you'll ever build",
      "Non-negotiable for Alyssa every single day",
    ]}
    submitLabel="Send Me The Details →"
    onSubmit={() => window.open("https://tranont.link/QUGk7sp", "_blank", "noopener,noreferrer")}
    footerNote="You'll hear from Alyssa personally. No spam ever."
  />
);

export default Greens;
