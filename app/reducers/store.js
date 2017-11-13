import * as actionTypes from '../constants/userinfo';

const initialState = [];

export default function store(state = initialState, action) {
  switch (action.type) {
    case actionTypes.STORE_UPDATE:
      return;
    case actionTypes.STORE_ADD:
      return;
    case actionTypes.STORE_RM:
      return;
    default:
      return state;
  }
}
