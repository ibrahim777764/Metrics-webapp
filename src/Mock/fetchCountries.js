import countries from './fetchApi';

const fetchingData = () => countries().then((data) => (data));

export default fetchingData;
