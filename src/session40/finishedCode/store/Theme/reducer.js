import { CHANGE_THEME } from "./actions";

export const initialThemeState = {
  theme: "light",
};

export const themeReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
