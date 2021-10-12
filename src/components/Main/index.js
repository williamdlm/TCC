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

  @media screen and (max-width: 849px) {
    flex-direction: column;
    height: 52rem;
  }
`;

Main.PlayerArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 45%;
  height: 25rem;
  padding: 3%;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primary};

  &::before {
    height: 13rem;
    width: 13rem;
    align-self: center;
    content: "";
    position: absolute;
    background-size: cover;
    background-image: url("${db.classes.citizen}");
  }

  &::after {
    right: 10%;
    position: absolute;
    bottom: 6.5rem;
    display: block;
    margin: 0 auto;
    content: "";
    width: 80%;
    height: 0.125rem;
    background-color: #384c6b;
  }

  @media screen and (max-width: 1200px) and (min-width: 950px) {
    &:before {
      transform: scale(0.7);
    }
  }

  @media screen and (max-width: 949px) and (min-width: 850px) {
    &:before {
      transform: scale(0.6);
    }
  }

  @media screen and (max-width: 849px) {
    width: 100%;
  }

  @media screen and (max-width: 460px) {
    &:before {
      transform: scale(0.7);
    }

    &:after {
    }
  }
`;

Main.Ranking = styled.div`
  width: 45%;
  height: 25rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url("https://res.cloudinary.com/dhmkfekt2/image/upload/v1633575907/58889546bc2fc2ef3a1860b8_kkud4g.png");
  background-size: 25vmax;

  @media screen and (max-width: 849px) {
    width: 100%;
  }
`;

Main.BlockMiniCard = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

Main.MiniCard = styled.div`
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

  @media screen and (max-width: 1000px) and (min-width: 850px) {
    transform: scale(0.7);
  }

  @media screen and (max-width: 460px) {
    transform: scale(0.7);
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
        <Main.BlockMiniCard>
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
        </Main.BlockMiniCard>
        <Main.BlockMiniCard>
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
        </Main.BlockMiniCard>
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
