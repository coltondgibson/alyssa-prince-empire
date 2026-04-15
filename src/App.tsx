import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Links from "./pages/Links";
import Wellness from "./pages/Wellness";
import ProductPage from "./pages/ProductPage";
import Greens from "./pages/Greens";
import Business from "./pages/Business";
import Travel from "./pages/Travel";
import HealthCoach from "./pages/HealthCoach";
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/links" element={<Links />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/wellness/:slug" element={<ProductPage />} />
          <Route path="/greens" element={<Greens />} />
          <Route path="/business" element={<Business />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/healthcoach" element={<HealthCoach />} />
          <Route path="/start" element={<Quiz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
