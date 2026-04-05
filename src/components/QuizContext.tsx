import { createContext, useContext } from "react";

const QuizContext = createContext<{ openQuiz: () => void }>({ openQuiz: () => {} });

export const useQuiz = () => useContext(QuizContext);
export const QuizProvider = QuizContext.Provider;
