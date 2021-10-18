import Header from "../src/components/Header";
import Background from "../src/components/Background";
import Head from "next/head";
import { MainComplete } from "../src/components/Main";
import {
  ExperienceContext,
  ExperienceProvider,
} from "../src/contexts/ExperienceContext";
import React, { useContext, useEffect } from "react";
import GoogleLogIn from "../src/components/GoogleLogIn";

function LogOnScreen() {
  return (
    <>
      <Header />
      <MainComplete />
    </>
  );
}

export default function Home(props) {
  const { isLogged } = useContext(ExperienceContext);
  console.log(props);

  const [screenState, setScreenState] = React.useState(props.isLogged);

  function handleStatusLogged(event) {
    console.log("event " + event);
    setScreenState(event);
  }
  useEffect(() => {}, []);
  useEffect(() => {
    //if (props.isLogged == 1) {
    //setScreenState(1);
    //  }
  }, [screenState]);
  return (
    <ExperienceProvider
      level={props.level}
      currentExperience={props.currentExperience}
      totalRounds={props.totalRounds}
      pointsBarTypeZero={props.pointsBarTypeZero}
      pointsBarTypeOne={props.pointsBarTypeOne}
      pointsBarTypeTwo={props.pointsBarTypeTwo}
      pointsBarTypeTree={props.pointsBarTypeTree}
      isLogged={props.isLogged}
    >
      <Background>
        <Head>
          <title>TCC</title>
          <meta
            name="google-site-verification"
            content="etEJ5pGxXGSqGyGM_OOMKO4UWHWrkJQ2TqDxRcR2iwY"
          />
        </Head>
        {screenState === 0 ? (
          <GoogleLogIn handleStatusLogged={handleStatusLogged} />
        ) : (
          <LogOnScreen />
        )}
      </Background>
    </ExperienceProvider>
  );
}

export const getServerSideProps = async (ctx) => {
  const {
    level,
    currentExperience,
    totalRounds,
    pointsBarTypeZero,
    pointsBarTypeOne,
    pointsBarTypeTwo,
    pointsBarTypeTree,
    isLogged,
  } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      totalRounds: Number(totalRounds),
      pointsBarTypeZero: Number(pointsBarTypeZero),
      pointsBarTypeOne: Number(pointsBarTypeOne),
      pointsBarTypeTwo: Number(pointsBarTypeTwo),
      pointsBarTypeTree: Number(pointsBarTypeTree),
      isLogged: Number(isLogged),
    },
  };
};
