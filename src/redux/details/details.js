const DETAILS_OPENED = 'app/details/DETAILS_OPENED';
const DETAILS_CLOSED = 'app/details/DETAILS_CLOSED';

const openDetails = () => ({ type: DETAILS_OPENED, payload: true });
const closeDetails = () => ({ type: DETAILS_CLOSED, payload: false });

const reducer = (state = false, action) => {
  const { type, payload } = action;

  switch (type) {
    case DETAILS_OPENED:
      return payload;
    case DETAILS_CLOSED:
      return payload;
    default:
      return state;
  }
};

export { openDetails, closeDetails };
export default reducer;
