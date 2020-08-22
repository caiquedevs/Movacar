import * as types from '../types';

const initialState = {
  allTravels: false,
  stateReq: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    // Listar travels
    case types.LIST_TRAVEL_SUCCESS: {
      const newState = { ...state };
      newState.allTravels = action.payload.data.reverse();
      return newState;
    }
    case types.LIST_TRAVEL_FAILURE: {
      return state;
    }

    // Add travels
    case types.ADD_TRAVEL_SUCCESS: {
      const newState = { ...state };
      const copy = Array.from(newState.allTravels);
      const newTravel = { ...action.payload };

      copy.splice(0, 0, newTravel);
      newState.allTravels = copy;
      newState.stateReq = true;

      return newState;
    }

    case types.ADD_DRIVER_FAILURE: {
      const newState = { ...state };
      newState.stateReq = false;

      return newState;
    }

    // Delete travels
    case types.DELETE_TRAVEL_SUCCESS: {
      const { index } = action.payload;

      const newState = { ...state };
      const copy = Array.from(newState.allTravels);

      copy.splice(index, 1);
      newState.allTravels = copy;
      return newState;
    }

    default: {
      return state;
    }
  }
}
