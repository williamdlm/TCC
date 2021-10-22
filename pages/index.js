import Header from "../src/components/Header";
import Background from "../src/components/Background";
import Head from "next/head";
import { MainComplete } from "../src/components/Main";
import {
  ExperienceContext,
  ExperienceProvider,
} from "../src/contexts/ExperienceContext";
import React, { useContext, useEffect, useState } from "react";
import GoogleLogIn from "../src/components/GoogleLogIn";
import Facebook from "../src/components/Facebook";
import ModalComplete from "../src/components/Modal";
import { ContainerLogin } from "../src/components/ContainerLogin";

export default function Home(props) {
  const [screenState, setScreenState] = React.useState(props.isLogged);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  function handleModal(param) {
    if (param === 0) {
      setIsModalVisible(false);
    } else {
      setIsModalVisible(true);
    }
  }

  function handleStatusLogged(event) {
    console.log("event " + event);
    setScreenState(event);
  }
  useEffect(() => {}, []);
  useEffect(() => {}, [screenState]);
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
      playerName={props.playerName}
      playerImage={props.playerImage}
    >
      <Background>
        <Head>
          <title>TCC</title>
          <meta
            name="google-site-verification"
            content="etEJ5pGxXGSqGyGM_OOMKO4UWHWrkJQ2TqDxRcR2iwY"
          />
        </Head>
        {isModalVisible && <ModalComplete handleModal={handleModal} />}
        {/* {screenState === 0 ? (
          <GoogleLogIn handleStatusLogged={handleStatusLogged} />
        ) : (
          <LogOnScreen />
        )} */}
        {screenState !== 1 && (
          <ContainerLogin>
            <GoogleLogIn handleStatusLogged={handleStatusLogged} />
            <Facebook handleStatusLogged={handleStatusLogged} />
          </ContainerLogin>
        )}
        {screenState === 1 && (
          <>
            <Header />
            <MainComplete handleModal={handleModal} />
          </>
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
    playerName,
    playerImage,
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
      playerName: String(playerName),
      playerImage: String(playerImage),
    },
  };
};
