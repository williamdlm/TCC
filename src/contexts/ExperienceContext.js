import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const ExperienceContext = createContext({});

export function ExperienceProvider({ children, ...rest }) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  );
  // prettier-ignore
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  const name = "William Mota";

  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
  }, [level, currentExperience]);

  function levelUp() {
    setLevel(level + 1);
  }
  const amount = 50;
  // prettier-ignore
  function completeQuestion(questionsCorrect) {
    let finalExperience = currentExperience + (amount * questionsCorrect);
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
