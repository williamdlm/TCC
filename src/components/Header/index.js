import styled from "styled-components";

const Header = styled.div`
  margin: 1% auto 5% auto;
  display: flex;
  width: 80%;
  height: 7rem;
  flex-wrap: wrap;

  /* background-color: ${({ theme }) => theme.colors.primary}; */

  @media screen and (max-width: 859px) {
    * {
      margin: 0;
      padding: 0;
    }
  }
`;

Header.Stats = styled.div`
  align-items: center;
  justify-content: space-around;
  display: flex;
  width: 25%;
  height: 7rem;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-right: 5%;

  * {
    margin: 0;
  }

  @media screen and (max-width: 1020px) {
    flex-direction: column;
  }
`;

Header.StatsPicture = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: white;
  border-radius: 50%;
  @media screen and (max-width: 1020px) and (min-width: 860px) {
    width: 4rem;
    height: 4rem;
    margin-top: 0.325rem;
    margin-bottom: 0.325rem;
  }
  @media screen and (max-width: 859px) {
    display: none;
  }
`;

Header.StatsInfo = styled.div`
  p {
    display: block;
    margin-bottom: 0.3rem;
  }
  p:first-child {
    font-weight: bolder;
  }
  p:nth-child(2) {
    color: ${({ theme }) => theme.colors.green};
  }
  p:nth-child(3) {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.red};
  }
  @media screen and (max-width: 1020px) and (min-width: 860px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    p {
      display: block;
      text-align: center;
    }
    p:first-child {
      flex-basis: 100%;
    }
  }

  @media screen and (max-width: 859px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    p {
      font-size: 0.725rem;
    }
  }
`;

Header.Infos = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: 7rem;
  //background-color: red;
  flex-wrap: wrap;
  @media screen and (max-width: 859px) {
    p {
      font-size: 0.625rem;
    }
  }
`;

Header.InfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  height: 1.75rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
`;

Header.ExperienceBar = styled.div`
  display: flex;
  justify-content: end;
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 1rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primary};

  &::before {
    position: absolute;
    top: -1.5rem;
    width: 10rem;
    content: "Experience";
    font-style: italic;
    text-align: right;
  }
`;

export default Header;
