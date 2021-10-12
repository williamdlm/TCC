import styled from "styled-components";
import db from "../../../db.json";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Main = styled.div`
  justify-content: space-between;
  display: flex;
  margin: 5.5em auto 0 auto;
  width: 80%;
  height: 25rem;
  //background-color: ${({ theme }) => theme.colors.primary};

  @media screen and (max-width: 919px) and (min-width: 760px) {
    height: 20rem;
  }

  @media screen and (max-width: 759px) {
    flex-direction: column;
    height: 50rem;
  }
`;

Main.PlayerArea = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 45%;
  height: 25rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primary};

  &::before {
    //z-index: -1;
    display: block;
    right: calc(50% - 6.5rem);
    bottom: calc(50% - 4rem);
    height: 13rem;
    width: 13rem;
    content: "";
    position: absolute;
    background-size: cover;
    background-image: url("${db.classes.citizen}");
  }

  &::after {
    right: 10%;
    position: absolute;
    bottom: 5rem;
    display: block;
    content: "";
    width: 80%;
    height: 0.125rem;
    background-color: #384c6b;
  }

  @media screen and (max-width: 1200px) and (min-width: 920px) {
    width: 45%;
    height: 20rem;

    &::before {
      height: 10rem;
      width: 10rem;
      right: calc(50% - 5rem);
      bottom: calc(50% - 3rem);
    }

    &::after {
      bottom: 4.55rem;
    }
  }

  @media screen and (max-width: 919px) and (min-width: 760px) {
    width: 45%;
    height: 20rem;
    &::before {
      height: 7.5rem;
      width: 7.5rem;
      right: calc(50% - 3.5rem);
      bottom: calc(45%);
    }
  }

  @media screen and (max-width: 759px) and (min-width: 500px) {
    width: 100%;
    height: 45%;
    margin-bottom: 5%;

    &::before {
      height: 10rem;
      width: 10rem;
      right: calc(50% - 4.5rem);
      bottom: calc(45%);
    }
  }

  @media screen and (max-width: 499px) {
    width: 100%;
    height: 45%;
    margin-bottom: 5%;
    /* flex-wrap: nowrap; */
    justify-content: center;

    &::before {
      height: 10rem;
      width: 10rem;
      right: calc(50% - 4.5rem);
      bottom: calc(25%);
    }
  }
`;

Main.Ranking = styled.div`
  width: 45%;
  height: 25rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url("https://res.cloudinary.com/dhmkfekt2/image/upload/v1633575907/58889546bc2fc2ef3a1860b8_kkud4g.png");
  background-size: cover;

  @media screen and (max-width: 1200px) and (min-width: 920px) {
    width: 45%;
    height: 20rem;
  }

  @media screen and (max-width: 919px) and (min-width: 760px) {
    width: 45%;
    height: 20rem;
  }

  @media screen and (max-width: 759px) {
    width: 100%;
    height: 50%;
  }
`;

Main.MiniCard = styled.div`
  margin: 1rem 9%;
  width: 5rem;
  height: 5rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};

  * {
    margin: 0;
  }

  .icon {
    margin: 1rem auto 0.2rem auto;
    display: block;
    width: 2.2rem;
    height: 2.2rem;
  }

  .icon:hover {
    transform: scale(1.5);
    box-shadow: inset 0px 0px 5px rgba(255, 255, 255, 0.3);
  }

  p {
    text-align: center;
  }

  @media screen and (max-width: 1200px) and (min-width: 920px) {
    margin: 0.3rem 10%;
    width: 4rem;
    height: 4rem;
    .icon {
      width: 2rem;
      height: 2rem;
    }
    p {
      font-size: 0.7rem;
      text-align: center;
    }
  }
  @media screen and (max-width: 919px) and (min-width: 760px) {
    margin: 0.3rem 10%;
    width: 4rem;
    height: 4rem;
    .icon {
      width: 2rem;
      height: 2rem;
    }
    p {
      font-size: 0.7rem;
      text-align: center;
    }
  }

  @media screen and (max-width: 759px) and (min-width: 500px) {
    margin: 0.5rem 15%;
    width: 4rem;
    height: 4rem;
  }

  @media screen and (max-width: 499px) {
    margin: 5% 5% auto 5%;
    /* margin-right: 40%; */
    width: 2rem;
    height: 2rem;

    .icon {
      width: 1.5rem;
      height: 1.5rem;
      margin: 15% auto;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;

export function MainComplete() {
  const router = useRouter();
  return (
    <Main>
      <Main.PlayerArea
        as={motion.div}
        transition={{ delay: 1, duration: 0.5 }}
        variants={{
          show: { opacity: 1, x: "0" },
          hidden: { opacity: 0, x: "-100%" },
        }}
        initial="hidden"
        animate="show"
      >
        <Main.MiniCard>
          <img
            className="icon classic"
            src="https://res.cloudinary.com/dhmkfekt2/image/upload/v1633396500/swords_rktxam.svg"
            onClick={() => {
              router.push(`/quiz`);
            }}
          />
          <p>Classic</p>
        </Main.MiniCard>
        <Main.MiniCard>
          <img
            className="icon"
            src="https://res.cloudinary.com/dhmkfekt2/image/upload/v1633054930/scroll_jbw9wv.png"
          />
          <p>About</p>
        </Main.MiniCard>
        <Main.MiniCard>
          <img
            className="icon"
            src="https://res.cloudinary.com/dhmkfekt2/image/upload/v1633054930/lock_l5sw35.png"
          />
        </Main.MiniCard>
        <Main.MiniCard>
          <img
            className="icon"
            src="https://res.cloudinary.com/dhmkfekt2/image/upload/v1633054930/lock_l5sw35.png"
          />
        </Main.MiniCard>
      </Main.PlayerArea>
      <Main.Ranking
        as={motion.div}
        transition={{ delay: 1.5, duration: 1 }}
        variants={{
          show: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        initial="hidden"
        animate="show"
      />
    </Main>
  );
}
