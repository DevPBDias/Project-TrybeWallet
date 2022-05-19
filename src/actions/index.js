export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_CURRENCY = 'ADD_CURRENCY';
export const GET_API_FAIL = 'GET_API_FAIL';
export const GET_API_SUCESS = 'GET_API_SUCESS';

const CURRENCY_API = 'https://economia.awesomeapi.com.br/json/all';

export const emailAction = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});

export const expenseAction = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const currencyAction = (currency) => ({
  type: ADD_CURRENCY,
  payload: currency,
});

export const getApiSucess = () => ({
  type: GET_API_SUCESS,
});

export const getApiFail = () => ({
  type: GET_API_FAIL,
});

export const getCurrencyThunk = () => {
  console.log('Redux Thunk');
  return async (dispatch) => {
    dispatch(getApiSucess());
    try {
      const response = await fetch(CURRENCY_API);
      const currency = await response.json();

      const ObjInArray = Object.keys(currency);
      // const propertyValues = Object.values(person);
      const currencyWithoutUSDT = ObjInArray.splice(1, 1);
      console.log(currencyWithoutUSDT);
      // list.splice(0, 2);
      // Starting at index position 0, remove two elements ["bar", "baz"] and retains ["foo", "qux"].

      dispatch(currencyAction(ObjInArray));
    } catch (error) {
      dispatch(getApiFail());
    }
  };
};
