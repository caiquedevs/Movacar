import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actionsAuth from '../../store/modules/auth/actions';
import * as actionsMenu from '../../store/modules/menu/actions';
import * as actionsDriver from '../../store/modules/drivers/actions';

import { LateralMenu, List, HomeIcon, DriverIcon, TravelIcon } from './styled';

import logo from '../../assets/logo.svg';
import IconHome from '../../assets/IconHome';
import IconDriver from '../../assets/IconDriver';
import IconTravel from '../../assets/IconTravel';
import logout from '../../assets/logout.svg';

export default function LateralMenuComponent() {
  const dispatch = useDispatch();
  const history = useHistory();
  const pageActive = useSelector(state => state.menu.pageActive);
  const drivers = useSelector(state => state.drivers.allDrivers);

  const handleClickHome = () => {
    dispatch(actionsMenu.setPageActive('dashboard'));
  };

  const handleClickDriver = () => {
    dispatch(actionsMenu.setPageActive('driver'));
  };

  const handleClickTravel = () => {
    if (drivers && drivers.length > 0) {
      dispatch(actionsMenu.setPageActive('travel'));
    }
  };

  const handleClickExit = () => {
    dispatch(actionsMenu.setPageActive('dashboard'));
    dispatch(actionsDriver.selectedDriver(false));
    dispatch(actionsAuth.loginFailure());
    history.push('/login');
  };

  return (
    <LateralMenu>
      <figure>
        <img src={logo} alt="logo" />
      </figure>

      <List drivers={drivers.length > 0}>
        <HomeIcon pageActive={pageActive}>
          <button className="default" onClick={handleClickHome} type="button">
            <IconHome />
          </button>
        </HomeIcon>

        <DriverIcon pageActive={pageActive}>
          <button className="default" onClick={handleClickDriver} type="button">
            <IconDriver />
          </button>
        </DriverIcon>

        <TravelIcon pageActive={pageActive}>
          <button className="default" onClick={handleClickTravel} type="button">
            <IconTravel />
          </button>
        </TravelIcon>
      </List>

      <button className="default" onClick={handleClickExit} type="button">
        <img src={logout} alt="logout icon" />
      </button>
    </LateralMenu>
  );
}
