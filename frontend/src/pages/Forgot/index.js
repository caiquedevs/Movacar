import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isEmpty, isEmail } from 'validator';
import api from '../../services/api';
import * as actionsMenu from '../../store/modules/menu/actions';

import { Main, Form, InfoModal } from './styled';
import Modal from '../../components/Modal';

export default function ForgotPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');

  const data = {
    email,
  };

  const ShowPin = () => (
    <InfoModal>
      <div>
        <h1>Seu pin é:&nbsp;</h1>
        <h2>{pin}</h2>
      </div>
    </InfoModal>
  );

  const handleSubmit = async e => {
    e.preventDefault();

    if (isEmpty(email)) {
      return toast.warning('Fill in an email to continue');
    }

    if (!isEmail(email)) {
      return toast.error('Invalid email entered');
    }

    await api
      .post('/forgot', data)
      .then(response => {
        setPin(response.data.pin);
        dispatch(actionsMenu.statusModal(true));
      })
      .catch(error => toast.error(error.response.data.error));
  };

  return (
    <Main>
      <Modal Info={ShowPin} />
      <Form onSubmit={handleSubmit}>
        <h1>FORGOT ID</h1>
        <input
          className="default"
          spellCheck="false"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button className="primary" type="submit">
          SEND
        </button>
        <button onClick={() => history.push('/login')} type="button">
          Return
        </button>
      </Form>
    </Main>
  );
}
