import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import randomNumber from '../logic/randomNumber';
import '../sass/CountryPreview.scss';

const CountryPreview = (props) => {
  const [path, setPath] = useState('');
  useEffect(() => {
    const { country: { cca2 } } = props;
    import(`../data/countries/${cca2.toLowerCase()}/vector.svg`)
      .catch(() => import('../data/countries/cd/vector.svg'))
      .then(({ default: path }) => {
        setPath(path);
      });
  }, []);

  const { hsl, country } = props;
  const { name: { common }, capital } = country;

  const shade = `${hsl + randomNumber(43, 55)}%)`;
  const style = {
    backgroundColor: shade,
  };

  return (
    <NavLink to={`/${common.toLowerCase()}/details`} className="h-full w-full relative flex flex-col items-end justify-between text-2xl lg:text-xl text-white p-4 aspect-square CountryPreview" style={style}>
      <img src={path} alt={common} className="w-3/5 absolute top-4 left-4 z-0 opacity-30" />
      <FaRegArrowAltCircleRight className="z-10" />
      <section className="flex flex-col items-end text-right z-10">
        <h2 className="font-black">
          {common}
        </h2>
        <p className="text-gray-300 text-xl text-right">
          {capital}
        </p>
      </section>
    </NavLink>
  );
};

CountryPreview.propTypes = {
  hsl: PropTypes.string.isRequired,
  country: PropTypes.instanceOf(Object).isRequired,
};

export default CountryPreview;
