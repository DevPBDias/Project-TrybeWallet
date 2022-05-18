// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ACTION_USER } from '../actions/index';

const INITIAL_USER_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
  case ACTION_USER:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default userReducer;
