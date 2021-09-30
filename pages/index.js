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

const QuizContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  padding-top: 5px;
  margin: 0 auto;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const Widget = styled.div`
  width: 520px;
  height: 460px;
  margin: 25px;
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
  position: relative;
  height: 100px;
  width: 100px;
  border-radius: 25px;
  background-color: #192a46;
  overflow: hidden;
`;

export default function Home() {
  return (
    <Background>
      <QuizContainer>
        <Widget>
          <MiniWidget style={{ backgroundColor: "red" }} />
        </Widget>
        <Widget>asdasdasdsd</Widget>
      </QuizContainer>
    </Background>
  );
}
