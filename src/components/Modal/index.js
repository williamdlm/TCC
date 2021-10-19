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
  border-radius: 5%;
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
          <h1>Titulo</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pulvinar sem augue, quis convallis odio ornare vel. Cras fringilla
            lorem.
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
