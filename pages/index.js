import Widget from "../src/components/Widget";
import Background from "../src/components/Background";
import db from "../db.json";

export default function Home() {
  return (
    <Background>
      <Widget>
        <Widget.Stats>
          <Widget.Stats.Picture />
          <Widget.Stats.Info>
            <p>William Mota</p>
            <p>Level 24</p>
            <p>xp 220</p>
          </Widget.Stats.Info>
        </Widget.Stats>
        <Widget.Infos>
          <Widget.Bars />
          <Widget.Bars />
        </Widget.Infos>
        <Widget.ExperienceBar />
      </Widget>
    </Background>
  );
}
