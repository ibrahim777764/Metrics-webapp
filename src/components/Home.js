import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import CountryPreview from './CountryPreview';
import ErrorBoundary from './ErrorBoundary';
import { endSearch } from '../redux/search/search';

const Home = ({ theme, countries }) => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search, shallowEqual);

  const { hsl } = theme;
  const { searchOpen, searchResult } = search;

  const handleClose = () => {
    dispatch(endSearch());
  };

  return (
    <main className="h-full w-full relative top-16 z-0 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
      {
        countries.map((country) => (
          <CountryPreview
            key={country.cca2.toLowerCase()}
            hsl={hsl}
            country={country}
          />
        ))
      }
      <ErrorBoundary>
        {
          searchOpen && (searchResult.length !== 0) && (
            <section className="absolute rounded overflow-hidden shadow-2xl w-10/12 md:w-5/12 z-20 top-3 right-3 bg-white text-blue-500 flex flex-col">
              {
                searchResult.map((country) => (
                  <NavLink
                    to={`/${country.name.common.toLowerCase()}/details`}
                    className="flex justify-between even:bg-slate-100 p-2 items-center"
                    key={country.cca2}
                    onClick={handleClose}
                  >
                    <span>
                      {country.name.common}
                      {', '}
                      {country.capital[0]}
                    </span>
                    <FaRegArrowAltCircleRight className="text-base ml-1" />
                  </NavLink>
                ))
              }
            </section>
          )
        }
      </ErrorBoundary>
    </main>
  );
};

Home.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
  countries: PropTypes.instanceOf(Array).isRequired,
};

export default Home;
