// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, ADD_CURRENCY } from '../actions';

const INITIAL_USER_STATE = {
  currencies: 'BRL',
  expenses: 0,
};

const wallet = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: action.payload,
    };
  case ADD_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
