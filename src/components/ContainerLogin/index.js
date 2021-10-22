import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  margin-top: 50vh;
  flex-direction: column;

  .googleBtn {
    margin-bottom: 0.5rem;
  }

  .googleBtn span {
    display: block;
    margin-left: 10%;
    text-transform: uppercase;
  }
  button {
    margin-bottom: 3rem;
    display: block;
    margin: 0 auto;
    width: 20rem;
  }
`;
