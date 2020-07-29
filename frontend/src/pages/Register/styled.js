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

  input:nth-child(2) {
    margin-top: 50px;
    margin-bottom: 7px;
  }

  button {
    padding: 3px;
    background-color: transparent;
    border: none;

    :nth-child(4) {
      margin-top: 30px;
      margin-bottom: 20px;
      font-size: 15px;
    }
    :nth-child(5) {
      font-size: 15px;
      color: #ffffff;
    }
  }
`;
