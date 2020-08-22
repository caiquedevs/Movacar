import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Warning } from '../../Toast';
import * as actionsDriver from '../../../store/modules/drivers/actions';

import { SectionFormDriver, Form } from './styled';

export default function FormDriverComponent() {
  const pageActive = useSelector(state => state.menu.pageActive);
  const drivers = useSelector(state => state.drivers);

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [cpf, setCpf] = useState('');
  const [entrance, setEntrance] = useState('');
  const [exit, setExit] = useState('');

  useEffect(() => {
    if (drivers.stateReq) {
      setName('');
      setContact('');
      setCpf('');
      setEntrance('');
      setExit('');
    }
  }, [drivers]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (name.length === 0 || name.length < 8) {
      toast.warning(<Warning text="The name must be at least 8 letters" />);
      return;
    }

    if (
      contact.length === 0 ||
      cpf.length === 0 ||
      entrance.length === 0 ||
      exit.length === 0
    ) {
      toast.warning(<Warning text="Fill in all fields to continue" />);
      return;
    }

    dispatch(
      actionsDriver.addDriverRequest({
        driver: { name, contact, cpf, entrance, exit },
      })
    );
  };

  return (
    <SectionFormDriver pageActive={pageActive}>
      <Form onSubmit={handleSubmit}>
        <h1>Register a new driver !</h1>
        <p>Fill out the form below to register a new driver for your company</p>

        <label>
          NAME AND SURNAME
          <input
            pattern="([aA-zZ]+ [aA-zZ]+$)"
            title="You must enter the driver's first and last name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="default"
            type="text"
            placeholder="Enter the driver's first / last name"
          />
        </label>

        <div className="inputGroup">
          <label>
            CONTACT
            <InputMask
              pattern=".{15,}"
              title="Contact must have 11 numbers"
              mask="(99) 99999-9999"
              maskChar={null}
              value={contact}
              onChange={e => setContact(e.target.value)}
              className="default"
              type="text"
              placeholder="Driver contact"
            />
          </label>
          <label>
            CPF
            <InputMask
              pattern=".{14,}"
              title="CPF must have 11 numbers"
              mask="999.999.999-99"
              maskChar={null}
              value={cpf}
              onChange={e => setCpf(e.target.value)}
              className="default"
              type="text"
              placeholder="Driver's CPF"
            />
          </label>
        </div>

        <div className="inputGroup">
          <label>
            ENTRANCE
            <InputMask
              pattern=".{4,}"
              title="Entrance must have 4 numbers"
              mask="99:99"
              maskChar={null}
              value={entrance}
              onChange={e => setEntrance(e.target.value)}
              className="default"
              type="text"
              placeholder="Entry time"
            />
          </label>
          <label>
            EXIT
            <InputMask
              pattern=".{4,}"
              title="Exit must have 4 numbers"
              mask="99:99"
              maskChar={null}
              value={exit}
              onChange={e => setExit(e.target.value)}
              className="default"
              type="text"
              placeholder="Departure time"
            />
          </label>
        </div>

        <button className="primary" type="submit">
          REGISTER
        </button>
      </Form>
    </SectionFormDriver>
  );
}
