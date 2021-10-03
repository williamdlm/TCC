import styled from "styled-components";
import db from "../../../db.json";

const Main = styled.div`
  justify-content: space-between;
  display: flex;
  margin: 0 auto;
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
    right: calc(50% - 5rem);
    bottom: calc(50% - 2rem);
    height: 10rem;
    width: 10rem;
    content: "";
    position: absolute;
    background-size: cover;
    background-image: url("${db.classes.warrior}");
  }

  &::after {
    right: 10%;
    position: absolute;
    bottom: 6rem;
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
`;

Main.MiniCard = styled.div`
  margin: 1rem 15%;
  width: 5rem;
  height: 5rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export default Main;
