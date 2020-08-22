import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import { useHistory } from 'react-router-dom';
import { Warning } from '../../components/Toast';

import * as actions from '../../store/modules/auth/actions';
import { Main, Form } from './styled';

export default function LoginPage(props) {
  const [pin, setPin] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();
  const prevPath = get(props, 'location.state.prevPath', '/');

  const handleSubmit = e => {
    e.preventDefault();

    if (!pin)
      return toast.warning(<Warning text="Fill in the ID field to continue" />);

    dispatch(actions.loginRequest({ pin, prevPath, history }));
  };

  return (
    <Main>
      <Form onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        <input
          onChange={e => setPin(e.target.value)}
          placeholder="ID"
          value={pin}
          className="default"
          type="password"
        />

        <button className="primary" type="submit">
          LOGIN
        </button>

        <button onClick={() => history.push('/forgot')} type="button">
          <strong>Forgot</strong> your id?
        </button>

        <button onClick={() => history.push('/register')} type="button">
          Create your account
        </button>
      </Form>
    </Main>
  );
}
