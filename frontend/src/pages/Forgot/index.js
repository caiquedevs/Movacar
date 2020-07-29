import React, { useState, useRef } from 'react';
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

  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  const data = {
    email,
  };

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  }

  const ShowPin = () => (
    <InfoModal>
      <div>
        <h1>Seu pin é:&nbsp;</h1>
        <h2>{pin}</h2>
        <h2 type="text" ref={textAreaRef} value="Some text to copy">
          Some text to copy
        </h2>
      </div>

      <button onClick={copyToClipboard} type="button">
        COPY
      </button>
      {copySuccess}
    </InfoModal>
  );

  const handleSubmit = async e => {
    e.preventDefault();

    if (isEmpty(email)) {
      return toast.warning('Preencha um email para continuar');
    }

    if (!isEmail(email)) {
      return toast.error('Email inserido inválido');
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
