import styled from 'styled-components';

export const SectionFormDriver = styled.section`
  width: 100%;
  max-width: 100%;
  height: auto;
  padding: 50px 30px;

  background: #23232c;

  display: ${props => (props.pageActive === 'driver' ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  h1 {
    font-family: Russo One;
    font-weight: normal;
    font-size: 20px;
    color: #ffffff;
  }

  p {
    font-weight: normal;
    font-size: 13px;
    color: #c2c1c3;
    margin: 10px 0 30px 0;
  }

  @media screen and (min-width: 992px) {
    max-width: 377px;
    height: 100vh;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 300px;

  label {
    width: 100%;
    font-family: Russo One;
    font-size: 13px;
    color: #bfbfbf;

    input {
      margin-top: 7px;
      margin-bottom: 10px;
      text-transform: capitalize;
    }
  }

  div.inputGroup {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    input {
      width: 100%;
    }
  }

  button {
    margin-top: 15px;
  }

  @media screen and (min-width: 992px) {
    label {
      width: auto;
    }
    div.inputGroup input {
      max-width: 140px;
    }
  }
`;
