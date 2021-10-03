import styled from "styled-components";

const Header = styled.div`
  margin: 1% auto 5% auto;
  display: flex;
  width: 80%;
  height: 7rem;
  flex-wrap: wrap;

  /* background-color: ${({ theme }) => theme.colors.primary}; */
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
`;

Header.StatsPicture = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: white;
  border-radius: 50%;
`;

Header.StatsInfo = styled.div`
  p {
    display: block;
    margin-bottom: 0.3rem;
  }
`;

Header.Infos = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: 7rem;
  //background-color: red;
  flex-wrap: wrap;
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
  position: relative;
  margin-top: 1rem;
  width: 100%;
  height: 1rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primary};

  &::before {
    position: absolute;
    display: block;
    left: calc(100% - 5.3125rem);
    top: -1.2rem;
    width: 10rem;
    content: "Experience";
  }
`;

export default Header;
