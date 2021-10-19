import React from "react";
import styled from "styled-components";
import Button from "../Button";
import db from "../../../db.json";

const ContainerModal = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 99;
`;

const Modal = styled.div`
  /* position: absolute; */
  text-align: center;
  display: flex;
  width: 15rem;
  height: 20rem;
  background-color: ${db.theme.colors.yellow};
  color: black;
  padding: 3rem 1rem;
  flex-wrap: wrap;
`;

export default function ModalComplete() {
  return (
    <ContainerModal>
      <Modal>
        <div>
          <h1>Titulo</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pulvinar sem augue, quis convallis odio ornare vel. Cras fringilla
            lorem.
          </p>
        </div>
        <Button
          style={{
            backgroundColor: `${db.theme.colors.blue}`,
            alignSelf: "flex-end",
          }}
        >
          Continuar
        </Button>
      </Modal>
    </ContainerModal>
  );
}
