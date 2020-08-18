import styled from 'styled-components';

export const ListDrivers = styled.nav`
  width: 100%;
  max-width: 100%;
  height: auto;
  padding: 30px 15px;

  background: #23232c;

  display: ${props => (props.pageActive === 'driver' ? 'none' : 'flex')};
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;

  figure {
    width: 100%;
    height: calc(100vh - 140px);
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
    margin-left: 10px;

    h1 {
      font-family: Russo One;
      font-size: 13px;
      color: #c2c1c3;
      font-weight: normal;
    }
  }

  @media screen and (min-width: 992px) {
    max-width: 377px;
    height: 100vh;
    padding: 30px 0;
    align-items: center;

    header {
      margin: 10px 0 30px 0;
    }

    figure {
      height: 100vh;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
  }
  @media screen and (min-width: 0px) and (max-width: 575px) {
  }
`;

export const UlDrivers = styled.ul`
  width: 100%;
  height: 200px;

  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: auto;

  @media screen and (min-width: 992px) {
    max-width: 377px;
    height: calc(100vh - 60px);
    margin-left: 0px;

    flex-direction: column;
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
  }
  @media screen and (min-width: 0px) and (max-width: 575px) {
  }
`;

export const LiDrivers = styled.li`
  width: 192px;
  min-width: 192px;
  height: auto;
  max-width: 343px;
  min-height: 100px;

  margin-right: 7px;

  div.liFadeIn {
    width: 192px;
    min-width: 192px;
    height: 155px;
    padding: 15px 18px;

    background-color: #2c2c37;
    border-radius: 10px;

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
      top: -110px;
      right: -150px;
      transition: 0.2s all;

      :hover svg path {
        fill: #f9c71b;
      }
    }

    button.iconTrash {
      position: absolute;
      bottom: 0px;
      right: -149px;
      transition: 0.2s all;
      display: ${props => (props.pageActive === 'travel' ? 'none' : 'block')};

      :hover svg path {
        fill: red;
      }
    }
  }

  @media screen and (min-width: 992px) {
    width: 100%;
    border-radius: 3px;
    margin: 6px 0;

    div.liFadeIn {
      width: 100%;
      height: 100px;
    }

    div.liFadeIn {
      button.iconTrash {
        visibility: hidden;
        opacity: 0;
        bottom: -2px;
        right: -309px;
      }

      button.iconDriver {
        top: -65px;
        right: -310px;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
  }
  @media screen and (min-width: 0px) and (max-width: 575px) {
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
