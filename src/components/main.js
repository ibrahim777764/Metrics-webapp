import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Country from './countrylist';
import { getCovidFromApi } from '../redux/actions/fetchapi';

const Home = () => {
  const dispatch = useDispatch();
  const dataCovid = useSelector((state) => state.covidReducer);

  useEffect(() => {
    if (dataCovid) {
      dispatch(getCovidFromApi());
    }
  }, []);

  const [value, setValue] = useState('');
  const inputHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <form>
        <br />
        <input placeholder="SEARCH BY COUNTRY NAME" className="search" type="text" value={value} onChange={inputHandler} />
      </form>
      <div className="title">
        {' '}
        {value ? (
          dataCovid.covid
            .filter((countryData) => countryData[0]
              .toLowerCase()
              .includes(value.toLocaleLowerCase()))
            .map((country) => (
              <Country key={country[0]} country={country[0]} links={country[1]} />
            ))
        )
          : (
            dataCovid.covid.map((ele) => (
              <Country key={ele[0]} country={ele[0]} links={ele[1]} />
            ))
          )}
      </div>
    </div>
  );
};

export default Home;
