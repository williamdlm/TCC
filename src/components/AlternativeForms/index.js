import styled from "styled-components";
import db from "../../../db.json";

const AlternativesForm = styled.form`
  label {
    &[data-correct="true"] {
      &[data-status="ERROR"] {
        border: 5px solid ${db.theme.colors.success};
      }
    }

    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.blue};

      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
      }
    }

    &:focus {
      opacity: 1;
    }
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;
