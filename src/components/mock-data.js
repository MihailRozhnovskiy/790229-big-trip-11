
const QUANTITY = 5;

//site-info
const routeCities = [`Amsterdam`, `Chamonix`, `Geneva`].join(` &mdash; `);
const month = `Mar`;
const dateStart = 18;
const dateEnd = 20;
const total = 1230;

//site-form
const luggage = 30;
const comfort = 100;
const meal = 15;
const seat = 5;
const train = 40;
const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
//foto ???

//day-trip
const dayCounter = 1;
const dayMonth = `MAR`;
const dayDate = 18;



//point-trip
export const renderMock = () => {
  const mockPoints = [];
  const types = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check`, `Sightseeing`, `Restaurant`];
  const cities = [`Amsterdam`, `London`, `Geneva`, `Paris`, `Rome`, `Milan`, `Vienna`, `Yerevan`, `Minsk`];

  for (let i = 1; i <= QUANTITY; i++) {
    const pointData = {
      typePoint: types[Math.floor(Math.random() * types.length)],
      city: cities[Math.floor(Math.random() * cities.length)],
      offer: {
        luggage: i * 30,
        comfort: i * 100,
        meal: i * 15,
        seat: i + 5,
        train: i + 40,
      },
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      photo: `http://picsum.photos/248/152?r=${Math.random()}`,
      timeStart: `10:00`,
      timeEnd: `10:30`,
      price: i * 20,
      orderUber: i + 20
    };
    mockPoints.push(pointData);
  }
  return mockPoints;
};
