import * as types from '../types';

export function setPageActive(payload) {
  return {
    type: types.PAGE_ACTIVE,
    payload,
  };
}

export function statusModal(payload) {
  return {
    type: types.STATUS_MODAL,
    payload,
  };
}
