import Header from "../src/components/Header";
import Main from "../src/components/Main";
import Background from "../src/components/Background";

export default function Home() {
  return (
    <Background>
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
          <Main.MiniCard />
          <Main.MiniCard />
          <Main.MiniCard />
          <Main.MiniCard />
        </Main.PlayerArea>
        <Main.Ranking />
      </Main>
    </Background>
  );
}
