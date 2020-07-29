import styled from 'styled-components';

export const ListDrivers = styled.nav`
  width: 100%;
  max-width: 377px;
  min-width: 377px;
  height: 100vh;
  padding: 30px 0;

  background: #23232c;

  display: ${props => (props.pageActive === 'driver' ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  figure {
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: center;

    img#emptyDrivers {
      width: 250px;
      margin-top: 25px;
    }

    figcaption {
      color: #c2c1c3;
      font-size: 16px;
    }
  }

  header {
    width: 100%;
    max-width: 343px;
    display: flex;
    align-items: center;
    margin: 10px 0 30px 0;

    h1 {
      font-family: Russo One;
      font-size: 13px;
      color: #c2c1c3;
      font-weight: normal;
    }
  }
`;

export const UlDrivers = styled.ul`
  width: 100%;
  height: calc(100vh - 60px);

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

export const LiDrivers = styled.li`
  width: 100%;
  height: auto;
  max-width: 343px;
  min-height: 100px;

  margin: 6px 0;

  div.liFadeIn {
    width: 100%;
    height: 100px;
    padding: 15px 18px;

    background-color: #2c2c37;
    border-radius: 3px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    animation: effect 0.5s;

    :hover {
      cursor: ${props =>
        props.pageActive === 'travel' ? 'pointer' : 'default'};
    }

    :hover button.iconTrash {
      visibility: visible;
      opacity: 1;
    }

    small {
      font-weight: 500;
      font-size: 13px;
      color: ${props =>
        props.selected && props.pageActive === 'travel'
          ? '#ffffff'
          : '#6e6d6e'};
    }

    h2 {
      text-transform: capitalize;
      font-weight: 500;
      font-size: 16px;
      color: ${props =>
        props.selected && props.pageActive === 'travel'
          ? '#5CD8C7'
          : '#6e6d6e'};
    }

    span {
      font-weight: 500;
      font-size: 13px;
      color: #6e6d6e;
    }

    button.iconDriver {
      position: absolute;
      top: -65px;
      right: -310px;
      transition: 0.2s all;

      :hover svg path {
        fill: #f9c71b;
      }
    }

    button.iconTrash {
      position: absolute;
      bottom: -2px;
      right: -309px;
      visibility: hidden;
      opacity: 0;
      transition: 0.2s all;
      display: ${props => (props.pageActive === 'travel' ? 'none' : 'block')};

      :hover svg path {
        fill: red;
      }
    }
  }
`;

export const InfoDriver = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-top: 7px;
    font-size: 18px;
  }
`;
