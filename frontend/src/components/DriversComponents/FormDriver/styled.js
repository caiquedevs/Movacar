import styled from 'styled-components';

export const SectionFormDriver = styled.section`
  width: 100%;
  max-width: 377px;
  min-width: 377px;
  height: 100vh;
  padding: 50px 40px;

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
`;

export const Form = styled.form`
  width: 100%;

  label {
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
    align-items: center;
    justify-content: space-between;

    input {
      max-width: 140px;
    }
  }

  button {
    margin-top: 15px;
  }
`;
