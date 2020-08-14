import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { IoIosArrowBack } from 'react-icons/io';
import InputMask from 'react-input-mask';
import * as actionsTravel from '../../../store/modules/travels/actions';

import { SectionFormTravel, Form } from './styled';

export default function FormTravelComponent() {
  const pageActive = useSelector(state => state.menu.pageActive);
  const selectedDriver = useSelector(state => state.drivers.selectedDriver);
  const stateReq = useSelector(state => state.travels.stateReq);

  const dispatch = useDispatch();

  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [cep, setCep] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');

  useEffect(() => {
    if (stateReq) {
      setAddress('');
      setNumber('');
      setCep('');
      setCity('');
      setState('');
      setDescription('');
      setDate('');
      setHour('');
    }
  }, [stateReq, selectedDriver]);

  const handleSubmit = e => {
    e.preventDefault();

    if (!description || description.length < 7)
      return toast.info('The description must be between 7 and 100 characters');

    if (!date || date.length < 5)
      return toast.info('The date must be at least 4 characters');

    if (!hour || hour.length < 5)
      return toast.info('The hour must be at least 4 characters');

    if (!address || address < 5)
      return toast.info('The address must be between 5 and 100 characters');

    if (!number || number.length < 1)
      return toast.info('The number must be between 1 and 5 characters');

    if (!cep || cep.length < 9)
      return toast.info('he cep must be at least 8 characters');

    if (!city || city.length < 2)
      return toast.info('he city must be at least 2 characters');

    if (!state || state.length < 2)
      return toast.info('he state must be at least 2 characters');

    dispatch(
      actionsTravel.addTravelRequest({
        address,
        number,
        description,
        date,
        hour,
        cep,
        city,
        state,
        status: 'pending',

        id_driver: selectedDriver.id_driver,
        name_driver: selectedDriver.name,
      })
    );
  };

  if (!selectedDriver) {
    return (
      <SectionFormTravel pageActive={pageActive}>
        <header>
          <IoIosArrowBack />
          <h1>Select a driver for travel</h1>
        </header>
      </SectionFormTravel>
    );
  }
  return (
    <SectionFormTravel pageActive={pageActive}>
      <Form onSubmit={handleSubmit}>
        <h1>
          Cadastre uma viagem para:
          <strong> {selectedDriver.name}</strong>
        </h1>

        <div className="inputGroup">
          <label>
            DESCRIPTION
            <InputMask
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="default"
              type="text"
              placeholder="Enter a description"
              id="description"
            />
          </label>
          <label>
            DATE
            <InputMask
              mask="99/99"
              maskChar={null}
              value={date}
              onChange={e => setDate(e.target.value)}
              className="default"
              type="text"
              placeholder="d/m"
              id="date"
            />
          </label>
          <label>
            HOUR
            <InputMask
              mask="99:99"
              maskChar={null}
              value={hour}
              onChange={e => setHour(e.target.value)}
              className="default"
              type="text"
              placeholder="h:m"
              id="hour"
            />
          </label>
        </div>

        <div className="inputGroup">
          <label>
            ADDRESS
            <input
              value={address}
              onChange={e => setAddress(e.target.value)}
              className="default"
              type="text"
              placeholder="Enter travel address"
              id="address"
            />
          </label>
          <label>
            NR
            <InputMask
              mask="9999"
              maskChar={null}
              value={number}
              onChange={e => setNumber(e.target.value)}
              className="default"
              type="text"
              placeholder="0000"
              id="number"
            />
          </label>
        </div>

        <div className="inputGroup">
          <label>
            CEP
            <InputMask
              mask="99999-999"
              maskChar={null}
              value={cep}
              onChange={e => setCep(e.target.value)}
              className="default"
              type="text"
              placeholder="Enter zip code"
              id="cep"
            />
          </label>
          <label>
            CITY
            <InputMask
              mask="aa"
              maskChar={null}
              value={city}
              onChange={e => setCity(e.target.value)}
              className="default"
              type="text"
              placeholder="SV"
              id="city"
            />
          </label>
          <label>
            UF
            <InputMask
              mask="aa"
              maskChar={null}
              value={state}
              onChange={e => setState(e.target.value)}
              className="default"
              type="text"
              placeholder="SP"
              id="uf"
            />
          </label>
        </div>

        <button className="primary" type="submit">
          REGISTER
        </button>
      </Form>
    </SectionFormTravel>
  );
}
