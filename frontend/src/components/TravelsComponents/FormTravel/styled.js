import styled from 'styled-components';

export const SectionFormTravel = styled.section`
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  padding: 50px 15px 0 15px;
  overflow: auto;

  background: #2c2c37;

  display: ${props => (props.pageActive === 'travel' ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  header {
    width: auto;
    display: flex;
    align-items: center;

    svg {
      margin-right: 15px;
      color: #f9c71b;
      font-size: 22px;
      transform: rotate(90deg);
    }

    h1 {
      font-weight: bold;
      font-size: 22px;
      color: #ffffff;
      display: flex;
    }
  }

  @media screen and (min-width: 992px) {
    max-width: 909px;
    height: 100vh;
    align-items: flex-start;
    padding: 70px 0 0 100px;

    header {
      svg {
        transform: rotate(0deg);
      }
      h1 {
        font-size: 25px;
      }
    }
  }
`;

// ================================================= //
// ===================== FORM ====================== //
// ================================================= //

export const Form = styled.form`
  width: 100%;
  max-width: 280px;

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
    width: auto;
    font-family: Russo One;
    font-size: 13px;
    color: #bfbfbf;
  }
  input {
    width: 280px;
    margin-top: 7px;
    margin-bottom: 10px;
  }

  div.inputGroup:nth-child(2) {
    flex-wrap: wrap;
  }

  div.inputGroup {
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: space-between;

    label#description {
      width: 100%;
    }

    label#date,
    label#hour {
      width: 48%;
    }

    label#address {
      width: 190px;
    }

    label#number {
      width: 80px;
    }

    label#cep {
      width: 150px;
    }

    label#city {
      width: 55px;
    }

    label#uf {
      width: 55px;
    }
  }

  button {
    margin-top: 20px;
  }

  @media screen and (min-width: 992px) {
    max-width: 400px;

    div.inputGroup {
      label#address {
        max-width: 310px;
        input {
          width: 310px;
          max-width: 310px;
        }
      }

      label#description {
        max-width: 220px;
      }

      label#cep {
        width: 220px;
      }

      label#date,
      label#hour,
      label#number,
      label#city,
      label#uf {
        width: 80px;
      }
    }
  }
`;
