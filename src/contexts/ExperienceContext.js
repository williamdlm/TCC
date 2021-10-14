import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import db from "../../db.json";

export const ExperienceContext = createContext({});

export function ExperienceProvider({ children, ...rest }) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  );
  // prettier-ignore
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  const [titleUser, setTitleUser] = useState("Iniciante");
  const [totalPointsStatsBar, setTotalPointsStatsBar] = useState(10);
  const [pointsBarType, setPointsBarType] = useState({
    totalTypeZero: 5,
    totalTypeOne: 5,
    totalTypeTwo: 5,
    totalTypeTree: 5,
  });
  const name = "William Mota";

  let copy = Object.assign({}, pointsBarType);
  function handlePointsStats(type) {
    setTotalPointsStatsBar(totalPointsStatsBar + 1);
    switch (type) {
      case 0:
        console.log(pointsBarType);
        copy.totalTypeZero++;
        setPointsBarType(copy);
        console.log(copy);
        break;
      case 1:
        copy.totalTypeOne++;
        setPointsBarType(copy);
        console.log(pointsBarType);
        break;
      case 2:
        copy.totalTypeTwo++;
        setPointsBarType(copy);
        console.log(pointsBarType);
        break;
      case 3:
        copy.totalTypeTree++;
        setPointsBarType(copy);
        console.log(pointsBarType);
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    console.log(pointsBarType);
  }, [pointsBarType]);

  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
  }, [level, currentExperience]);

  function handleTitles() {
    if (level >= 50) {
      setTitleUser(db.titulos[4]);
    } else if (level >= 30) {
      setTitleUser(db.titulos[3]);
    } else if (level >= 20) {
      setTitleUser(db.titulos[2]);
    } else if (level >= 10) {
      setTitleUser(db.titulos[1]);
    } else if (level >= 5) {
      setTitleUser(db.titulos[0]);
    }
  }

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
        titleUser,
        handleTitles,
        handlePointsStats,
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
}
