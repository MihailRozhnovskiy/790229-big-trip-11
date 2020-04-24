
import {createElement} from "../utils";

const createSiteInfoTemplate = (dateStart, dateEnd, routeCities) => {

  return (
    `<div class="trip-info__main">
        <h1 class="trip-info__title">${routeCities}</h1>

        <p class="trip-info__dates">${dateStart}&nbsp;&mdash;&nbsp;${dateEnd}</p>
      </div>

        <p class="trip-info__cost">
          Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
        </p>`
  );
};


export class Info {
  constructor(dateStart, dateEnd, routeCities) {
    this._dateStart = dateStart;
    this._dateEnd = dateEnd;
    this._routeCities = routeCities;

    this._element = null;
  }

  getTemplate() {
    return createSiteInfoTemplate(this._dateStart, this._dateEnd, this._routeCities);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate(), `section`, `trip-main__trip-info  trip-info`);
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
