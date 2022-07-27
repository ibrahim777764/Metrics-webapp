const getRandomNum = (min, max) => {
  const minTop = Math.ceil(min);
  const maxBot = Math.floor(max);
  return Math.floor(Math.random() * (maxBot - minTop + 1) + minTop);
};

export default getRandomNum;
