const THEME_CHANGED = 'app/theme/THEME_CHANGED';

const changeTheme = (theme) => ({ type: THEME_CHANGED, payload: theme });

const initialState = {
  hex: '#4369b2',
  hsl: 'hsl(219, 45%,',
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case THEME_CHANGED:
      return payload;
    default:
      return state;
  }
};

export { changeTheme };
export default reducer;
