import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch, FaChevronLeft } from 'react-icons/fa';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startSearch } from '../redux/search/search';
import { closeDetails } from '../redux/details/details';
import Form from './Form';

const Header = (props) => {
  const dispatch = useDispatch();
  const detailsOpen = useSelector((state) => state.details);
  const search = useSelector((state) => state.search, shallowEqual);
  const { theme } = props;
  const { hex } = theme;
  const style = {
    backgroundColor: hex,
  };

  const { searchOpen } = search;

  const handleClick = () => {
    dispatch(closeDetails());
  };

  const handleSearch = () => {
    dispatch(startSearch());
  };

  return (
    <header className="w-full flex fixed top-0 z-10 shadow-md items-center justify-between px-6 py-4" style={style}>
      {!detailsOpen && (
        <>
          <h1 className="text-3xl text-white font-bold">
            <span className="text-black">Cultur</span>
            escape
          </h1>
          <section className="flex items-center text-2xl">
            {!searchOpen && (
              <button type="button" onClick={handleSearch}>
                <FaSearch />
              </button>
            )}
            {searchOpen && <Form />}
          </section>
        </>
      )}
      {detailsOpen && (
        <NavLink to="/" className="flex items-center text-2xl" onClick={handleClick}>
          <FaChevronLeft className="mr-1" />
          {' '}
          Home
        </NavLink>
      )}
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
};

export default Header;
