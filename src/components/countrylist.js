import { FaArrowCircleRight } from 'react-icons/fa';

const Country = (props) => {
  const country = props;
  // console.log(country.links);
  return (
    <div className="wrapper">
      <div className="btn-head">
        <h1 className="btn" type="button" id={country.country}>{country.country}</h1>
        <a className="click-link" href={country.country}>
          <FaArrowCircleRight />
        </a>
      </div>
      <p>
        Total-Confirmed:
        {country.links.All.confirmed}
      </p>
      <p>
        Total Recovered:
        {country.links.All.recovered}
      </p>
      <p>
        life_expectancy:
        {country.links.All.life_expectancy}
      </p>
    </div>
  );
};

export default Country;
