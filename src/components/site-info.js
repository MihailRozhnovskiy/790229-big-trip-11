
import {AbstractComponent} from "./abstract-component.js";

const createSiteInfoTemplate = (dateStart, dateEnd, routeCities) => {

  let dateSt = dateStart;
  let dateEn = dateEnd;
  let dash = `&nbsp;&mdash;&nbsp`;
  let routePoints = routeCities;
  let total = 1230;

  if (dateStart === undefined && dateEnd === undefined && routeCities === undefined) {
    dateSt = ``;
    dateEn = ``;
    dash = ``;
    routePoints = ``;
    total = 0;
  }

  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${routePoints}</h1>

        <p class="trip-info__dates">${dateSt}${dash}${dateEn}</p>
      </div>

        <p class="trip-info__cost">
          Total: &euro;&nbsp;<span class="trip-info__cost-value">${total}</span>
        </p>
    </section>`
  );
};


export class Info extends AbstractComponent {
  constructor(dateStart, dateEnd, routeCities) {
    super();

    this._dateStart = dateStart;
    this._dateEnd = dateEnd;
    this._routeCities = routeCities;
  }

  getTemplate() {
    return createSiteInfoTemplate(this._dateStart, this._dateEnd, this._routeCities);
  }
}
