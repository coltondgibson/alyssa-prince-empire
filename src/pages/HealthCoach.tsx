import LandingPageLayout from "@/components/LandingPageLayout";

const HealthCoach = () => (
  <LandingPageLayout
    headline="Ready to feel your best?"
    subheadline="Certified health coach. All in, every time. Let's build your healthiest life together."
    description=""
    bullets={[
      "Personalized wellness guidance",
      "Honest, direct, always available",
      "Brings the same energy to every client",
      "Your health and goals first — always",
    ]}
    submitLabel="Let's Talk Health Coaching →"
    onSubmit={() => {}}
    afterSubmitMessage="Thank you! Alyssa will be in touch with you shortly about health coaching."
    footerNote="Response within 24 hours."
  />
);

export default HealthCoach;
