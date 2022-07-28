import { useParams } from 'react-router-dom';

const Details = (props) => {
  const data = props;
  const country = useParams();
  return (
    <div className="details">
      <div className="contry-div">
        <h1>
          Country:
          {country.country}
        </h1>
      </div>
      <div className="info">
        <div className="details-div">
          <div className="dates">
            <h2 className="date-head">DETAILS</h2>
            <p>
              <b>Capital:</b>
              { data.country.All?.capital_city}
            </p>
          </div>
          <div className="main-wrap">
            <div className="sor">
              <p className="dat-type">TOTAL CONFIRMED:</p>
              <b className="dat-type">{data.country.All?.confirmed}</b>
            </div>
            <div className="sor">
              <p className="dat-type">TOTAL DEATH:</p>
              <b className="dat-type">{data.country.All?.deaths}</b>
            </div>
            <div className="sor">
              <p>Life_expectancy:</p>
              <b className="dat-type">{ data.country.All?.life_expectancy}</b>
            </div>
            <div className="sor">
              <p>population:</p>
              <b className="dat-type">{ data.country.All?.population}</b>
            </div>
            <div className="sor">
              <p>Latitude:</p>
              <b className="dat-type">{data.country.All?.lat }</b>
            </div>
            <div className="sor">
              <p>Longtitide:</p>
              <b className="dat-type">{ data.country.All?.long}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
