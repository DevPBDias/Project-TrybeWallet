// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  ADD_EXPENSE,
  ADD_CURRENCY,
  GET_API_SUCESS,
  GET_API_FAIL,
} from '../actions';

const INITIAL_USER_STATE = {
  currencies: [],
  expenses: [],
  error: '',
  loading: false,
};

const wallet = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      loading: false,
      expenses: action.payload,
    };
  case ADD_CURRENCY:
    return {
      ...state,
      loading: false,
      currencies: action.payload,
    };
  case GET_API_SUCESS:
    return {
      ...state,
      loading: true,
      error: '',
    };
  case GET_API_FAIL:
    return {
      ...state,
      loading: false,
      error: 'Api não encontrada',
    };
  default:
    return state;
  }
};

export default wallet;
