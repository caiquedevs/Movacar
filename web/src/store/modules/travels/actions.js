import * as types from '../types';

export function listTravelRequest() {
  return {
    type: types.LIST_TRAVEL_REQUEST,
  };
}

export function listTravelSuccess(payload) {
  return {
    type: types.LIST_TRAVEL_SUCCESS,
    payload,
  };
}

export function listTravelFailure() {
  return {
    type: types.LIST_TRAVEL_FAILURE,
  };
}

export function addTravelRequest(payload) {
  return {
    type: types.ADD_TRAVEL_REQUEST,
    payload,
  };
}

export function addTravelSuccess(payload) {
  return {
    type: types.ADD_TRAVEL_SUCCESS,
    payload,
  };
}

export function addTravelFailure() {
  return {
    type: types.ADD_TRAVEL_FAILURE,
  };
}

export function deleteTravelRequest(payload) {
  return {
    type: types.DELETE_TRAVEL_REQUEST,
    payload,
  };
}

export function deleteTravelSuccess(payload) {
  return {
    type: types.DELETE_TRAVEL_SUCCESS,
    payload,
  };
}

export function deleteTravelFailure() {
  return {
    type: types.DELETE_TRAVEL_FAILURE,
  };
}
