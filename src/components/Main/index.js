import styled from "styled-components";
import db from "../../../db.json";

const Main = styled.div`
  justify-content: space-between;
  display: flex;
  margin: 5.5em auto 0 auto;
  width: 80%;
  height: 25rem;
  //background-color: ${({ theme }) => theme.colors.primary};
`;

Main.PlayerArea = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 45%;
  height: 25rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primary};

  &::before {
    //z-index: -1;
    display: block;
    right: calc(50% - 6.5rem);
    bottom: calc(50% - 4rem);
    height: 13rem;
    width: 13rem;
    content: "";
    position: absolute;
    background-size: cover;
    background-image: url("${db.classes.citizen}");
  }

  &::after {
    right: 10%;
    position: absolute;
    bottom: 5rem;
    display: block;
    content: "";
    width: 80%;
    height: 0.125rem;
    background-color: #384c6b;
  }
`;

Main.Ranking = styled.div`
  width: 45%;
  height: 25rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url("https://res.cloudinary.com/dhmkfekt2/image/upload/v1633575907/58889546bc2fc2ef3a1860b8_kkud4g.png");
  background-size: cover;
`;

Main.MiniCard = styled.div`
  margin: 1rem 9%;
  width: 5rem;
  height: 5rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};

  * {
    margin: 0;
  }

  .icon {
    margin: 1rem auto 0.2rem auto;
    display: block;
    width: 2.2rem;
    height: 2.2rem;
  }

  .icon:hover {
    transform: scale(1.5);
    box-shadow: inset 0px 0px 5px rgba(255, 255, 255, 0.3);
  }

  p {
    text-align: center;
  }
`;

export default Main;
