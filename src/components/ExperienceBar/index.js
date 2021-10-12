import styled from "styled-components";
import { useContext } from "react";
import { ExperienceContext } from "../../contexts/ExperienceContext";
import { motion } from "framer-motion";
import db from "../../../db.json";

const ExperienceBar = styled.div`
  display: flex;
  justify-content: end;
  /* overflow: hidden; */
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 1rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primary};

  &::before {
    flex: 1;
    position: absolute;
    top: -1.5rem;
    /* content: "Experience"; */
    font-style: italic;
    text-align: right;
  }
`;

const Span = styled.span`
  margin: 0 1%;
  display: block;
  width: 5%;
`;

function ExpBar() {
  const { currentExperience, experienceToNextLevel } =
    useContext(ExperienceContext);
  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  );
  // console.log(level);
  return (
    <div style={{ width: "100%", display: "flex", alignItems: "baseline" }}>
      <Span
        as={motion.span}
        transition={{ delay: 1, duration: 2 }}
        variants={{
          show: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        initial="hidden"
        animate="show"
      >
        0 XP
      </Span>
      <ExperienceBar
        as={motion.div}
        transition={{ delay: 1, duration: 0.5 }}
        variants={{
          show: { opacity: 1, y: "0" },
          hidden: { opacity: 0, y: "100%" },
        }}
        initial="hidden"
        animate="show"
      >
        <div
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <div
            style={{
              backgroundColor: `${db.theme.colors.red}`,
              height: "100%",
              borderRadius: "50px",
              width: `${percentToNextLevel}%`,
            }}
          />
        </div>
      </ExperienceBar>
      <Span
        as={motion.span}
        transition={{ delay: 1, duration: 2 }}
        variants={{
          show: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        initial="hidden"
        animate="show"
      >{`${experienceToNextLevel} XP`}</Span>
    </div>
  );
}

export default ExpBar;
