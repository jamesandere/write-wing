import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 400px;
  width: 100%;
  color: white;
  position: absolute;

  h2 {
    margin-bottom: 1.6rem;
    text-align: center;
  }

  input,
  button {
    width: 100%;
    height: 44px;
    margin: 10px 0;
    outline: none;
    border: none;
    font-size: 16px;
  }

  input {
    padding: 6px 10px;
    border-radius: 3px;
  }

  button {
    background-color: rgb(48, 72, 53);
    cursor: pointer;
    color: white;
    padding: 6px 10px;

    &:disabled {
      color: white;
      cursor: not-allowed;
      background-color: rgb(108, 168, 121);
    }
  }

  @media (max-width: 768px) {
    padding: 6px 10px;

    input,
    button {
      height: 40px;
    }
  }

  @media (max-width: 406px) {
    max-width: 350px;
    padding: 6px 10px;

    input,
    button {
      height: 36px;
    }
  }
`;
