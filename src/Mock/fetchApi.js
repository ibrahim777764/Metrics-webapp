const countries = () => Promise.resolve({
  data: [
    {
      code: 'IN',
      name: 'India',
      latest_data: {
        recovered: 12347,
      },
    },
    {
      code: 'AF',
      name: 'Afghanistan',
      latest_data: {
        recovered: 12347,
      },
    },
  ],
});

export default countries;
