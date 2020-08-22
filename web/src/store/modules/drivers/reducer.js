import * as types from '../types';

const initialState = {
  allDrivers: false,
  selectedDriver: false,
  stateReq: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    // List Drivers
    case types.LIST_DRIVER_SUCCESS: {
      const newState = { ...state };
      newState.allDrivers = action.payload.data.reverse();
      return newState;
    }

    // Add drivers
    case types.ADD_DRIVER_SUCCESS: {
      const newState = { ...state };
      const copyDrivers = Array.from(state.allDrivers);

      copyDrivers.splice(0, 0, action.payload);
      newState.allDrivers = copyDrivers;
      newState.stateReq = true;

      console.log('sucess', newState);
      return newState;
    }

    case types.ADD_DRIVER_FAILURE: {
      const newState = { ...state };
      newState.stateReq = false;
      console.log('failure', newState);
      return newState;
    }

    case types.DELETE_DRIVER_SUCCESS: {
      const { index } = action.payload;

      const newState = { ...state };
      const copy = Array.from(newState.allDrivers);

      copy.splice(index, 1);
      newState.allDrivers = copy;
      return newState;
    }

    case types.SELECTED_DRIVER: {
      const newState = { ...state };
      if (!action.payload) {
        newState.selectedDriver = action.payload;
        return newState;
      }
      const { id_driver, name, surname, contact } = action.payload;
      newState.selectedDriver = { id_driver, name, surname, contact };
      return newState;
    }

    default: {
      return state;
    }
  }
}
