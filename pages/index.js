import Header from "../src/components/Header";
import Background from "../src/components/Background";
import Head from "next/head";
import { MainComplete } from "../src/components/Main";
import { ExperienceProvider } from "../src/contexts/ExperienceContext";

export default function Home(props) {
  console.log(props);
  return (
    <ExperienceProvider
      level={props.level}
      currentExperience={props.currentExperience}
    >
      <Background>
        <Head>
          <title>TCC</title>
        </Head>
        <Header />
        <MainComplete />
      </Background>
    </ExperienceProvider>
  );
}

export const getServerSideProps = async (ctx) => {
  const { level, currentExperience } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
    },
  };
};
