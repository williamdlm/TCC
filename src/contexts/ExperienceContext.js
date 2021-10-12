import { createContext, useState } from "react";

export const ExperienceContext = createContext({});

export function ExperienceProvider({ children }) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(15);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  return (
    <ExperienceContext.Provider
      value={{ level, currentExperience, levelUp, experienceToNextLevel }}
    >
      {children}
    </ExperienceContext.Provider>
  );
}
