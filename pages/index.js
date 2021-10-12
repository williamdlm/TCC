import Header from "../src/components/Header";
import Background from "../src/components/Background";
import Head from "next/head";
import { MainComplete } from "../src/components/Main";

export default function Home() {
  return (
    <Background>
      <Head>
        <title>TCC</title>
      </Head>
      <Header />
      <MainComplete />
    </Background>
  );
}
