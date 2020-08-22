import styled from 'styled-components';

export const Section = styled.nav`
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding: 30px 0;

  background: #2c2c37;

  display: ${props => (props.pageActive !== 'travel' ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  figure {
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: flex-end;
    padding-top: 50px;

    img#emptyTravels {
      width: 250px;
      margin-top: 50px;
    }

    figcaption {
      color: #c2c1c3;
      font-size: 20px;
    }
  }

  h1:nth-child(1) {
    width: 100%;
    margin-top: 10px;
    padding: 0 35px;

    font-family: 'Russo One';
    font-weight: normal;
    font-size: 13px;
    color: #c2c1c3;
  }

  @media screen and (min-width: 992px) {
    height: 100vh;
  }
  @media screen and (min-width: 0px) and (max-width: 991px) {
    display: ${props => (props.travelsMobile ? 'flex' : 'none')};
  }

  @media screen and (min-width: 0px) and (max-width: 575px) {
    h1:nth-child(1) {
      padding: 0px 20px;
    }
  }
`;
