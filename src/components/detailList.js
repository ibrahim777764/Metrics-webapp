import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCovidFromApi, getCountry } from '../redux/actions/fetchapi';
import Details from './details';

const DetailsList = () => {
  const dispatch = useDispatch();
  const dataCovid = useSelector((state) => state.covidReducer);
  useEffect(() => {
    if (dataCovid.country.length === 0) {
      dispatch(getCovidFromApi());
    }
  }, []);
  // const todayDate = new Date().toISOString().slice(0, 10);
  const handleCountry = () => {
    const country = useParams();
    const hello = country.country;
    // const num = document.getElementById('date').value;
    const baseUrldate = `https://covid-api.mmediagroup.fr/v1/cases?country=${hello}`;
    const api = () => async () => {
      const request = await fetch(baseUrldate);
      const response = await request.json();
      // const data = response.dates[todayDate].countries[hello];
      // console.log(response, 'datafrom api for one country');
      dispatch(getCountry(response));
    };
    dispatch(api());
  };
  if (dataCovid.country.length === 0) {
    handleCountry();
  }
  // const { capital, country } = dataCovid.country.All;
  return (
    <div>
      <div className="cou">
        {/* {console.log(dataCovid.country)} */}
        <Details country={dataCovid.country} />
      </div>
    </div>
  );
};

export default DetailsList;
