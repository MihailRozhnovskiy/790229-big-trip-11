
const createSiteDayTrip = (dayCounter, dayDate) => {
  return (
    `<ul class="trip-days">
      <li class="trip-days__item  day">
        <div class="day__info">
          <span class="day__counter">${dayCounter}</span>
          <time class="day__date" datetime="2019-03-18">${dayDate}</time>
        </div>

      </li>
    </ul>`
  );
};

export const createSiteDayTripTemplate = (days) => {
  const daySection = days.map((day) => createSiteDayTrip(day.dayCounter, day.dayDate)).join(``);
  return (
    `${daySection}`
  );
};
