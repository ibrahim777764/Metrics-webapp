const FETCH_COVID = 'FETCH_COVID';
const FETCH_COUNTRY = 'FETCH_COUNTRY';

// const todayDate = new Date().toISOString().slice(0, 10);

const baseUrldate = 'https://covid-api.mmediagroup.fr/v1/cases';
const initialState = {
  covid: [],
  country: [],
};

export const getCovid = (payload) => ({
  type: FETCH_COVID,
  payload,
});

export const getCountry = (payload) => ({
  type: FETCH_COUNTRY,
  payload,
});

export const getCovidFromApi = () => async (dispatch) => {
  const request = await fetch(baseUrldate);
  const response = await request.json();
  // console.log(response, 'response fo');
  // const data = response.dates[todayDate].countries;
  const entries = Object.entries(response);
  dispatch(getCovid(entries));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COVID:
      return { ...state, covid: action.payload };
    case FETCH_COUNTRY:
      return { ...state, country: action.payload };
    default:
      return state;
  }
};

export default reducer;
