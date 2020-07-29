import React from 'react';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { Error, Success } from '../../../components/Toast';
import api from '../../../services/api';
import * as actions from './actions';
import * as actionsMenu from '../menu/actions';
import * as types from '../types';

function* listDriver({ payload }) {
  try {
    const response = yield call(api.get, '/drivers');
    yield put(actions.listDriverSuccess({ ...response }));
  } catch (e) {
    const { history } = payload;
    history.push('/login');
    toast.error(e.response.data.error);
  }
}

function* addDriver({ payload }) {
  try {
    const response = yield call(api.post, '/drivers', payload.driver);
    const { id_driver } = response.data;
    const driver = { id_driver, ...payload.driver };
    toast.success(<Success text={response.data.msg} />);
    yield put(actions.addDriverSuccess(driver));
    yield put(actionsMenu.setPageActive('dashboard'));
  } catch (e) {
    toast.error(<Error text={e.response.data.error} />);
    yield put(actions.addDriverFailure());
  }
}

function* deleteDriver({ payload }) {
  try {
    const response = yield call(api.delete, `/drivers/${payload.id_driver}`);
    toast.success(response.data.msg);
    yield put(actions.deleteDriverSuccess(payload));
  } catch (e) {
    toast.error(e.response.data.error);
  }
}

export default all([
  takeLatest(types.LIST_DRIVER_REQUEST, listDriver),
  takeLatest(types.ADD_DRIVER_REQUEST, addDriver),
  takeLatest(types.DELETE_DRIVER_REQUEST, deleteDriver),
]);
