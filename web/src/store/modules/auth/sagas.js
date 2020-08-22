import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import api from '../../../services/api';
import * as actions from './actions';
import * as types from '../types';

function* auth({ payload }) {
  try {
    const { history } = payload;
    const response = yield call(api.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));
    history.push('/');

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    toast.success('Seja bem vindo ', response.data.nome);
  } catch (e) {
    toast.error(e.response.data.error);
    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  api.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, auth),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
