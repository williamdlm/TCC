import React, { useContext } from "react";
import Background from "../src/components/Background";
import Widget from "../src/components/Widget";
import db from "../db.json";
import dbQuestions from "../questions.json";
import QuizContainer from "../src/components/QuizContainer";
import Button from "../src/components/Button";
import AlternativesForm from "../src/components/AlternativeForms";
import BackLinkArrow from "../src/components/BackLinkArrow";
import { useRouter } from "next/router";
import {
  ExperienceContext,
  ExperienceProvider,
} from "../src/contexts/ExperienceContext";

function ResultWidget({ results }) {
  const router = useRouter();

  // setCurrentExperience(amountExp);
  // console.log(`AmountExp: ${amountExp}`);
  return (
    <Widget style={{ margin: "0 auto" }}>
      <Widget.Header>RESULTADO</Widget.Header>
      <Widget.Content>
        <p>{`Você acertou ${results.filter((x) => x).length} questões`}</p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${index}`}>
              #{index + 1} Resultado: {result === true ? "Acertou" : "Errou"}
            </li>
          ))}
        </ul>
      </Widget.Content>
      <Button
        onClick={() => {
          router.push(`/`);
        }}
      >
        Voltar para inicio
      </Button>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>
      <Widget.Content>[Desafio do Loading]</Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] =
    React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;
  const { completeQuestion } = useContext(ExperienceContext);
  const { handlePointsStats } = useContext(ExperienceContext);
  const { handleRounds } = useContext(ExperienceContext);
  // console.log(question.type);
  React.useEffect(() => {
    handleRounds();
  }, []);
  return (
    <Widget style={{ margin: "0 auto" }}>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          {/* <BackLinkArrow href="/" /> */}
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

        <AlternativesForm
          onSubmit={(event) => {
            event.preventDefault();
            setIsQuestionSubmited(true);
            addResult(isCorrect);
            setTimeout(() => {
              {
                {
                  isCorrect && completeQuestion(1);
                }

                {
                  isCorrect && handlePointsStats(question.type);
                }
              }
              onSubmit();
              setSelectedAlternative(undefined);
              setIsQuestionSubmited(false);
            }, 1 * 2000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? "SUCCESS" : "ERROR";
            const isSelect = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
                key={alternativeId}
                data-selected={isSelect}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{
                    display: "none",
                  }}
                  id={alternativeId}
                  type="radio"
                  name={questId}
                  onClick={() => setSelectedAlternative(alternativeIndex)}
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
          {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
          {isQuestionSubmited && !isCorrect && <p>Você errou!</p>}
        </AlternativesForm>
        {/* <pre>{JSON.stringify(question, null, 4)}</pre> */}
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: "QUIZ",
  LOADING: "LOADING",
  RESULT: "RESULT",
};

export default function QuizPage(props) {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResult] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const [question, setQuestion] = React.useState(
    handleChangeQuestion(questionIndex)
  );

  const totalQuestions = 5;

  function handleChangeQuestion(type) {
    const questionsForType = dbQuestions.questions.filter((question) => {
      return question.type === type;
    });
    return questionsForType[
      Math.floor(Math.random() * questionsForType.length)
    ];
  }
  function addResult(result) {
    setResult([...results, result]);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 2000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
      setQuestion(handleChangeQuestion(nextQuestion));
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

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
        <QuizContainer>
          {screenState === screenStates.QUIZ && (
            <QuestionWidget
              question={question}
              totalQuestions={totalQuestions}
              questionIndex={questionIndex}
              onSubmit={handleSubmitQuiz}
              addResult={addResult}
            />
          )}
          {screenState === screenStates.LOADING && <LoadingWidget />}
          {screenState === screenStates.RESULT && (
            <ResultWidget results={results} />
          )}
        </QuizContainer>
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
