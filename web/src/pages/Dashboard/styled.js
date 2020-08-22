import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  /* background: #23232c; */

  @media screen and (min-width: 992px) {
    height: 100vh;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
  }
  @media screen and (min-width: 0px) and (max-width: 575px) {
  }
`;
