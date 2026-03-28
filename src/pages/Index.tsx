import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CredentialsBar from "@/components/CredentialsBar";
import WhoIsAlyssa from "@/components/WhoIsAlyssa";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CredentialsBar />
      <WhoIsAlyssa />
    </div>
  );
};

export default Index;
