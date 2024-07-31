export const ADD_COIN = "ADD_COIN";
export const REMOVE_COIN = "REMOVE_COIN";

export const addCoin = (coin) => ({
  type: ADD_COIN,
  payload: coin,
});

export const removeCoin = (coin) => ({
  type: REMOVE_COIN,
  payload: coin,
});
