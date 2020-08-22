import React, { useState, useEffect } from 'react';
import FadeIn from 'react-fade-in';
import { IoMdTrash } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { UlDrivers, LiDrivers, ListDrivers, InfoDriver } from './styled';
import Modal from '../../Modal';
import * as actionsDriver from '../../../store/modules/drivers/actions';
import * as actionsMenu from '../../../store/modules/menu/actions';

import emptyDrivers from '../../../assets/emptyDrivers.svg';
import IconDriver from '../../../assets/driver';

export default function DriversListComponent() {
  const dispatch = useDispatch();
  const history = useHistory();
  const pageActive = useSelector(state => state.menu.pageActive);
  const drivers = useSelector(state => state.drivers.allDrivers);
  const [showDriverSelected, setShowDriverSelected] = useState('');
  const [driverItemSelected, setDriverItemSelected] = useState(false);

  useEffect(() => {
    dispatch(actionsDriver.listDriverRequest({ history }));
  }, [dispatch, history]);

  const ShowDriver = () => (
    <InfoDriver>
      <span>Name: {showDriverSelected.name}</span>
      <span>Contact: {showDriverSelected.contact}</span>
      <span>Entrance: {showDriverSelected.entrance}</span>
      <span>Exit: {showDriverSelected.exit}</span>
      <span>Cpf: {showDriverSelected.cpf}</span>
      <span>Login: {showDriverSelected.cpf}</span>
    </InfoDriver>
  );

  const handleClick = (id_driver, index) => {
    if (pageActive === 'travel') {
      dispatch(actionsDriver.selectedDriver(drivers[index]));
      setDriverItemSelected(id_driver);
    }
  };

  const handleClickDeleteDriver = (id_driver, index) => {
    if (window.confirm('Do you want to delete this driver?')) {
      dispatch(actionsDriver.deleteDriverRequest({ id_driver, index }));
      dispatch(actionsDriver.selectedDriver(false));
    }
  };

  const handleClickShowDriver = index => {
    setShowDriverSelected(drivers[index]);
    dispatch(actionsMenu.statusModal(true));
  };

  if (drivers && drivers.length > 0) {
    return (
      <>
        <Modal Info={ShowDriver} />
        <ListDrivers pageActive={pageActive}>
          <header>
            <h1>{`${drivers.length} DRIVERS`}</h1>
          </header>

          <UlDrivers>
            {drivers.map((driver, index) => (
              <LiDrivers
                pageActive={pageActive}
                key={driver.id_driver}
                selected={driverItemSelected === driver.id_driver}
                onClick={() => handleClick(driver.id_driver, index)}
              >
                <FadeIn className="liFadeIn">
                  <small>Driver</small>
                  <h2>{driver.name}</h2>
                  <span>{driver.contact}</span>

                  <button
                    type="button"
                    className="default iconDriver"
                    onClick={() => handleClickShowDriver(index)}
                  >
                    <IconDriver />
                  </button>

                  <button
                    type="button"
                    className="default iconTrash"
                    onClick={() =>
                      handleClickDeleteDriver(driver.id_driver, index)
                    }
                  >
                    <IoMdTrash size="20" color="#6e6d6e" />
                  </button>
                </FadeIn>
              </LiDrivers>
            ))}
          </UlDrivers>
        </ListDrivers>
      </>
    );
  }
  if (drivers.length === 0) {
    return (
      <ListDrivers pageActive={pageActive}>
        <figure>
          <img id="emptyDrivers" src={emptyDrivers} alt="Empty Drivers" />
          <figcaption>Register a new driver to start traveling</figcaption>
        </figure>
      </ListDrivers>
    );
  }
  return <ListDrivers pageActive={pageActive} />;
}
