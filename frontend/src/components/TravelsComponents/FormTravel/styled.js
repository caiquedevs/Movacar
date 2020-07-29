import styled from 'styled-components';

export const SectionFormTravel = styled.section`
  width: 100%;
  max-width: 909px;
  height: 100vh;
  padding: 70px 0 0 100px;
  overflow: auto;

  background: #2c2c37;

  display: ${props => (props.pageActive === 'travel' ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  header {
    width: auto;
    display: flex;
    align-items: center;

    svg {
      margin-right: 15px;
      color: #f9c71b;
      font-size: 22px;
    }

    h1 {
      font-weight: bold;
      font-size: 25px;
      color: #ffffff;
      display: flex;
    }
  }
`;

export const Form = styled.form`
  h1 {
    font-weight: bold;
    font-size: 25px;
    color: #ffffff;
    margin-bottom: 30px;
  }

  strong {
    font-weight: bold;
    font-size: 25px;
    color: #f9c71b;
    text-transform: uppercase;
  }

  label {
    font-family: Russo One;
    font-size: 13px;
    color: #bfbfbf;
  }
  input {
    margin-top: 7px;
    margin-bottom: 10px;
  }

  div.inputGroup:nth-child(2) {
    width: 360px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input#description {
      width: 100%;
      max-width: 170px;
    }

    input#date {
      max-width: 80px;
    }

    input#hour {
      max-width: 80px;
    }
  }

  div.inputGroup:nth-child(3) {
    width: 360px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input#address {
      width: 100%;
      min-width: 265px;
    }

    input#number {
      max-width: 80px;
    }
  }

  div.inputGroup:nth-child(4) {
    width: 360px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input#cep {
      width: 100%;
      max-width: 170px;
    }

    input#uf {
      max-width: 80px;
      text-transform: uppercase;
    }

    input#city {
      max-width: 80px;
      text-transform: uppercase;
    }
  }

  button {
    margin-top: 20px;
  }
`;
