import { createContext, useContext } from "react";

interface QuizContextType {
  openQuiz: () => void;
  selectedProduct: string | null;
  setSelectedProduct: (product: string | null) => void;
}

const QuizContext = createContext<QuizContextType>({
  openQuiz: () => {},
  selectedProduct: null,
  setSelectedProduct: () => {},
});

export const useQuiz = () => useContext(QuizContext);
export const QuizProvider = QuizContext.Provider;
