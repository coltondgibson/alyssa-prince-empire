import LandingPageLayout from "@/components/LandingPageLayout";

const Travel = () => (
  <LandingPageLayout
    headline="The next chapter is travel. ✈️"
    subheadline="Real freedom means choosing where you go, when you go, and how you get there. Something exciting is coming."
    description=""
    bullets={[
      "Exclusive travel program through Tranont",
      "Launching very soon",
      "Get first access when it drops",
      "Built for people who want to actually live their life",
    ]}
    submitLabel="Notify Me First →"
    onSubmit={() => window.open("https://tranont.link/srCSRIX", "_blank", "noopener,noreferrer")}
    footerNote="Be first to know. No spam ever."
  />
);

export default Travel;
