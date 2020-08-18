import styled from 'styled-components';

export const LateralMenu = styled.nav`
  width: 100%;
  height: 80px;
  padding: 0 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: #2c2c37;

  @media screen and (min-width: 992px) {
    max-width: 80px;
    height: 100vh;
    padding: 30px 0;
    flex-direction: column;
  }

  @media screen and (min-width: 0px) and (max-width: 575px) {
    padding: 0 30px 0 0;

    figure {
      display: none;
    }
  }
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;

  align-items: center;
  justify-content: center;

  li {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li:nth-child(3) {
    display: ${props => (props.drivers ? 'flex' : 'none')};f
  }

  @media screen and (min-width: 992px) {
    width: 100%;
    min-height: 72px;
    justify-content: flex-start;
    flex-direction: column;
  }

  @media screen and (min-width: 0px) and (max-width: 575px) {
  justify-content: ${props => (props.drivers ? 'space-evenly' : 'center')};
  }
`;

export const HomeIcon = styled.li`
  :before {
    content: '';
    width: 82px;
    height: 2px;
    position: absolute;
    right: 0;
    bottom: 0;
    background: ${props =>
      props.pageActive === 'dashboard' ? '#f9c71b;' : 'transparent'};
  }

  @media screen and (min-width: 992px) {
    justify-content: flex-start;
    flex-direction: column;

    :before {
      width: 2px;
      height: 72px;
      right: 0;
      top: 0;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
  }
  @media screen and (min-width: 0px) and (max-width: 575px) {
  }
`;

export const DriverIcon = styled(HomeIcon)`
  :before {
    background: ${props =>
      props.pageActive === 'driver' ? '#f9c71b;' : 'transparent'};
  }
`;

export const TravelIcon = styled(HomeIcon)`
  :before {
    background: ${props =>
      props.pageActive === 'travel' ? '#f9c71b;' : 'transparent'};
  }
`;
