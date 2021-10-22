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
  width: 18rem;
  height: 20rem;
  background-color: ${db.theme.colors.yellow};
  color: black;
  padding: 1rem 1rem 2rem 1rem;
  flex-wrap: wrap;
  border-radius: 5%;

  p {
    font-size: 0.85rem;
    /* text-align: justify; */
  }
`;

export default function ModalComplete({ handleModal }) {
  const handleModalModal = () => handleModal(0);
  const handleOutSideClick = (event) => {
    console.log(event);
    if (event === "modal") {
      handleModalModal();
    }
  };
  return (
    <ContainerModal id="modal" onClick={(e) => handleOutSideClick(e.target.id)}>
      <Modal>
        <div>
          <h1>Sobre</h1>
          <p>
            Seja bem vindo nessa jornada de conhecimento!
            <br /> Para inciar à aventura basta clicar no modo de jogo classico
            e encarar as questões que irão surgir.
          </p>
          <p>
            Este aplicativo foi desenvolvido para o trabalho de conclusão de
            curso da UniFBV, espero que gostem.
          </p>
        </div>
        <Button
          style={{
            backgroundColor: `${db.theme.colors.red}`,
            alignSelf: "flex-end",
          }}
          onClick={() => handleModalModal()}
        >
          FECHAR
        </Button>
      </Modal>
    </ContainerModal>
  );
}
