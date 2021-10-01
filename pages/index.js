import styled from "styled-components";
import db from "../db.json";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;
const Background = styled.div`
  //background-image: url(${db.bg});
  background-color: ${db.theme.colors.primary};
  flex: 1;
  //background-size: cover;
  background-position: center;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
`;

const StatsContainer = styled.div`
  display: flex;
  max-width: 100%;
  padding: 15px;
  justify-content: space-between;
`;

const StatsPlayerContainer = styled.div`
  display: flex;
  align-items: center;
  //justify-content: space-around;
  width: 30%;
  height: 150px;
  border-radius: 50px;
  background-color: ${db.theme.colors.secondary};
  //margin: 10px auto;

  .picture {
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 50px;
    margin: 0 20px;
  }
`;

const TitleAndClassContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-top: 20px;
  width: 70%;
  height: 160px;
  //background-color: lightcyan;
`;

const TitlePlayer = styled.div`
  margin: 10px 0 25px 0;
  width: 95%;
  height: 30px;
  background-color: ${db.theme.colors.secondary};
  border-radius: 35px;
`;

const ExperienceBar = styled.div`
  margin: 0 15px;
  width: 100% - 15px;
  height: 15px;
  border-radius: 10px;
  background-color: ${db.theme.colors.secondary};
`;

const QuizContainer = styled.div`
  justify-content: space-between;
  display: flex;
  max-width: 100%;
  padding-top: 5px;
  margin: 20px auto;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const Widget = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 520px;
  height: 460px;
  margin: 20px 0 20px 0px;
  background-color: ${db.theme.colors.secondary};
  //border: 1px solid #4caf50;
  padding: 15px;
  border-radius: 50px;
  overflow: hidden;

  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

const MiniWidget = styled.div`
  margin: 10px 50px 0 50px;
  height: 100px;
  width: 100px;
  border-radius: 25px;
  background-color: #192a46;
  overflow: hidden;

  img {
    margin: 20px auto 0px auto;
    width: 50px;
    height: 50px;
    display: block;
  }

  p {
    margin-top: 10px;
    text-align: center;
  }
`;

const Divisor = styled.div`
  position: relative;
  top: -30px;
  margin: 0 auto;
  width: 90%;
  height: 2px;
  background-color: #384c6b;
  border-radius: 10px;
`;

export default function Home() {
  return (
    <Background>
      <Container>
        <StatsContainer>
          <StatsPlayerContainer>
            <div className="picture" />
            <div className="dataPlayer">
              <div>William Mota</div>
              <div>Level 24</div>
              <div>XP 228</div>
            </div>
          </StatsPlayerContainer>
          <TitleAndClassContainer>
            <TitlePlayer />
            <TitlePlayer />
          </TitleAndClassContainer>
        </StatsContainer>
        <ExperienceBar />
        <QuizContainer>
          <Widget>
            <MiniWidget>
              <img
                src={
                  "https://res.cloudinary.com/dhmkfekt2/image/upload/v1633054930/swords_1_rwu0e4.png"
                }
              />
              <p>Classic</p>
            </MiniWidget>
            <MiniWidget>
              <img
                src={
                  "https://res.cloudinary.com/dhmkfekt2/image/upload/v1633054930/scroll_jbw9wv.png"
                }
              />
              <p>About</p>
            </MiniWidget>
            <MiniWidget>
              <img
                src={
                  "https://res.cloudinary.com/dhmkfekt2/image/upload/v1633054930/lock_l5sw35.png"
                }
              />
            </MiniWidget>
            <MiniWidget>
              <img
                src={
                  "https://res.cloudinary.com/dhmkfekt2/image/upload/v1633054930/lock_l5sw35.png"
                }
              />
            </MiniWidget>
            <Divisor />
          </Widget>
          <Widget></Widget>
        </QuizContainer>
      </Container>
    </Background>
  );
}
