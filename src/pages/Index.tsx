import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CredentialsBar from "@/components/CredentialsBar";
import WhoIsAlyssa from "@/components/WhoIsAlyssa";
import OriginStory from "@/components/OriginStory";
import PartnersStory from "@/components/PartnersStory";
import ThreeLanes from "@/components/ThreeLanes";
import TravelTeaser from "@/components/TravelTeaser";
import CommunitySection from "@/components/CommunitySection";
import WeddingMoment from "@/components/WeddingMoment";
import QuizSection from "@/components/QuizSection";
import EmailOptIn from "@/components/EmailOptIn";
import Footer from "@/components/Footer";

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
      <TravelTeaser />
      <CommunitySection />
      <WeddingMoment />
      <QuizSection />
      <EmailOptIn />
      <Footer />
    </div>
  );
};

export default Index;
