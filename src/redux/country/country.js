const COUNTRY_SELECTED = 'app/country/COUNTRY_SELECTED';

const selectCountry = (payload) => ({ type: COUNTRY_SELECTED, payload });

const reducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case COUNTRY_SELECTED:
      return {
        ...payload,
      };
    default:
      return state;
  }
};

const getCountryData = (iso) => async (dispatch) => {
  await fetch(`https://restcountries.com/v3.1/alpha/${iso}`)
    .then((data) => data.json())
    .then((data) => {
      const {
        name,
        cca2,
        cca3,
        independent,
        unMember,
        currencies,
        capital,
        region,
        subregion,
        languages,
        latlng: coordinates,
        landlocked,
        area,
        population,
        fifa,
        car: { side: drivingSide },
        timezones,
        continents,
        flags: { svg: flag },
        coatOfArms: { svg: emblem },
        startOfWeek,
      } = data[0];

      const formattedData = {
        name,
        cca2,
        cca3,
        independent,
        unMember,
        currencies,
        capital,
        region,
        subregion,
        languages,
        coordinates,
        landlocked,
        area,
        population,
        fifa,
        drivingSide,
        timezones,
        continents,
        flag,
        emblem,
        startOfWeek,
      };

      dispatch(selectCountry(formattedData));
    });
};

export { getCountryData };
export default reducer;
