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
    font-size: 23px;
    line-height: 29px;
  }

  button {
    padding: 3px;
    background-color: transparent;
    border: none;

    :nth-child(4) {
      margin-top: 33px;
      font-size: 15px;
      color: #ffffff;
    }
  }
`;

export const InfoModal = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 20px;
  }
  h2 {
    font-size: 18px;
  }

  button {
    margin-top: 15px;
    height: 40px;
  }
`;
