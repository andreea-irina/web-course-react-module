import { ADD_COIN, REMOVE_COIN } from "./actions";

export const initialDashboardState = {
  coins: [],
};

export const dashboardReducer = (state, action) => {
  switch (action.type) {
    case ADD_COIN:
      return {
        ...state,
        coins: [...state.coins, action.payload],
      };

    case REMOVE_COIN:
      return {
        ...state,
        coins: state.coins.filter((coin) => coin !== action.payload),
      };

    default:
      return state;
  }
};
