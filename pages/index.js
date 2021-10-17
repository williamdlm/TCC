import Header from "../src/components/Header";
import Background from "../src/components/Background";
import Head from "next/head";
import { MainComplete } from "../src/components/Main";
import { ExperienceProvider } from "../src/contexts/ExperienceContext";
import React from "react";
import styled from "styled-components";

function GoogleLogIn() {
  const GoogleIn = styled.img`
    margin: 50vh auto;
    display: block;
  `;
  return (
    <GoogleIn src="https://res.cloudinary.com/dhmkfekt2/image/upload/v1634500984/btn_google_signin_light_normal_web_gfq5t1.png" />
  );
}

function LogOnScreen() {
  return (
    <>
      <Header />
      <MainComplete />
    </>
  );
}

function LogInScreen() {}

const screenStates = {
  //Conecte-se
  LOGIN: "LOGIN",
  //Entrar
  LOGON: "LOGON",
};

export default function Home(props) {
  const [screenState, setScreenState] = React.useState(screenStates.LOGIN);
  // console.log(props);
  return (
    <ExperienceProvider
      level={props.level}
      currentExperience={props.currentExperience}
      totalRounds={props.totalRounds}
      pointsBarTypeZero={props.pointsBarTypeZero}
      pointsBarTypeOne={props.pointsBarTypeOne}
      pointsBarTypeTwo={props.pointsBarTypeTwo}
      pointsBarTypeTree={props.pointsBarTypeTree}
    >
      <Background>
        <Head>
          <title>TCC</title>
        </Head>
        {screenState === screenStates.LOGIN && <GoogleLogIn />}
        {screenState === screenStates.LOGON && <LogOnScreen />}
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
    },
  };
};
