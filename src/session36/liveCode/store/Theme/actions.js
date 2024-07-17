export const CHANGE_THEME = "CHANGE_THEME";

export const changeTheme = (newTheme) => {
  return {
    type: CHANGE_THEME,
    payload: newTheme,
  };
};
