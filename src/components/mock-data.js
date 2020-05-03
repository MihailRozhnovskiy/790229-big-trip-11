
export const renderMock = (QUANTITY) => {
  const tripDays = [];
  const types = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`];
  const cities = [`Amsterdam`, `London`, `Geneva`, `Paris`, `Rome`, `Milan`, `Vienna`, `Yerevan`, `Minsk`];
  if (QUANTITY === 0) {
    return tripDays;
  } else {
    for (let i = 1; i <= QUANTITY; i++) {
      const tripDay = {
        dayCounter: i,
        dayDate: `MAR ${17 + i}`,
        point: {
          typePoint: types[Math.floor(Math.random() * types.length)],
          city: cities[Math.floor(Math.random() * cities.length)],
          offer: {
            luggage: 30 + i,
            comfort: 100 * i,
            meal: 15 + i,
            seat: 5 + i,
            train: 40 + i,
          },
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
          photo: [`img/photos/1.jpg`, `img/photos/2.jpg`, `img/photos/3.jpg`, `img/photos/4.jpg`, `img/photos/5.jpg`],
          timeStart: i + `:00`,
          timeEnd: i * 2 + `:00`,
          period: i * 2 - i,
          price: 20 * i,
          orderUber: 20 * i
        }
      };
      tripDays.push(tripDay);
    }
  }
  return tripDays;
};

