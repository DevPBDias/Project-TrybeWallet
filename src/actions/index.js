export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_CURRENCY = 'ADD_CURRENCY';

export const emailAction = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});

export const expenseAction = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const currencyAction = (currency) => ({
  type: ADD_EXPENSE,
  payload: currency,
});
