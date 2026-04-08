import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CredentialsBar from "@/components/CredentialsBar";
import WhoIsAlyssa from "@/components/WhoIsAlyssa";
import TeamSection from "@/components/TeamSection";
import OriginStory from "@/components/OriginStory";
import PartnersStory from "@/components/PartnersStory";
import LifePhotoStrip from "@/components/LifePhotoStrip";
import ThreeLanes from "@/components/ThreeLanes";
import TravelTeaser from "@/components/TravelTeaser";
import CommunitySection from "@/components/CommunitySection";
import WeddingMoment from "@/components/WeddingMoment";
import QuizSection from "@/components/QuizSection";
import BookACall from "@/components/BookACall";
import EmailOptIn from "@/components/EmailOptIn";
import Footer from "@/components/Footer";
import QuizModal from "@/components/QuizModal";
import { QuizProvider } from "@/components/QuizContext";

const Index = () => {
  const [quizOpen, setQuizOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <QuizProvider value={{ openQuiz: () => setQuizOpen(true), selectedProduct, setSelectedProduct }}>
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        <CredentialsBar />
        <WhoIsAlyssa />
        <TeamSection />
        <OriginStory />
        <PartnersStory />
        <LifePhotoStrip />
        <ThreeLanes />
        <TravelTeaser />
        <CommunitySection />
        <WeddingMoment />
        <QuizSection />
        <BookACall />
        <EmailOptIn />
        <Footer />
      </div>
      <QuizModal open={quizOpen} onClose={() => setQuizOpen(false)} />
    </QuizProvider>
  );
};

export default Index;
