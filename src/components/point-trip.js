
const createPointTrip = (typePoint, city, timeStart, timeEnd, price, orderUber) => {

  return (
    `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${typePoint}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${typePoint} to ${city}</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-18T10:30">${timeStart}</time>
            &mdash;
            <time class="event__end-time" datetime="2019-03-18T11:00">${timeEnd}</time>
          </p>
          <p class="event__duration">30M</p>
        </div>

        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${price}</span>
        </p>

        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          <li class="event__offer">
            <span class="event__offer-title">Order Uber</span>
            &plus;
            &euro;&nbsp;<span class="event__offer-price">${orderUber}</span>
           </li>
        </ul>

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
};

export const createSitePointTripTemplate = (points) => {
  const pointSection = points.map((it) => createPointTrip(it.typePoint, it.city, it.timeStart, it.timeEnd, it.price, it.orderUber)).join(``);
  return (
    `<ul class="trip-events__list">
    ${pointSection}
    </ul>`
  );
};
