import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.primary};
  flex: 1;
`;

export default Background;
