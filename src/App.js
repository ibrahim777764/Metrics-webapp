import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Header from './components/Header';
import Home from './components/Home';
import CountryDetails from './components/CountryDetails';
import { getCountries } from './redux/countries/countries';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, []);
  const theme = useSelector((state) => state.theme, shallowEqual);
  const countries = useSelector((state) => state.countries, shallowEqual);

  return (
    <div className="w-screen h-screen relative overflow-x-hidden flex flex-col text-white">
      <Header theme={theme} />
      <Routes>
        <Route
          path="/"
          element={(<Home theme={theme} countries={countries} />)}
        />
        <Route
          path="/:country/details"
          element={(<CountryDetails theme={theme} countries={countries} />)}
        />
      </Routes>
    </div>
  );
};

export default App;
