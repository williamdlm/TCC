import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import db from "../../db.json";
import { typeOf } from "react-is";

export const ExperienceContext = createContext({});

export function ExperienceProvider({ children, ...rest }) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  );
  // prettier-ignore
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  const [titleUser, setTitleUser] = useState("Iniciante");
  const [totalRounds, setTotalRounds] = useState(rest.totalRounds ?? 1);
  const [pointsBarTypeZero, setPointsBarTypeZero] = useState(
    rest.pointsBarTypeZero ?? 0
  );
  const [pointsBarTypeOne, setPointsBarTypeOne] = useState(
    rest.pointsBarTypeOne ?? 0
  );
  const [pointsBarTypeTwo, setPointsBarTypeTwo] = useState(
    rest.pointsBarTypeTwo ?? 0
  );
  const [pointsBarTypeTree, setPointsBarTypeTree] = useState(
    rest.pointsBarTypeTree ?? 0
  );
  const [isLogged, setIsLogged] = useState(rest.isLogged ?? 0);
  const [playerName, setPlayerName] = useState(rest.playerName ?? "No Name");
  const [playerImage, setPlayerImage] = useState(
    rest.playerImage ??
      "https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg"
  );

  console.log(rest.isLogged);

  function changePlayerImage(url) {
    setPlayerImage(url);
  }

  function changePlayerName(name) {
    setPlayerName(name);
  }

  function handlePointsStats(type) {
    switch (type) {
      case 0:
        setPointsBarTypeZero(pointsBarTypeZero + 1);
        break;
      case 1:
        setPointsBarTypeOne(pointsBarTypeOne + 1);
        break;
      case 2:
        setPointsBarTypeTwo(pointsBarTypeTwo + 1);
        break;
      case 3:
        setPointsBarTypeTree(pointsBarTypeTree + 1);
        break;

      default:
        break;
    }
  }

  // useEffect(() => {
  //   console.log(totalRounds);
  // }, [totalRounds]);
  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
    Cookies.set("totalRounds", String(totalRounds));
    Cookies.set("pointsBarTypeZero", pointsBarTypeZero);
    Cookies.set("pointsBarTypeOne", pointsBarTypeOne);
    Cookies.set("pointsBarTypeTwo", pointsBarTypeTwo);
    Cookies.set("pointsBarTypeTree", pointsBarTypeTree);
    Cookies.set("isLogged", isLogged);
    Cookies.set("playerName", playerName);
    Cookies.set("playerImage", String(playerImage));
  }, [
    level,
    currentExperience,
    totalRounds,
    pointsBarTypeZero,
    pointsBarTypeOne,
    pointsBarTypeTwo,
    pointsBarTypeTree,
    isLogged,
    playerName,
    playerImage,
  ]);

  // console.log(typeof Cookies.get("pointsBarType"));

  function handleIsLogged() {
    setIsLogged(1);
  }

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

  function handleRounds() {
    setTotalRounds(totalRounds + 1);
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
        playerName,
        titleUser,
        handleTitles,
        handlePointsStats,
        totalRounds,
        handleRounds,
        pointsBarTypeZero,
        pointsBarTypeOne,
        pointsBarTypeTwo,
        pointsBarTypeTree,
        isLogged,
        handleIsLogged,
        changePlayerName,
        playerImage,
        changePlayerImage,
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
}
