import styled from 'styled-components';

export const SectionModal = styled.section`
  width: 100%;
  height: 100vh;
  padding: 30px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(43, 46, 56, 0.9);
  display: ${props => (props.statusModal ? 'flex' : 'none')};

  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 350px;
  height: auto;
  padding: 23px 30px;

  background: #fff;
  animation: effect 0.5s;

  display: flex;
  flex-direction: column;

  button:nth-child(1) {
    position: absolute;
    top: 10px;
    left: 10px;
  }
`;
