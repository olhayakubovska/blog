import { ACTION_TYPE } from "../actions/action-type";
import { ROLE } from "../constants";

const initialStateUser = {
  id: null,
  login: null,
  roleId: ROLE.GUEST,
  session: null,
};

export const userReducer = (state = initialStateUser, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_USER:
      return {
        ...state,
        ...action.payload,
      };

    case ACTION_TYPE.LOGOUT:
      return initialStateUser

    default:
      return state;
  }
};