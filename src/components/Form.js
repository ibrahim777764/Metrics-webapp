import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { searchCountry } from '../redux/search/search';

const Form = () => {
  const [country, setCountry] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchCountry(country));
  };

  return (
    <form className="w-full flex items-center text-sm md:text-md lg:text-xl text-blue-500 relative ml-3" onSubmit={handleSubmit}>
      <input className="w-full relative rounded-full transition-all outline-blue-100 focus:outline-blue-300 flex h-8 lg:pt-1 px-3" type="text" name="country" onChange={handleChange} placeholder="Search country" title="Enter country name" value={country} />
      <button className="flex items-center text-sm justify-center absolute right-3 rounded-full" type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default Form;
