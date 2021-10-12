import styled from "styled-components";

const QuizContainer = styled.div`
  display: flex;
  width: 80%;
  max-width: 30rem;
  padding-top: 0.3125rem;
  margin: 2% auto;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default QuizContainer;
