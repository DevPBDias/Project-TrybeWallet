export const ACTION_USER = 'ACTION_USER';
export const ACTION_WALLET = 'ACTION_WALLET';

export const userAction = (state) => ({
  type: ACTION_USER,
  state,
});

export const walletAction = (state) => ({
  type: ACTION_WALLET,
  state,
});
