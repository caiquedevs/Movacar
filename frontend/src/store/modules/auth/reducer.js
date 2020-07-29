import * as types from '../types';

const initialState = {
  user: {},
  token: false,
  isLoggedIn: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.user = action.payload.user;
      newState.token = action.payload.token;
      newState.isLoggedIn = true;

      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }

    default: {
      return state;
    }
  }
}
