import Header from "../src/components/Header";
import Main from "../src/components/Main";
import Background from "../src/components/Background";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <Background>
      <Head>
        <title>TCC</title>
      </Head>
      <Header>
        <Header.Stats>
          <Header.StatsPicture />
          <Header.StatsInfo>
            <p>William Mota</p>
            <p>Level 24</p>
            <p>xp 220</p>
          </Header.StatsInfo>
        </Header.Stats>
        <Header.Infos>
          <Header.InfoBar>
            <p>Title:</p>
            <p>The Lord of Logic</p>
          </Header.InfoBar>
          <Header.InfoBar>
            <p>Class:</p>
            <p>Human</p>
          </Header.InfoBar>
        </Header.Infos>
        <Header.ExperienceBar />
      </Header>
      <Main>
        <Main.PlayerArea>
          <Main.MiniCard>
            <img
              className="icon classic"
              src="https://res.cloudinary.com/dhmkfekt2/image/upload/v1633396500/swords_rktxam.svg"
              onClick={() => {
                router.push(`/quiz`);
                console.log("hello world");
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
        <Main.Ranking />
      </Main>
    </Background>
  );
}
