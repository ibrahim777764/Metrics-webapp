const COUNTRY_SEARCHED = 'app/search/COUNTRY_SEARCHED';
const SEARCH_STARTED = 'app/search/SEARCH_STARTED';
const SEARCH_ENDED = 'app/search/SEARCH_ENDED';

const fetchCountry = (payload) => ({ type: COUNTRY_SEARCHED, payload });
const startSearch = () => ({ type: SEARCH_STARTED, payload: true });
const endSearch = () => ({ type: SEARCH_ENDED, payload: false });

const initialState = {
  searchOpen: false,
  searchResult: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case COUNTRY_SEARCHED:
      return {
        ...state,
        searchResult: [...payload],
      };
    case SEARCH_STARTED:
      return {
        ...state,
        searchResult: [],
        searchOpen: payload,
      };
    case SEARCH_ENDED:
      return {
        ...state,
        searchOpen: payload,
      };
    default:
      return state;
  }
};

const searchCountry = (name) => async (dispatch) => {
  await fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((data) => data.json())
    .then((data) => {
      const result = [];
      data.forEach((country) => {
        const {
          name,
          cca2,
          capital,
        } = country;

        const formattedCountry = {
          name,
          cca2,
          capital,
        };

        result.push(formattedCountry);
      });
      dispatch(fetchCountry(result));
    });
};

export { searchCountry, startSearch, endSearch };
export default reducer;
