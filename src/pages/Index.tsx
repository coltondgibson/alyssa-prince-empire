import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CredentialsBar from "@/components/CredentialsBar";
import WhoIsAlyssa from "@/components/WhoIsAlyssa";
import OriginStory from "@/components/OriginStory";
import PartnersStory from "@/components/PartnersStory";
import ThreeLanes from "@/components/ThreeLanes";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CredentialsBar />
      <WhoIsAlyssa />
      <OriginStory />
      <PartnersStory />
      <ThreeLanes />
    </div>
  );
};

export default Index;
