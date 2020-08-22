import styled from 'styled-components';

export const Main = styled.main`
  height: 100vh;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #2c2c37;
`;

export const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    color: #ffffff;
  }

  input {
    margin-top: 50px;
    margin-bottom: 20px;
    font-family: Russo One;
    font-size: 23px;
    line-height: 29px;
    color: #a2a1a7;
  }

  button {
    padding: 3px;
    background-color: transparent;
    border: none;
    color: #ffffff;

    strong {
      color: #a2a1a7;
      font-weight: normal;
    }

    :nth-child(4) {
      margin-top: 33px;
      margin-bottom: 20px;
      font-size: 16px;
      color: #ffffff;
    }
    :nth-child(5) {
      font-size: 16px;
      color: #ffffff;
    }
  }
`;
