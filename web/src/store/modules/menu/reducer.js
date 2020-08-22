import * as types from '../types';

const initialState = {
  pageActive: 'dashboard',
  statusModal: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.PAGE_ACTIVE: {
      const newState = { ...state };
      newState.pageActive = action.payload;
      return newState;
    }

    case types.STATUS_MODAL: {
      const newState = { ...state };
      newState.statusModal = action.payload;
      return newState;
    }

    default: {
      return state;
    }
  }
}
