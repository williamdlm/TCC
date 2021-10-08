import React from "react";
import Head from "next/dist/shared/lib/head";
import Background from "../src/components/Background";
import Header from "../src/components/Header";
import Widget from "../src/components/Widget";
import db from "../db.json";
import QuizContainer from "../src/components/QuizContainer";
import Button from "../src/components/Button";

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>
      <Widget.Content>[Desafio do Loading]</Widget.Content>
    </Widget>
  );
}

function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit }) {
  const questId = `question__${questionIndex}`;
  return (
    <>
      <Widget>
        <Widget.Header>
          {/* <BackLinkArrow href="/" />  */}
          <h3>
            Pergunta {`${questionIndex + 1}`} de {`${totalQuestions}`}
          </h3>
        </Widget.Header>

        <img
          alt="Descrição"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
          src={question.image}
        />

        <Widget.Content>
          <h2>{question.title}</h2>
          <p>{question.description}</p>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              onSubmit();
            }}
          >
            {question.alternatives.map((alternative, alternativeIndex) => {
              const alternativeId = `alternative__${alternativeIndex}`;
              return (
                <Widget.Topic
                  as="label"
                  htmlFor={alternativeId}
                  key={alternativeId}
                >
                  <input
                    // style={{
                    //   display: "none",
                    // }}
                    id={alternativeId}
                    type="radio"
                    name={questId}
                  />
                  {alternative}
                </Widget.Topic>
              );
            })}
            <Button type="submit">Confirmar</Button>
          </form>
          {/* <pre>{JSON.stringify(question, null, 4)}</pre> */}
        </Widget.Content>
      </Widget>
    </>
  );
}

const screenStates = {
  QUIZ: "QUIZ",
  LOADING: "LOADING",
  RESULT: "RESULT",
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  const totalQuestions = db.questions.length;
  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 100);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }
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
      <QuizContainer>
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
            onSubmit={handleSubmitQuiz}
          />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.RESULT && (
          <div>Você acertou X questões, parabens!</div>
        )}
      </QuizContainer>
    </Background>
  );
}
