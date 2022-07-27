import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import randomNumber from '../logic/randomNumber';
import General from './General';
import { getCountryData } from '../redux/country/country';
import { openDetails } from '../redux/details/details';

const CountryDetails = ({ theme, countries }) => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const { country } = params;
    dispatch(openDetails());
    countries.forEach((count) => {
      if (count.name.common.toLowerCase() === country.toLowerCase()) {
        dispatch(getCountryData(count.cca2.toLowerCase()));
      }
    });
  }, []);

  const { country } = params;

  const { hsl } = theme;
  const shade = `${hsl + randomNumber(45, 53)}%)`;
  const style = {
    backgroundColor: shade,
  };

  return (
    <main className="w-full relative flex flex-col items-center top-16 z-0 text-white" style={style}>
      <h1 className="w-11/12 mt-4 capitalize">
        {country}
        {' / '}
        Details
      </h1>
      <General />
    </main>
  );
};

CountryDetails.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
  countries: PropTypes.instanceOf(Array).isRequired,
};

export default CountryDetails;
