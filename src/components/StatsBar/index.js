import React from "react";
import styled from "styled-components";
import db from "../../../db.json";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 20%;
  justify-content: space-around;
  align-items: center;
`;

const Bar = styled.div`
  position: relative;
  width: 40%;
  height: 10%;
  border-radius: 50px;
  background-color: #4c596d;
`;

const Desc = styled.label`
  position: absolute;
  top: -260%;
`;

export default function StatsBar() {
  return (
    <Container>
      <Bar>
        <div
          style={{
            backgroundColor: `${db.theme.colors.red}`,
            height: "100%",
            borderRadius: "50px",
            width: "70%",
          }}
        />
        <Desc>Força</Desc>
      </Bar>
      <Bar>
        <div
          style={{
            backgroundColor: `${db.theme.colors.blue}`,
            height: "100%",
            borderRadius: "50px",
            width: "25%",
          }}
        />
        <Desc>Magia</Desc>
      </Bar>
      <Bar>
        <div
          style={{
            backgroundColor: `${db.theme.colors.yellow}`,
            height: "100%",
            borderRadius: "50px",
            width: "50%",
          }}
        />
        <Desc>Percepção</Desc>
      </Bar>
      <Bar>
        <div
          style={{
            backgroundColor: `${db.theme.colors.green}`,
            height: "100%",
            borderRadius: "50px",
            width: "78%",
          }}
        />
        <Desc>Agilidade</Desc>
      </Bar>
    </Container>
  );
}
