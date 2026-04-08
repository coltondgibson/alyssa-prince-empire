import LandingPageLayout from "@/components/LandingPageLayout";

const Business = () => (
  <LandingPageLayout
    headline="Ready to build something real?"
    subheadline="15 years in this industry. I know what a real opportunity looks like. This is it."
    description=""
    bullets={[
      "Products you can actually believe in",
      "A team that shows up for you",
      "Income that grows as you grow",
      "A leader who has actually done it",
    ]}
    submitLabel="I Want To Learn More →"
    onSubmit={() => window.open("https://tranont.link/sAs4KVu", "_blank", "noopener,noreferrer")}
    footerNote="No pressure. Just a real conversation."
  />
);

export default Business;
