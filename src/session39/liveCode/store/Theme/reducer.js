import { CHANGE_THEME } from "./actions";

export const initialState = {
  theme: "dark",
};

export const themeReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    default:
      return state;
  }
};
