import styled from 'styled-components';

export const LateralMenu = styled.nav`
  width: 100%;
  max-width: 80px;
  height: 100vh;
  padding: 30px 0;

  background: #2c2c37;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  li {
    width: 100%;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li:nth-child(3) {
    display: ${props => (props.drivers ? 'flex' : 'none')};
  }
`;

export const HomeIcon = styled.li`
  :before {
    content: '';
    width: 2px;
    height: 72px;
    position: absolute;
    right: 0;
    top: 0;
    background: ${props =>
      props.pageActive === 'dashboard' ? '#f9c71b;' : 'transparent'};
  }
`;

export const DriverIcon = styled.li`
  :before {
    content: '';
    width: 2px;
    height: 72px;
    position: absolute;
    right: 0;
    top: 0;
    background: ${props =>
      props.pageActive === 'driver' ? '#f9c71b;' : 'transparent'};
  }
`;

export const TravelIcon = styled.li`
  :before {
    content: '';
    width: 2px;
    height: 72px;
    position: absolute;
    right: 0;
    top: 0;
    background: ${props =>
      props.pageActive === 'travel' ? '#f9c71b;' : 'transparent'};
  }
`;
