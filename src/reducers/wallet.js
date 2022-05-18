// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ACTION_WALLET } from '../actions/index';

const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_WALLET_STATE, action) => {
  switch (action.type) {
  case ACTION_WALLET:
    return {
      ...state,
      currencies: action.currencies,
      expenses: action.expenses,
    };
  default:
    return state;
  }
};

export default walletReducer;
