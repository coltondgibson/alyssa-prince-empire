import LandingPageLayout from "@/components/LandingPageLayout";

const RealEstate = () => (
  <LandingPageLayout
    headline="Looking for your home in Florida?"
    subheadline="Licensed realtor. All in, every time. Let's find you the right home."
    description=""
    bullets={[
      "Licensed Florida realtor",
      "Honest, direct, always available",
      "Brings the same energy to every deal",
      "Your best interest first — always",
    ]}
    submitLabel="Let's Talk Real Estate →"
    onSubmit={() => {}}
    afterSubmitMessage="Thank you! Alyssa will be in touch with you shortly about real estate."
    footerNote="Serving Florida. Response within 24 hours."
  />
);

export default RealEstate;
