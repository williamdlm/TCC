import styled from "styled-components";

const Widget = styled.div`
  margin: 1% auto;
  display: flex;
  width: 80%;
  height: 7rem;
  flex-wrap: wrap;

  /* background-color: ${({ theme }) => theme.colors.secondary}; */
`;

Widget.Stats = styled.div`
  align-items: center;
  justify-content: space-around;
  display: flex;
  width: 30%;
  height: 7rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-right: 5%;

  * {
    margin: 0;
  }
`;

Widget.Stats.Picture = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: white;
  border-radius: 50%;
`;

Widget.Stats.Info = styled.div`
  p {
    display: block;
  }
`;

Widget.Infos = styled.div`
  display: flex;
  align-items: center;
  width: 65%;
  height: 7rem;
  //background-color: red;
  flex-wrap: wrap;
`;

Widget.Bars = styled.div`
  width: 100%;
  height: 1.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50px;
`;

Widget.ExperienceBar = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 1rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.secondary}; ;
`;

export default Widget;
