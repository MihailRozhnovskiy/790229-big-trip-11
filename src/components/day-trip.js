
import {AbstractComponent} from "./abstract-component.js";

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

export class Day extends AbstractComponent {
  constructor(days) {
    super();

    this._days = days;
  }

  getTemplate() {
    return createSiteDayTripTemplate(this._days);
  }
}
