import { createContext, useState } from "react";

export const ExperienceContext = createContext({});

export function ExperienceProvider({ children }) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  const name = "William Mota";

  function levelUp() {
    setLevel(level + 1);
  }
  const amount = 50;

  function completeQuestion(questionsCorrect) {
    let finalExperience = currentExperience + amount * questionsCorrect;
    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
  }

  return (
    <ExperienceContext.Provider
      value={{
        level,
        currentExperience,
        completeQuestion,
        levelUp,
        experienceToNextLevel,
        name,
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
}
