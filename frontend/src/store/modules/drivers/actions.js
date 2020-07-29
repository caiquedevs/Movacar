import * as types from '../types';

// Listar motoristas -------------------
export function listDriverRequest(payload) {
  return {
    type: types.LIST_DRIVER_REQUEST,
    payload,
  };
}

export function listDriverSuccess(payload) {
  return {
    type: types.LIST_DRIVER_SUCCESS,
    payload,
  };
}

export function listDriverFailure() {
  return {
    type: types.LIST_DRIVER_FAILURE,
  };
}

// Adicionar motoristas -------------------
export function addDriverRequest(payload) {
  return {
    type: types.ADD_DRIVER_REQUEST,
    payload,
  };
}

export function addDriverSuccess(payload) {
  return {
    type: types.ADD_DRIVER_SUCCESS,
    payload,
  };
}

export function addDriverFailure() {
  return {
    type: types.ADD_DRIVER_FAILURE,
  };
}

// Deletar motoristas -------------------
export function deleteDriverRequest(payload) {
  return {
    type: types.DELETE_DRIVER_REQUEST,
    payload,
  };
}

export function deleteDriverSuccess(payload) {
  return {
    type: types.DELETE_DRIVER_SUCCESS,
    payload,
  };
}

export function deleteDriverFailure() {
  return {
    type: types.DELETE_DRIVER_FAILURE,
  };
}

export function selectedDriver(payload) {
  return {
    type: types.SELECTED_DRIVER,
    payload,
  };
}
