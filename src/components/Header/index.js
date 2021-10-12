import styled from "styled-components";
import { motion } from "framer-motion";
import ExperienceBar from "../../components/ExperienceBar";
import { ExperienceContext } from "../../contexts/ExperienceContext";
import { useContext } from "react";

const Header = styled.div`
  margin: 1% auto 5% auto;
  display: flex;
  width: 80%;
  height: 7rem;
  flex-wrap: wrap;
`;

Header.Stats = styled.div`
  align-items: center;
  justify-content: space-around;
  display: flex;
  width: 25%;
  height: 7rem;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-right: 5%;

  * {
    margin: 0;
  }
`;

Header.StatsPicture = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: white;
  border-radius: 50%;

  @media screen and (max-width: 1100px) and (min-width: 950px) {
    transform: scale(0.85);
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

Header.StatsInfo = styled.div`
  p {
    display: block;
    margin-bottom: 0.3rem;
  }
  .fullNamePlayer {
    font-weight: bolder;
  }

  .firstNamePlayer {
    display: none;
  }
  .levelPlayer {
    color: ${({ theme }) => theme.colors.green};
  }
  .experiencePlayer {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.red};
  }
  @media screen and (max-width: 1100px) and (min-width: 950px) {
    p {
      transform: scale(0.85);
    }
  }

  @media screen and (max-width: 949px) {
    .fullNamePlayer {
      display: none;
    }
    .firstNamePlayer {
      display: block;
    }
  }
  @media screen and (max-width: 800px) {
    transform: scale(1);
  }
`;

Header.Infos = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: 7rem;
  flex-wrap: wrap;
`;

Header.InfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  height: 1.75rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
  overflow: overflow;

  @media screen and (max-width: 800px) {
    font-size: 1.7vmax;
  }
`;

function HeaderComplete() {
  const { level, currentExperience, experienceToNextLevel, name } =
    useContext(ExperienceContext);
  console.log(`ExperienceToNextLevel: ${experienceToNextLevel}`);
  const namePart = name.split(" ");
  return (
    <Header>
      <Header.Stats
        as={motion.section}
        transition={{ delay: 0, duration: 1 }}
        variants={{
          show: { opacity: 1, x: "0" },
          hidden: { opacity: 0, x: "100%" },
        }}
        initial="hidden"
        animate="show"
      >
        <Header.StatsPicture />
        <Header.StatsInfo>
          <p className="fullNamePlayer">William Mota</p>
          <p className="firstNamePlayer">William</p>
          <p className="levelPlayer">{`Level ${level}`}</p>
          <p className="experiencePlayer">{`xp ${currentExperience}`}</p>
        </Header.StatsInfo>
      </Header.Stats>
      <Header.Infos
        as={motion.div}
        transition={{ delay: 0, duration: 1 }}
        variants={{
          show: { opacity: 1, y: "0" },
          hidden: { opacity: 0, y: "100%" },
        }}
        initial="hidden"
        animate="show"
      >
        <Header.InfoBar
          as={motion.div}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: "0" },
            hidden: { opacity: 0, y: "100%" },
          }}
          initial="hidden"
          animate="show"
        >
          <p>Title:</p>
          <p>The Lord of Logic</p>
        </Header.InfoBar>
        <Header.InfoBar>
          <p>Class:</p>
          <p>Human</p>
        </Header.InfoBar>
      </Header.Infos>
      <ExperienceBar />
    </Header>
  );
}

export default HeaderComplete;
