import {createElement} from "../utils";

const createSiteDayTrip = (dayCounter, dayDate) => {
  return (
    `<li class="trip-days__item  day">
        <div class="day__info">
          <span class="day__counter">${dayCounter}</span>
          <time class="day__date" datetime="2019-03-18">${dayDate}</time>
        </div>
        
      </li>`
  );
};

const createSiteDayTripTemplate = (days) => {
  const daySection = days.map((day) => createSiteDayTrip(day.dayCounter, day.dayDate)).join(``);
  return (
    `<ul class="trip-days">
      ${daySection}
    </ul>`
  );
};

export class Day {
  constructor(days) {
    this._days = days;

    this._element = null;
  }

  getTemplate() {
    return createSiteDayTripTemplate(this._days);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
