import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isEmail } from 'validator';
import { Warning, Error } from '../../components/Toast';
import api from '../../services/api';

import * as actions from '../../store/modules/auth/actions';
import { Main, Form } from './styled';

export default function RegisterPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const data = { nome, email };

    if (!nome || nome.length < 3)
      return toast.warning(<Warning text="Fill in your name" />);

    if (email.length < 10)
      return toast.warning(<Warning text="Fill in the email" />);

    if (!isEmail(email)) {
      return toast.error(<Error text="Invalid email entered" />);
    }

    await api
      .post('/login', data)
      .then(response => {
        const { pin } = response.data;
        dispatch(actions.loginRequest({ pin, history }));
      })
      .catch(error => console.log('erro', error.response.data.error));
  };

  return (
    <Main>
      <Form onSubmit={handleSubmit}>
        <h1>Register</h1>

        <input
          value={nome}
          onChange={e => setNome(e.target.value)}
          placeholder="Nome"
          className="default"
          type="text"
          maxLength="31"
        />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          className="default"
          type="email"
          maxLength="31"
        />

        <button className="primary" type="submit">
          REGISTER
        </button>

        <button onClick={() => history.push('/login')} type="button">
          I&apos; m already registered
        </button>
      </Form>
    </Main>
  );
}
