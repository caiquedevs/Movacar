import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import * as actions from './actions';
import * as actionsMenu from '../menu/actions';
import * as types from '../types';

function* listTravel() {
  try {
    const response = yield call(api.get, '/travels');
    yield put(actions.listTravelSuccess({ ...response }));
  } catch (e) {
    yield put(actions.listTravelFailure());
  }
}

function* addTravel({ payload }) {
  try {
    const response = yield call(api.post, '/travels', payload);
    toast.success(response.data.msg);
    yield put(actions.addTravelSuccess(response.data));
    yield put(actionsMenu.setPageActive('dashboard'));
  } catch (e) {
    toast.error(e.response.data.error);
  }
}

function* deleteTravel({ payload }) {
  try {
    const response = yield call(api.delete, `/travels/${payload.id_travel}`);
    toast.success(response.data.msg);
    yield put(actions.deleteTravelSuccess(payload));
  } catch (e) {
    toast.error(e.response.data.error);
  }
}

export default all([
  takeLatest(types.LIST_TRAVEL_REQUEST, listTravel),
  takeLatest(types.ADD_TRAVEL_REQUEST, addTravel),
  takeLatest(types.DELETE_TRAVEL_REQUEST, deleteTravel),
]);
