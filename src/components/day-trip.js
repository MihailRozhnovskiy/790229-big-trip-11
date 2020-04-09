
export const createSiteDayTripTemplate = () => {
  const dayCounter = 1;
  const dayMonth = `MAR`;
  const dayDate = 18;

  return (
    `<ul class="trip-days">
      <li class="trip-days__item  day">
        <div class="day__info">
          <span class="day__counter">${dayCounter}</span>
          <time class="day__date" datetime="2019-03-18">${dayMonth} ${dayDate}</time>
        </div>

      </li>
    </ul>`
  );
};
