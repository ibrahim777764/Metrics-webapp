import React from 'react';
import { useSelector } from 'react-redux';

const General = () => {
  const country = useSelector((state) => state.country);

  const {
    cca2,
    cca3,
    independent,
    unMember,
    capital,
    region,
    subregion,
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
  } = country;

  return (
    <main className="w-full flex flex-col items-center">
      <section className="w-11/12 grid grid-cols-2 shadow-md my-3 p-2">
        <div className="flex items-center justify-center">
          <img src={flag} alt={cca3} className="aspect-square" />
        </div>
        <div className="flex items-center justify-center">
          <img src={emblem} alt={cca3} className="w-10/12 aspect-square" />
        </div>
      </section>
      <section className="w-full bg-gray-800 flex flex-col py-5 px-10 capitalize">
        <h3 className="font-semibold text-xl">General</h3>
        <p className="ml-3">
          Capital city:
          {' '}
          {capital}
        </p>
        <p className="ml-3">
          Continents:
          {' '}
          {continents}
        </p>
        <p className="ml-3">
          Population:
          {' '}
          {population}
        </p>
        <h3 className="font-semibold text-xl">Legal status</h3>
        <p className="ml-3">
          Independent:
          {' '}
          {independent ? <span className="text-green-400">Yes</span> : <span className="text-red-400">No</span>}
        </p>
        <p className="ml-3">
          UN membership:
          {' '}
          {unMember ? <span className="text-green-400">Yes</span> : <span className="text-red-400">No</span>}
        </p>
        <h3 className="font-semibold text-xl">Geography</h3>
        <p className="ml-3">
          Coordinates:
          {' '}
          {coordinates}
        </p>
        <p className="ml-3">
          Region:
          {' '}
          {region}
        </p>
        <p className="ml-3">
          Sub-region:
          {' '}
          {subregion}
        </p>
        <p className="ml-3">
          Landlocked:
          {' '}
          {landlocked ? <span className="text-red-400">Yes</span> : <span className="text-green-400">No</span>}
        </p>
        <p className="ml-3">
          Area:
          {' '}
          {area}
        </p>
        <p className="ml-3">
          Timezones:
          {' '}
          {timezones}
        </p>
        <h3 className="font-semibold text-xl">ISO codes</h3>
        <p className="ml-3">
          CCA2:
          {' '}
          {cca2}
        </p>
        <p className="ml-3">
          CCA3:
          {' '}
          {cca3}
        </p>
        <h3 className="font-semibold text-xl">Other</h3>
        <p className="ml-3 capitalize">
          Start of week:
          {' '}
          {startOfWeek}
        </p>
        <p className="ml-3">
          Fifa code:
          {' '}
          {fifa}
        </p>
        <p className="ml-3">
          Driving side:
          {' '}
          {drivingSide}
        </p>
      </section>
    </main>
  );
};

export default General;
